let recognizer = null;
let delegate = "GPU";
let inferenceFrames = 0;
let inferenceAt = performance.now();
let busy = false;

self.onmessage = async (event) => {
  const message = event.data || {};
  if (message.type === "init") {
    try {
      await initialize(message);
      self.postMessage({ type: "ready", delegate });
    } catch (error) {
      self.postMessage({
        type: "error",
        message: error?.message || "Vision worker initialization failed.",
      });
    }
    return;
  }
  if (message.type === "frame") {
    if (!recognizer || busy) {
      message.bitmap?.close?.();
      return;
    }
    busy = true;
    const started = message.startedAt || performance.now();
    try {
      const raw = recognizer.recognizeForVideo(
        message.bitmap,
        message.timestamp,
      );
      message.bitmap?.close?.();
      self.postMessage({
        type: "result",
        id: message.id,
        result: normalize(raw),
        startedAt: started,
      });
      inferenceFrames += 1;
      const now = performance.now();
      if (now - inferenceAt >= 1000) {
        const inferenceHz = Math.round(
          (inferenceFrames * 1000) / (now - inferenceAt),
        );
        inferenceFrames = 0;
        inferenceAt = now;
        self.postMessage({ type: "stats", delegate, inferenceHz });
      }
    } catch (error) {
      message.bitmap?.close?.();
      self.postMessage({
        type: "error",
        message: error?.message || "Vision inference failed.",
      });
    } finally {
      busy = false;
    }
  }
};

async function initialize({ moduleUrls, wasmUrls, modelUrl }) {
  let module, lastError;
  for (const url of moduleUrls || []) {
    try {
      module = await import(url);
      if (module?.FilesetResolver && module?.GestureRecognizer) break;
    } catch (error) {
      lastError = error;
    }
  }
  if (!module)
    throw (
      lastError || new Error("Could not load MediaPipe Vision in the worker.")
    );
  let vision;
  for (const wasmUrl of wasmUrls || []) {
    try {
      vision = await module.FilesetResolver.forVisionTasks(wasmUrl);
      if (vision) break;
    } catch (error) {
      lastError = error;
    }
  }
  if (!vision) throw lastError || new Error("Could not load MediaPipe WASM.");
  const common = {
    runningMode: "VIDEO",
    numHands: 2,
    minHandDetectionConfidence: 0.52,
    minHandPresenceConfidence: 0.52,
    minTrackingConfidence: 0.52,
    cannedGesturesClassifierOptions: { scoreThreshold: 0.45, maxResults: 1 },
  };
  try {
    recognizer = await module.GestureRecognizer.createFromOptions(vision, {
      ...common,
      baseOptions: { modelAssetPath: modelUrl, delegate: "GPU" },
    });
    delegate = "GPU";
  } catch (gpuError) {
    recognizer = await module.GestureRecognizer.createFromOptions(vision, {
      ...common,
      baseOptions: { modelAssetPath: modelUrl, delegate: "CPU" },
    });
    delegate = "CPU";
  }
}

function normalize(result) {
  return {
    landmarks: (result?.landmarks || []).map((landmarks) =>
      landmarks.map((p) => ({
        x: p.x,
        y: p.y,
        z: p.z || 0,
        visibility: p.visibility || 1,
      })),
    ),
    gestures: (result?.gestures || []).map((list) =>
      (list || []).slice(0, 1).map((item) => ({
        categoryName: item.categoryName,
        score: item.score,
      })),
    ),
    handedness: (result?.handedness || []).map((list) =>
      (list || []).slice(0, 1).map((item) => ({
        categoryName: item.categoryName,
        score: item.score,
      })),
    ),
  };
}
