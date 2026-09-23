const APP_VERSION = "2.1.4";
const MEDIAPIPE_VERSION = "1.0.1";
const MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task";
const VISION_MODULE_URLS = [
  `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MEDIAPIPE_VERSION}/vision_bundle.mjs`,
  `https://unpkg.com/@mediapipe/tasks-vision@${MEDIAPIPE_VERSION}/vision_bundle.mjs`,
];
const WASM_URLS = [
  `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MEDIAPIPE_VERSION}/wasm`,
  `https://unpkg.com/@mediapipe/tasks-vision@${MEDIAPIPE_VERSION}/wasm`,
];

const STATIC_GESTURES = {
  Open_Palm: {
    emoji: "✋",
    name: "HELLO",
    meaning: "Pause / welcome",
    description: "All fingers extended with the palm open.",
    caption: "OPEN PALM",
    type: "STATIC",
  },
  Thumb_Up: {
    emoji: "👍",
    name: "GOOD",
    meaning: "Confirm / good",
    description: "Thumb raised with the other fingers folded.",
    caption: "THUMBS UP",
    type: "STATIC",
  },
  Thumb_Down: {
    emoji: "👎",
    name: "BAD",
    meaning: "Reject / bad",
    description: "Thumb lowered with the other fingers folded.",
    caption: "THUMBS DOWN",
    type: "STATIC",
  },
  Victory: {
    emoji: "✌️",
    name: "PEACE",
    meaning: "Next / celebrate",
    description: "Index and middle fingers extended.",
    caption: "VICTORY",
    type: "STATIC",
  },
  Pointing_Up: {
    emoji: "☝️",
    name: "POINT",
    meaning: "Cursor / focus",
    description: "Index finger raised while the other fingers are folded.",
    caption: "POINTING",
    type: "STATIC",
  },
  Closed_Fist: {
    emoji: "✊",
    name: "FIST",
    meaning: "Grab / hold",
    description: "All fingers folded into a closed hand.",
    caption: "CLOSED FIST",
    type: "STATIC",
  },
  ILoveYou: {
    emoji: "🤟",
    name: "I LOVE YOU",
    meaning: "Express",
    description: "Thumb, index and little finger extended.",
    caption: "I LOVE YOU",
    type: "STATIC",
  },
  OK: {
    emoji: "👌",
    name: "OK",
    meaning: "Select",
    description: "Thumb and index finger form a small ring.",
    caption: "OK",
    type: "STATIC",
  },
  Rock: {
    emoji: "🤘",
    name: "ROCK",
    meaning: "Trigger",
    description: "Index and little fingers extended.",
    caption: "ROCK",
    type: "STATIC",
  },
  Three: {
    emoji: "3",
    name: "THREE",
    meaning: "Number",
    description: "Three fingers extended.",
    caption: "THREE",
    type: "STATIC",
  },
  Four: {
    emoji: "4",
    name: "FOUR",
    meaning: "Number",
    description: "Four fingers extended.",
    caption: "FOUR",
    type: "STATIC",
  },
  CallMe: {
    emoji: "🤙",
    name: "CALL ME",
    meaning: "Contact",
    description: "Thumb and little finger extended.",
    caption: "CALL ME",
    type: "STATIC",
  },
  LShape: {
    emoji: "L",
    name: "L SHAPE",
    meaning: "Mark",
    description: "Thumb and index finger form an L.",
    caption: "L SHAPE",
    type: "STATIC",
  },
  GOSI: {
    emoji: "🖕",
    name: "***",
    meaning: "Custom expression",
    description:
      "Middle finger extended while the index, ring, and little fingers stay folded.",
    caption: "GOSI",
    type: "STATIC",
  },
};

const DYNAMIC_GESTURES = {
  Swipe_Left: {
    emoji: "←",
    name: "SWIPE LEFT",
    meaning: "Back / previous",
    description: "A fast leftward hand movement.",
    caption: "MOTION",
    type: "MOTION",
  },
  Swipe_Right: {
    emoji: "→",
    name: "SWIPE RIGHT",
    meaning: "Next / forward",
    description: "A fast rightward hand movement.",
    caption: "MOTION",
    type: "MOTION",
  },
  Swipe_Up: {
    emoji: "↑",
    name: "SWIPE UP",
    meaning: "Open / raise",
    description: "A fast upward hand movement.",
    caption: "MOTION",
    type: "MOTION",
  },
  Swipe_Down: {
    emoji: "↓",
    name: "SWIPE DOWN",
    meaning: "Dismiss / lower",
    description: "A fast downward hand movement.",
    caption: "MOTION",
    type: "MOTION",
  },
  Pinch: {
    emoji: "🤏",
    name: "PINCH",
    meaning: "Select / grab",
    description: "Thumb and index fingertips come together.",
    caption: "CONTINUOUS",
    type: "CONTINUOUS",
  },
  Pinch_Hold: {
    emoji: "🤏",
    name: "PINCH HOLD",
    meaning: "Grab / drag",
    description: "Pinch remains engaged long enough to become a hold.",
    caption: "HOLD",
    type: "MOTION",
  },
  Fist_Hold: {
    emoji: "✊",
    name: "FIST HOLD",
    meaning: "Stop / lock",
    description: "A fist remains stable for a sustained hold.",
    caption: "HOLD",
    type: "HOLD",
  },
  Two_Hand_Pinch: {
    emoji: "◎",
    name: "TWO-HAND PINCH",
    meaning: "Scale / transform",
    description: "Both hands pinch to reshape the active field.",
    caption: "CONTINUOUS",
    type: "CONTINUOUS",
  },
};

const ALL_GESTURES = { ...STATIC_GESTURES, ...DYNAMIC_GESTURES };
const STORAGE = {
  history: "nyx-history-v4",
  settings: "nyx-settings-v2",
};

const DEFAULT_SETTINGS = {
  performance: "balanced",
  sound: true,
  reducedMotion: false,
  trails: true,
  diagnostics: false,
  mirror: true,
  overlay: true,
  activeCameraId: "default",
};

const els = Object.fromEntries(
  [
    "appShell",
    "workspace",
    "video",
    "overlay",
    "trailCanvas",
    "cameraCard",
    "cameraStage",
    "cameraEmpty",
    "startButton",
    "stopButton",
    "cameraSwitch",
    "mirrorButton",
    "overlayButton",
    "trailButton",
    "snapshotButton",
    "fullscreenButton",
    "livePill",
    "liveText",
    "cameraStatus",
    "processingLabel",
    "deviceStateLabel",
    "cameraBottomStatus",
    "cameraGestureEmoji",
    "cameraGestureName",
    "handSummary",
    "handCount",
    "fpsLabel",
    "inferenceLabel",
    "gestureEmoji",
    "resultName",
    "resultDescription",
    "confidenceValue",
    "confidenceBar",
    "resultCard",
    "detectionModeLabel",
    "detectionMeta",
    "historyList",
    "clearHistory",
    "gestureGrid",
    "libraryCount",
    "soundToggle",
    "toast",
    "resetSession",
    "recognizedCount",
    "uniqueCount",
    "dualCount",
    "bestConfidence",
    "exportSession",
    "handGrid",
    "handsModeLabel",
    "topModeText",
    "installButton",
    "settingsButton",
    "mobileSettingsButton",
    "performanceSelect",
    "cameraSelect",
    "soundSetting",
    "motionSetting",
    "trailSetting",
    "diagnosticSetting",
    "permissionStatus",
    "diagnosticsButton",
    "diagFps",
    "diagInference",
    "diagLatency",
    "diagDelegate",
    "diagWorker",
    "diagHands",
    "diagEvent",
    "diagVision",
    "diagnosticLog",
    "controlSurface",
    "controlHint",
    "virtualCursor",
    "playgroundCanvas",
    "playgroundStage",
    "playgroundMeta",
    "playgroundState",
    "playgroundHands",
    "playgroundAction",
    "fxCanvas",
    "fxStage",
    "fxMeta",
    "fxState",
    "fxGesture",
    "fxMetric",
    "engineLabel",
  ].map((id) => [id, document.getElementById(id)]),
);

const state = {
  settings: loadJSON(STORAGE.settings, DEFAULT_SETTINGS),
  mode: "recognize",
  cameraStarted: false,
  cameraFacing: "user",
  stream: null,
  worker: null,
  workerReady: false,
  workerInitPromise: null,
  workerRequestId: 0,
  inferenceInFlight: false,
  mainRecognizer: null,
  mainVisionModule: null,
  mainWasmUrl: null,
  mainReady: false,
  mainFallback: false,
  initializing: false,
  lastResult: { hands: [] },
  lastInferenceLatency: 0,
  lastInferenceAt: 0,
  inferenceHz: 0,
  inferenceSamples: 0,
  inferenceSampleAt: performance.now(),
  previewFrames: 0,
  previewFps: 0,
  previewSampleAt: performance.now(),
  renderRaf: 0,
  inferenceRaf: 0,
  fpsRaf: 0,
  lastInferenceAttempt: 0,
  detectionMode: "STANDBY",
  mirror: true,
  overlay: true,
  trails: true,
  sound: true,
  reducedMotion:
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false,
  history: loadHistory(),
  lastHistoryKey: "",
  gestureStable: "None",
  gestureCandidate: "None",
  candidateHits: 0,
  noGestureHits: 0,
  staticHands: new Map(),
  handMotion: new Map(),
  dynamicCooldowns: new Map(),
  pinchState: new Map(),
  holdState: new Map(),
  lastEvent: null,
  eventLog: [],
  session: { events: 0, unique: new Set(), twoHand: 0, best: 0 },
  installPrompt: null,
  currentDeviceId: "default",
  devices: [],
  readyToSnapshot: false,
  pointer: {
    active: false,
    x: 0.5,
    y: 0.5,
    pinch: false,
    lastPinch: false,
    lastPinchAt: 0,
    overAction: null,
    hoverSince: 0,
  },
  lastModeGestureAt: 0,
  audioContext: null,
  particles: [],
  fxParticles: [],
  fxTrailHistory: new Map(),
  fxPinchState: new Map(),
  fxBursts: [],
  trailHistory: [],
  lastFrameTime: performance.now(),
  perf: "balanced",
};

state.currentDeviceId = state.settings.activeCameraId || "default";
state.mirror = state.settings.mirror;
state.overlay = state.settings.overlay;
state.trails = state.settings.trails;
state.sound = state.settings.sound;

const CONNECTIONS = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [0, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [0, 13],
  [13, 14],
  [14, 15],
  [15, 16],
  [0, 17],
  [17, 18],
  [18, 19],
  [19, 20],
  [5, 9],
  [9, 13],
  [13, 17],
];
const FINGER_CHAINS = {
  thumb: [1, 2, 4],
  index: [5, 6, 8],
  middle: [9, 10, 12],
  ring: [13, 14, 16],
  pinky: [17, 18, 20],
};

function $(id) {
  return document.getElementById(id);
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function nowMs() {
  return performance.now();
}
function normalizeAngle(angle) {
  while (angle > Math.PI) angle -= Math.PI * 2;
  while (angle < -Math.PI) angle += Math.PI * 2;
  return angle;
}
function loadJSON(key, fallback) {
  try {
    return {
      ...fallback,
      ...(JSON.parse(localStorage.getItem(key) || "null") || {}),
    };
  } catch {
    return { ...fallback };
  }
}
function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}
function loadHistory() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE.history) || "[]");
    return Array.isArray(value) ? value.slice(0, 30) : [];
  } catch {
    return [];
  }
}
function saveHistory() {
  try {
    localStorage.setItem(
      STORAGE.history,
      JSON.stringify(state.history.slice(0, 30)),
    );
  } catch {}
}
function timeAgo(timestamp) {
  const s = Math.max(1, Math.floor((Date.now() - timestamp) / 1000));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  return `${Math.floor(m / 60)}h`;
}
function gestureData(name) {
  return (
    ALL_GESTURES[name] || {
      emoji: "—",
      name: "NO GESTURE",
      meaning: "Waiting",
      description: "Show a clear hand gesture to the camera.",
      caption: "WAITING",
      type: "STATE",
    }
  );
}
function isMobile() {
  return window.matchMedia?.("(max-width: 720px)").matches || false;
}
function perfHz() {
  if (state.settings.performance === "high") return 12;
  if (state.settings.performance === "battery") return isMobile() ? 6 : 7;
  return isMobile() ? 8 : 10;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 2400);
}

function setLiveState(live) {
  els.livePill.classList.toggle("live", live);
  els.liveText.textContent = live ? "LIVE" : "OFFLINE";
  els.cameraStatus.textContent = live ? "CAMERA LIVE" : "CAMERA OFF";
}

function openDialog(id) {
  const dialog = $(id);
  if (!dialog?.open) dialog?.showModal();
}
function closeDialogs() {
  document.querySelectorAll("dialog[open]").forEach((dialog) => dialog.close());
}

function addDiagnostic(message) {
  state.eventLog.unshift({ time: Date.now(), message });
  state.eventLog = state.eventLog.slice(0, 16);
  if (els.diagnosticLog)
    els.diagnosticLog.innerHTML = state.eventLog
      .map(
        (item) =>
          `<div><time>${new Date(item.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</time><span>${escapeHTML(item.message)}</span></div>`,
      )
      .join("");
}
function escapeHTML(value) {
  return String(value).replace(
    /[&<>'"]/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        c
      ],
  );
}

function renderGestureGrid() {
  const entries = Object.entries(ALL_GESTURES);
  els.libraryCount.textContent = `${entries.length} GESTURES`;
  els.gestureGrid.innerHTML = entries
    .map(
      ([key, data]) => `
    <button class="gesture-tile" data-gesture="${key}" type="button">
      <span class="gesture-tile-top"><span class="gesture-tile-emoji">${data.emoji}</span><span class="gesture-type">${data.type}</span></span>
      <strong>${data.name}</strong>
      <span class="gesture-tile-meaning">${data.meaning}</span>
      <span class="gesture-tile-description">${data.description}</span>
    </button>`,
    )
    .join("");
}

function renderHistory() {
  if (!state.history.length) {
    els.historyList.innerHTML = `<div class="history-empty">Recognized gestures will appear here.</div>`;
    return;
  }
  els.historyList.innerHTML = state.history
    .slice(0, 10)
    .map((item) => {
      const data = gestureData(item.gesture);
      return `<div class="history-item"><div class="history-emoji">${data.emoji}</div><div><div class="history-name">${data.name}</div><div class="history-time">${item.hands || 1} hand${item.hands === 1 ? "" : "s"} · ${timeAgo(item.timestamp)}</div></div><div class="history-confidence">${Math.round((item.confidence || 0) * 100)}%</div></div>`;
    })
    .join("");
}

function registerGestureEvent(gesture, confidence, hands, source = "gesture") {
  if (!gesture || gesture === "None" || confidence < 0.56) return;
  const last = state.history[0];
  const duplicate =
    last && last.gesture === gesture && Date.now() - last.timestamp < 650;
  if (!duplicate) {
    state.history.unshift({
      gesture,
      confidence,
      hands,
      source,
      timestamp: Date.now(),
    });
    state.history = state.history.slice(0, 30);
    saveHistory();
    renderHistory();
  }

  state.lastEvent = {
    gesture,
    confidence,
    hands,
    source,
    timestamp: Date.now(),
  };
  state.session.events += 1;
  state.session.unique.add(gesture);
  if (hands >= 2) state.session.twoHand += 1;
  state.session.best = Math.max(state.session.best, confidence);
  updateSessionUI();
  highlightGesture(gesture);
  playTone(gesture);
  addDiagnostic(
    `${gestureData(gesture).name} · ${Math.round(confidence * 100)}% · ${hands} hand${hands === 1 ? "" : "s"}`,
  );
}

function updateSessionUI() {
  els.recognizedCount.textContent = String(state.session.events);
  els.uniqueCount.textContent = String(state.session.unique.size);
  els.dualCount.textContent = String(state.session.twoHand);
  els.bestConfidence.textContent = `${Math.round(state.session.best * 100)}%`;
}

function resetSession() {
  state.session = { events: 0, unique: new Set(), twoHand: 0, best: 0 };
  state.lastEvent = null;
  updateSessionUI();
  showToast("Session reset.");
  addDiagnostic("Session reset");
}

function highlightGesture(gesture) {
  document
    .querySelectorAll(".gesture-tile.active")
    .forEach((node) => node.classList.remove("active"));
  const tile = document.querySelector(
    `.gesture-tile[data-gesture="${CSS.escape(gesture)}"]`,
  );
  if (!tile) return;
  tile.classList.add("active");
  if (!state.reducedMotion)
    tile.animate(
      [{ transform: "translateY(-2px)" }, { transform: "translateY(0)" }],
      { duration: 260, easing: "ease-out" },
    );
}

function clearResult() {
  const none = gestureData("None");
  els.gestureEmoji.textContent = none.emoji;
  els.resultName.textContent = "No gesture";
  els.resultDescription.textContent = none.description;
  els.cameraGestureEmoji.textContent = "—";
  els.cameraGestureName.textContent = "No gesture";
  els.handSummary.textContent = "Waiting for a hand.";
  els.confidenceValue.textContent = "0%";
  els.confidenceBar.style.width = "0%";
  els.detectionModeLabel.textContent = "STANDBY";
  els.detectionMeta.textContent = "Detection";
  state.detectionMode = "STANDBY";
}

function updateMainGesture(
  gesture,
  confidence,
  hands,
  summary,
  handResults,
  eventLike = false,
) {
  const data = gestureData(gesture);
  const percentage = Math.round(clamp(confidence, 0, 1) * 100);
  els.gestureEmoji.textContent = data.emoji;
  els.resultName.textContent = data.name;
  els.resultDescription.textContent = summary || data.description;
  els.confidenceValue.textContent = `${percentage}%`;
  els.confidenceBar.style.width = `${percentage}%`;
  els.detectionModeLabel.textContent =
    gesture === "None" ? "STANDBY" : state.detectionMode;
  els.cameraGestureEmoji.textContent = data.emoji;
  els.cameraGestureName.textContent = data.name;
  els.handSummary.textContent =
    summary ||
    (hands
      ? `${hands} hand${hands === 1 ? "" : "s"} detected.`
      : "Waiting for a hand.");

  if (eventLike && gesture !== "None") {
    els.resultCard.classList.remove("flash");
    els.cameraCard.classList.remove("gesture-hit");
    requestAnimationFrame(() => {
      els.resultCard.classList.add("flash");
      els.cameraCard.classList.add("gesture-hit");
    });
    setTimeout(() => {
      els.resultCard.classList.remove("flash");
      els.cameraCard.classList.remove("gesture-hit");
    }, 520);
    registerGestureEvent(gesture, confidence, hands, "static");
  }

  updateHandCards(handResults);
}

function updateHandCards(handResults) {
  const bySide = { Left: null, Right: null };
  handResults.forEach((hand) => {
    if (bySide[hand.handedness] !== undefined) bySide[hand.handedness] = hand;
  });
  ["Left", "Right"].forEach((side) => {
    const card = els.handGrid.querySelector(`[data-hand="${side}"]`);
    const hand = bySide[side];
    if (!card) return;
    card.classList.toggle("empty", !hand);
    card.classList.toggle("active", !!hand && hand.gesture !== "None");
    const strong = card.querySelector("strong");
    const small = card.querySelector("small");
    strong.textContent = hand ? gestureData(hand.gesture).name : "—";
    small.textContent = hand
      ? `${Math.round(hand.confidence * 100)}% · ${hand.mode}`
      : "Not detected";
  });
}

function distance(a, b) {
  if (!a || !b) return 1;
  return Math.hypot(a.x - b.x, a.y - b.y, (a.z || 0) - (b.z || 0));
}
function angleAt(a, b, c) {
  if (!a || !b || !c) return 0;
  const ab = { x: a.x - b.x, y: a.y - b.y, z: (a.z || 0) - (b.z || 0) };
  const cb = { x: c.x - b.x, y: c.y - b.y, z: (c.z || 0) - (b.z || 0) };
  const denom = Math.hypot(ab.x, ab.y, ab.z) * Math.hypot(cb.x, cb.y, cb.z);
  if (!denom) return 0;
  return (
    (Math.acos(
      clamp((ab.x * cb.x + ab.y * cb.y + ab.z * cb.z) / denom, -1, 1),
    ) *
      180) /
    Math.PI
  );
}
function fingerExtended(landmarks, chain) {
  const [mcp, pip, tip] = chain.map((index) => landmarks[index]);
  return !!(
    mcp &&
    pip &&
    tip &&
    angleAt(mcp, pip, tip) > 146 &&
    distance(mcp, tip) > distance(mcp, pip) * 1.08
  );
}
function extendedState(landmarks) {
  return {
    thumb: fingerExtended(landmarks, FINGER_CHAINS.thumb),
    index: fingerExtended(landmarks, FINGER_CHAINS.index),
    middle: fingerExtended(landmarks, FINGER_CHAINS.middle),
    ring: fingerExtended(landmarks, FINGER_CHAINS.ring),
    pinky: fingerExtended(landmarks, FINGER_CHAINS.pinky),
  };
}
function classifyCustomGesture(landmarks) {
  if (!landmarks || landmarks.length < 21) return null;
  const f = extendedState(landmarks);
  const palm = Math.max(0.08, distance(landmarks[0], landmarks[9]));
  const pinchRatio = distance(landmarks[4], landmarks[8]) / palm;

  // GOSI is a custom single-finger pose: middle finger extended, all other fingers folded.
  // The explicit high-priority path prevents MediaPipe from relabeling it as POINTING_UP.
  const middleReach = distance(landmarks[0], landmarks[12]) / palm;
  const middleAngle = angleAt(landmarks[9], landmarks[10], landmarks[12]);
  const gosiPattern =
    f.middle &&
    !f.index &&
    !f.ring &&
    !f.pinky &&
    middleReach > 1.28 &&
    middleAngle > 150;
  if (gosiPattern) {
    const thumbBonus = f.thumb ? 0 : 0.025;
    const score = clamp(0.955 + thumbBonus, 0.955, 0.98);
    return { gesture: "GOSI", score };
  }

  if (pinchRatio < 0.42 && f.middle && f.ring && f.pinky)
    return { gesture: "OK", score: 0.93 };
  if (
    f.thumb &&
    f.index &&
    !f.middle &&
    !f.ring &&
    !f.pinky &&
    distance(landmarks[4], landmarks[8]) > palm * 0.7
  )
    return { gesture: "LShape", score: 0.9 };
  if (f.thumb && f.pinky && !f.index && !f.middle && !f.ring)
    return { gesture: "CallMe", score: 0.89 };
  if (f.index && f.pinky && !f.middle && !f.ring && !f.thumb)
    return { gesture: "Rock", score: 0.88 };
  if (!f.thumb && f.index && f.middle && f.ring && !f.pinky)
    return { gesture: "Three", score: 0.88 };
  if (!f.thumb && f.index && f.middle && f.ring && f.pinky)
    return { gesture: "Four", score: 0.87 };
  return null;
}

function handCenter(landmarks) {
  if (!landmarks?.length) return { x: 0.5, y: 0.5, z: 0 };
  const points = [
    landmarks[0],
    landmarks[5],
    landmarks[9],
    landmarks[13],
    landmarks[17],
  ].filter(Boolean);
  const sum = points.reduce(
    (acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y, z: acc.z + (p.z || 0) }),
    { x: 0, y: 0, z: 0 },
  );
  return {
    x: sum.x / points.length,
    y: sum.y / points.length,
    z: sum.z / points.length,
  };
}
function handFeatures(landmarks) {
  const fingers = extendedState(landmarks);
  const palm = Math.max(0.06, distance(landmarks[0], landmarks[9]));
  const pinchRatio = distance(landmarks[4], landmarks[8]) / palm;
  return {
    center: handCenter(landmarks),
    index: landmarks[8] || handCenter(landmarks),
    pinch: pinchRatio < 0.44,
    pinchRatio,
    palm,
    openness: Object.values(fingers).filter(Boolean).length,
    fingers,
  };
}

function classifyHands(result) {
  const landmarks = result?.landmarks || [];
  const handResults = [];
  for (let i = 0; i < landmarks.length; i++) {
    const custom = classifyCustomGesture(landmarks[i]);
    const modelTop = result?.gestures?.[i]?.[0];
    const modelGesture =
      modelTop?.categoryName && ALL_GESTURES[modelTop.categoryName]
        ? modelTop.categoryName
        : "None";
    const modelScore = modelTop?.score || 0;
    const chosen =
      custom?.gesture === "GOSI"
        ? { gesture: "GOSI", confidence: custom.score, mode: "CUSTOM" }
        : custom && custom.score >= modelScore
          ? {
              gesture: custom.gesture,
              confidence: custom.score,
              mode: "CUSTOM",
            }
          : { gesture: modelGesture, confidence: modelScore, mode: "MODEL" };
    const handedness =
      result?.handedness?.[i]?.[0]?.categoryName ||
      (i === 0 ? "Right" : "Left");
    const features = handFeatures(landmarks[i]);
    handResults.push({
      index: i,
      landmarks: landmarks[i],
      handedness,
      ...chosen,
      features,
    });
  }
  const valid = handResults
    .filter((item) => item.confidence >= 0.48)
    .sort((a, b) => b.confidence - a.confidence);
  const modes = [...new Set(valid.map((item) => item.mode))];
  state.detectionMode = valid.length
    ? modes.length === 1
      ? modes[0]
      : "MIXED"
    : "MODEL";
  const summary =
    valid.length === 0
      ? handResults.length
        ? `${handResults.length} hand${handResults.length === 1 ? "" : "s"} detected · hold a clearer pose`
        : "Waiting for a hand."
      : valid
          .slice(0, 2)
          .map(
            (hand) => `${hand.handedness}: ${gestureData(hand.gesture).name}`,
          )
          .join(" · ");
  const primary = valid[0] || { gesture: "None", confidence: 0 };
  return { handResults, primary, summary };
}

function stableStaticGesture(picked) {
  const gesture = picked.primary.gesture;
  const confidence = picked.primary.confidence;
  if (confidence < 0.5) {
    state.noGestureHits += 1;
    if (state.noGestureHits >= 3) {
      state.gestureCandidate = "None";
      state.candidateHits = 0;
      state.gestureStable = "None";
    }
    return { gesture: state.gestureStable, confidence: 0, changed: false };
  }
  state.noGestureHits = 0;
  if (gesture === state.gestureCandidate) state.candidateHits += 1;
  else {
    state.gestureCandidate = gesture;
    state.candidateHits = 1;
  }
  const threshold = gesture === "None" ? 3 : 2;
  if (state.candidateHits >= threshold && gesture !== state.gestureStable) {
    state.gestureStable = gesture;
    return { gesture, confidence, changed: true };
  }
  return { gesture: state.gestureStable, confidence, changed: false };
}

function motionGesture(hand) {
  const key = hand.handedness;
  const history = state.handMotion.get(key) || [];
  const now = nowMs();
  history.push({ ...hand.features.center, t: now });
  while (history.length > 8 || (history[0] && now - history[0].t > 420))
    history.shift();
  state.handMotion.set(key, history);
  if (history.length < 4) return null;
  const first = history[0];
  const last = history[history.length - 1];
  const dt = Math.max(40, last.t - first.t);
  const dx = last.x - first.x;
  const dy = last.y - first.y;
  const distanceMoved = Math.hypot(dx, dy);
  const speed = distanceMoved / (dt / 1000);
  if (distanceMoved < 0.19 || speed < 0.72 || dt > 480) return null;
  const horizontal = Math.abs(dx) >= Math.abs(dy);
  const gesture = horizontal
    ? dx < 0
      ? "Swipe_Left"
      : "Swipe_Right"
    : dy < 0
      ? "Swipe_Up"
      : "Swipe_Down";
  const cooldown = state.dynamicCooldowns.get(`${key}:${gesture}`) || 0;
  if (now < cooldown) return null;
  state.dynamicCooldowns.set(`${key}:${gesture}`, now + 700);
  return {
    gesture,
    confidence: clamp(0.7 + speed * 0.18, 0.7, 0.98),
    source: "motion",
  };
}

function trackHold(hand, stableGesture) {
  const key = hand.handedness;
  const now = nowMs();
  const existing = state.holdState.get(key) || {
    gesture: null,
    started: 0,
    emitted: false,
    pinch: false,
  };
  const current = hand.features.pinch
    ? "Pinch"
    : stableGesture === "Closed_Fist"
      ? "Fist_Hold"
      : null;
  if (!current) {
    if (existing.gesture && existing.emitted) {
      registerGestureEvent(
        existing.gesture === "Pinch" ? "Pinch_Hold" : existing.gesture,
        0.88,
        1,
        "release",
      );
    }
    state.holdState.delete(key);
    return;
  }
  if (existing.gesture !== current) {
    state.holdState.set(key, {
      gesture: current,
      started: now,
      emitted: false,
    });
    if (current === "Pinch") registerGestureEvent("Pinch", 0.9, 1, "motion");
    return;
  }
  if (!existing.emitted && now - existing.started > 820) {
    existing.emitted = true;
    registerGestureEvent(
      current === "Pinch" ? "Pinch_Hold" : current,
      0.9,
      1,
      "hold",
    );
  }
}

function processDynamicInteractions(handResults) {
  for (const hand of handResults) {
    const swipe = motionGesture(hand);
    if (swipe) {
      registerGestureEvent(
        swipe.gesture,
        swipe.confidence,
        handResults.length,
        "motion",
      );
      handleDynamicAction(swipe.gesture);
    }
    trackHold(hand, hand.gesture);
  }

  const left = handResults.find((hand) => hand.handedness === "Left");
  const right = handResults.find((hand) => hand.handedness === "Right");
  if (left && right) {
    const distanceBetween = distance(
      left.features.center,
      right.features.center,
    );
    const pinchBoth = left.features.pinch && right.features.pinch;
    if (pinchBoth) updateTwoHandTransform(left, right, distanceBetween);
    else resetTwoHandTransform();
  } else resetTwoHandTransform();
}

const twoHandTransform = {
  active: false,
  distance: 0,
  angle: 0,
  midpoint: { x: 0.5, y: 0.5 },
  lastDistance: 0,
  lastAngle: 0,
};
function updateTwoHandTransform(left, right, distanceBetween) {
  const midpoint = {
    x: (left.features.center.x + right.features.center.x) / 2,
    y: (left.features.center.y + right.features.center.y) / 2,
  };
  const angle = Math.atan2(
    right.features.center.y - left.features.center.y,
    right.features.center.x - left.features.center.x,
  );
  if (!twoHandTransform.active) {
    Object.assign(twoHandTransform, {
      active: true,
      distance: distanceBetween,
      angle,
      midpoint,
      lastDistance: distanceBetween,
      lastAngle: angle,
    });
    registerGestureEvent("Two_Hand_Pinch", 0.92, 2, "two-hand");
    return;
  }
  twoHandTransform.distance = distanceBetween;
  twoHandTransform.angle = angle;
  twoHandTransform.midpoint = midpoint;
}
function resetTwoHandTransform() {
  twoHandTransform.active = false;
}

function handleDynamicAction(gesture) {
  if (state.mode !== "control") return;
  const now = Date.now();
  if (now - state.lastModeGestureAt < 500) return;
  state.lastModeGestureAt = now;
  if (gesture === "Swipe_Left") setMode("recognize");
  if (gesture === "Swipe_Right") setMode("playground");
  if (gesture === "Swipe_Up") setMode("fx");
}

function handleResult(rawResult, latency) {
  state.lastResult = { hands: [] };
  state.lastInferenceLatency = latency;
  const picked = classifyHands(rawResult);
  state.lastResult.hands = picked.handResults;
  const hands = picked.handResults.length;
  els.handCount.textContent = `${hands} ${hands === 1 ? "HAND" : "HANDS"}`;
  updateDiagnostics();

  const stable = stableStaticGesture(picked);
  const summary = picked.summary;
  updateMainGesture(
    stable.gesture,
    stable.confidence,
    hands,
    summary,
    picked.handResults,
    stable.changed,
  );
  processDynamicInteractions(picked.handResults);
  updatePointerFromHands(picked.handResults);
  updateCreativeScenes(picked.handResults);
}

async function initWorker() {
  if (state.workerReady) return;
  if (state.workerInitPromise) return state.workerInitPromise;
  if (!window.Worker || !window.createImageBitmap)
    throw new Error("Web Worker video frames are unavailable.");
  state.workerInitPromise = new Promise((resolve, reject) => {
    const worker = new Worker(new URL("./vision.worker.js", import.meta.url), {
      type: "module",
    });
    let settled = false;
    const timeout = setTimeout(() => {
      if (!settled) {
        settled = true;
        worker.terminate();
        reject(new Error("Vision worker timed out."));
      }
    }, 20000);
    worker.onmessage = (event) => {
      const data = event.data || {};
      if (data.type === "ready") {
        clearTimeout(timeout);
        settled = true;
        state.worker = worker;
        state.workerReady = true;
        state.mainFallback = false;
        addDiagnostic(`Worker ready · ${data.delegate}`);
        resolve();
        return;
      }
      if (data.type === "result") {
        state.inferenceInFlight = false;
        const latency = Math.max(0, performance.now() - data.startedAt);
        handleResult(data.result, latency);
        return;
      }
      if (data.type === "stats") {
        els.processingLabel.textContent = `On-device · ${data.delegate}`;
        els.engineLabel.textContent = `MediaPipe Vision · ${data.delegate}`;
        updateDiagnostics(data);
        return;
      }
      if (data.type === "error") {
        if (!settled) {
          clearTimeout(timeout);
          settled = true;
          worker.terminate();
          reject(new Error(data.message));
        } else {
          state.inferenceInFlight = false;
          state.workerReady = false;
          state.worker?.terminate?.();
          state.worker = null;
          state.mainReady = false;
          addDiagnostic(`Worker error · ${data.message}`);
          els.processingLabel.textContent = "Recovering vision…";
          initMainFallback()
            .then(() => {
              els.processingLabel.textContent = `On-device · ${state.mainRecognizer?.__delegate || "CPU"}`;
              showToast("Vision engine recovered.");
            })
            .catch((error) => {
              addDiagnostic(`Vision recovery failed · ${error.message}`);
              els.processingLabel.textContent = "Vision unavailable";
              showToast("Vision engine unavailable.");
            });
        }
      }
    };
    worker.onerror = (event) => {
      clearTimeout(timeout);
      if (!settled) {
        settled = true;
        reject(new Error(event.message || "Vision worker error."));
      }
    };
    worker.postMessage({
      type: "init",
      moduleUrls: VISION_MODULE_URLS,
      wasmUrls: WASM_URLS,
      modelUrl: MODEL_URL,
    });
  });
  try {
    await state.workerInitPromise;
  } finally {
    state.workerInitPromise = null;
  }
}

async function initMainFallback() {
  if (state.mainReady && state.mainRecognizer) return;
  let lastError;
  for (let i = 0; i < VISION_MODULE_URLS.length; i += 1) {
    try {
      const module = await import(VISION_MODULE_URLS[i]);
      const wasmUrl = WASM_URLS[i] || WASM_URLS[0];
      const vision = await module.FilesetResolver.forVisionTasks(wasmUrl);
      let recognizer;
      try {
        recognizer = await module.GestureRecognizer.createFromOptions(vision, {
          baseOptions: { modelAssetPath: MODEL_URL, delegate: "GPU" },
          runningMode: "VIDEO",
          numHands: 2,
          minHandDetectionConfidence: 0.52,
          minHandPresenceConfidence: 0.52,
          minTrackingConfidence: 0.52,
          cannedGesturesClassifierOptions: {
            scoreThreshold: 0.45,
            maxResults: 1,
          },
        });
        recognizer.__delegate = "GPU";
      } catch (gpuError) {
        recognizer = await module.GestureRecognizer.createFromOptions(vision, {
          baseOptions: { modelAssetPath: MODEL_URL, delegate: "CPU" },
          runningMode: "VIDEO",
          numHands: 2,
          minHandDetectionConfidence: 0.52,
          minHandPresenceConfidence: 0.52,
          minTrackingConfidence: 0.52,
          cannedGesturesClassifierOptions: {
            scoreThreshold: 0.45,
            maxResults: 1,
          },
        });
        recognizer.__delegate = "CPU";
      }
      state.mainVisionModule = module;
      state.mainWasmUrl = wasmUrl;
      state.mainRecognizer = recognizer;
      state.mainReady = true;
      state.mainFallback = true;
      addDiagnostic(`Main-thread fallback ready · ${recognizer.__delegate}`);
      return;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("MediaPipe Vision unavailable.");
}

async function ensureVision() {
  if (state.workerReady || state.mainReady) return;
  els.processingLabel.textContent = "Loading vision engine…";
  try {
    await initWorker();
  } catch (error) {
    addDiagnostic(`Worker unavailable · ${error.message}`);
    await initMainFallback();
  }
  els.processingLabel.textContent = `On-device · ${state.workerReady ? "Worker" : state.mainRecognizer?.__delegate || "CPU"}`;
}

async function requestCamera(deviceId = null) {
  const constraints = {
    audio: false,
    video:
      deviceId && deviceId !== "default"
        ? {
            deviceId: { exact: deviceId },
            width: { ideal: 960, max: 1280 },
            height: { ideal: 540, max: 720 },
            frameRate: { ideal: 30, max: 30 },
          }
        : {
            facingMode: { ideal: state.cameraFacing },
            width: { ideal: isMobile() ? 960 : 1280, max: 1280 },
            height: { ideal: isMobile() ? 540 : 720, max: 720 },
            frameRate: { ideal: 30, max: 30 },
          },
  };
  return navigator.mediaDevices.getUserMedia(constraints);
}

async function startCamera() {
  if (state.cameraStarted || state.initializing) return;
  if (!navigator.mediaDevices?.getUserMedia) {
    showToast("Camera access needs HTTPS or localhost.");
    return;
  }
  state.initializing = true;
  els.startButton.disabled = true;
  els.cameraBottomStatus.textContent = "Preparing camera";
  els.processingLabel.textContent = "Requesting camera…";
  try {
    state.stream = await requestCamera(state.currentDeviceId);
    els.video.srcObject = state.stream;
    els.video.muted = true;
    await els.video.play();
    await waitForVideoReady();
    state.cameraStarted = true;
    state.readyToSnapshot = true;
    els.cameraEmpty.hidden = true;
    els.cameraCard.classList.add("live");
    els.stopButton.disabled = false;
    els.cameraSwitch.disabled = false;
    els.mirrorButton.disabled = false;
    els.overlayButton.disabled = false;
    els.trailButton.disabled = false;
    els.snapshotButton.disabled = false;
    setLiveState(true);
    applyVisualSettings();
    resizeCanvases();
    resetDetectionState();
    startLoops();
    try {
      await ensureVision();
    } catch (error) {
      showToast(`Vision engine unavailable: ${error.message}`);
      addDiagnostic(error.message);
    }
    await enumerateCameras();
    els.cameraBottomStatus.textContent =
      state.workerReady || state.mainReady
        ? "Camera live · recognition active"
        : "Camera live · recognition unavailable";
    els.permissionStatus.textContent =
      "Camera is active only while NYX is using the page.";
    showToast("Camera connected.");
  } catch (error) {
    cleanupStream();
    els.startButton.disabled = false;
    els.cameraBottomStatus.textContent = "Could not start camera";
    showToast(cameraErrorMessage(error));
    addDiagnostic(`Camera · ${error.name || "error"}`);
  } finally {
    state.initializing = false;
  }
}

function waitForVideoReady() {
  if (els.video.readyState >= 2 && els.video.videoWidth > 0)
    return Promise.resolve();
  return new Promise((resolve, reject) => {
    let done = false;
    const finish = (fn) => {
      if (done) return;
      done = true;
      els.video.removeEventListener("loadeddata", onReady);
      els.video.removeEventListener("error", onError);
      fn();
    };
    const onReady = () => finish(resolve);
    const onError = () =>
      finish(() =>
        reject(new Error("The browser could not read the camera stream.")),
      );
    els.video.addEventListener("loadeddata", onReady, { once: true });
    els.video.addEventListener("error", onError, { once: true });
    setTimeout(() => finish(resolve), 1600);
  });
}

function cameraErrorMessage(error) {
  if (error?.name === "NotAllowedError" || error?.name === "SecurityError")
    return "Camera permission was blocked. Allow camera access in your browser settings.";
  if (error?.name === "NotFoundError")
    return "No camera was found on this device.";
  if (error?.name === "NotReadableError")
    return "The camera is already in use by another app.";
  if (error?.name === "OverconstrainedError")
    return "That camera mode is not available; try the other camera.";
  return "Could not start the camera. Check permissions and try again.";
}

function cleanupStream() {
  state.stream?.getTracks().forEach((track) => track.stop());
  state.stream = null;
  els.video.pause();
  els.video.srcObject = null;
}

function resetDetectionState() {
  state.lastResult = { hands: [] };
  state.gestureStable = "None";
  state.gestureCandidate = "None";
  state.candidateHits = 0;
  state.noGestureHits = 0;
  state.staticHands.clear();
  state.handMotion.clear();
  state.dynamicCooldowns.clear();
  state.holdState.clear();
  state.lastEvent = null;
  state.pointer.lastPinch = false;
  state.pointer.overAction = null;
  state.pointer.hoverSince = 0;
  state.fxTrailHistory.clear();
  state.fxPinchState.clear();
  state.fxBursts.length = 0;
  clearResult();
  updateHandCards([]);
  els.handCount.textContent = "0 HANDS";
  els.fpsLabel.textContent = "0 FPS";
  els.inferenceLabel.textContent = "0 Hz";
  els.controlHint.textContent = state.cameraStarted
    ? "POINT TO AIM"
    : "START CAMERA";
}

function stopCamera({ silent = false } = {}) {
  if (!state.cameraStarted && !state.stream) return;
  state.cameraStarted = false;
  state.inferenceInFlight = false;
  state.readyToSnapshot = false;
  cancelAnimationFrame(state.renderRaf);
  cancelAnimationFrame(state.inferenceRaf);
  cancelAnimationFrame(state.fpsRaf);
  cleanupStream();
  resetDetectionState();
  setLiveState(false);
  els.cameraCard.classList.remove("live");
  els.cameraEmpty.hidden = false;
  els.startButton.disabled = false;
  els.stopButton.disabled = true;
  els.cameraSwitch.disabled = true;
  els.mirrorButton.disabled = true;
  els.overlayButton.disabled = true;
  els.trailButton.disabled = true;
  els.snapshotButton.disabled = true;
  els.cameraBottomStatus.textContent = "Camera stopped";
  els.processingLabel.textContent =
    state.workerReady || state.mainReady
      ? "Vision engine ready"
      : "Waiting for camera";
  clearCanvas(els.overlay);
  clearCanvas(els.trailCanvas);
  if (!silent) showToast("Camera stopped.");
}

async function switchCamera() {
  if (!state.cameraStarted) {
    showToast("Start the camera first.");
    return;
  }
  state.cameraFacing = state.cameraFacing === "user" ? "environment" : "user";
  const previousStream = state.stream;
  try {
    const preferredDevice =
      state.currentDeviceId && state.currentDeviceId !== "default"
        ? state.currentDeviceId
        : null;
    const nextStream = await requestCamera(preferredDevice);
    previousStream?.getTracks().forEach((track) => track.stop());
    state.stream = nextStream;
    els.video.srcObject = state.stream;
    await els.video.play();
    await waitForVideoReady();
    state.readyToSnapshot = true;
    showToast(state.cameraFacing === "user" ? "Front camera." : "Rear camera.");
    addDiagnostic(`Camera switched · ${state.cameraFacing}`);
  } catch (error) {
    showToast(cameraErrorMessage(error));
    addDiagnostic(`Camera switch failed · ${error.name || "error"}`);
  }
}

async function enumerateCameras() {
  if (!navigator.mediaDevices?.enumerateDevices) return;
  try {
    const devices = (await navigator.mediaDevices.enumerateDevices()).filter(
      (device) => device.kind === "videoinput",
    );
    state.devices = devices;
    els.cameraSelect.innerHTML = `<option value="default">Default camera</option>${devices.map((device, index) => `<option value="${escapeHTML(device.deviceId)}">${escapeHTML(device.label || `Camera ${index + 1}`)}</option>`).join("")}`;
    if (state.currentDeviceId !== "default")
      els.cameraSelect.value = state.currentDeviceId;
  } catch {}
}

function startLoops() {
  cancelAnimationFrame(state.renderRaf);
  cancelAnimationFrame(state.inferenceRaf);
  cancelAnimationFrame(state.fpsRaf);
  state.previewFrames = 0;
  state.previewSampleAt = performance.now();
  const previewLoop = () => {
    if (!state.cameraStarted) return;
    state.previewFrames += 1;
    const now = performance.now();
    if (now - state.previewSampleAt >= 1000) {
      state.previewFps = Math.round(
        (state.previewFrames * 1000) / (now - state.previewSampleAt),
      );
      state.previewFrames = 0;
      state.previewSampleAt = now;
      els.fpsLabel.textContent = `${state.previewFps} FPS`;
      updateDiagnostics();
    }
    state.fpsRaf = requestAnimationFrame(previewLoop);
  };
  const renderLoop = (now) => {
    if (!state.cameraStarted) return;
    drawOverlay(state.lastResult);
    drawTrails(state.lastResult);
    renderCreativeFrame(now);
    state.renderRaf = requestAnimationFrame(renderLoop);
  };
  const inferenceLoop = (now) => {
    if (!state.cameraStarted) return;
    const interval = 1000 / perfHz();
    if (
      now - state.lastInferenceAttempt >= interval &&
      !state.inferenceInFlight
    ) {
      state.lastInferenceAttempt = now;
      requestInference(now);
    }
    state.inferenceRaf = requestAnimationFrame(inferenceLoop);
  };
  state.fpsRaf = requestAnimationFrame(previewLoop);
  state.renderRaf = requestAnimationFrame(renderLoop);
  state.inferenceRaf = requestAnimationFrame(inferenceLoop);
}

async function requestInference(now) {
  if (
    !state.cameraStarted ||
    els.video.readyState < 2 ||
    (!state.workerReady && !state.mainReady)
  )
    return;
  state.inferenceInFlight = true;
  const timestamp = Math.max(
    Math.round(now),
    Math.round(state.lastInferenceAt + 1),
  );
  state.lastInferenceAt = timestamp;
  const startedAt = performance.now();
  if (state.workerReady) {
    try {
      const bitmap = await createImageBitmap(els.video);
      if (!state.cameraStarted) {
        bitmap.close();
        state.inferenceInFlight = false;
        return;
      }
      state.workerRequestId += 1;
      state.worker.postMessage(
        {
          type: "frame",
          id: state.workerRequestId,
          bitmap,
          timestamp,
          startedAt,
        },
        [bitmap],
      );
      updateInferenceCounter();
      return;
    } catch (error) {
      state.inferenceInFlight = false;
      addDiagnostic(`Frame transfer failed · ${error.message}`);
      if (state.workerReady) {
        state.workerReady = false;
        state.worker?.terminate?.();
        state.worker = null;
        initMainFallback().catch((fallbackError) =>
          addDiagnostic(`Frame fallback failed · ${fallbackError.message}`),
        );
      }
      return;
    }
  }
  try {
    const result = state.mainRecognizer.recognizeForVideo(els.video, timestamp);
    state.inferenceInFlight = false;
    const latency = performance.now() - startedAt;
    handleResult(normalizeResult(result), latency);
    updateInferenceCounter();
  } catch (error) {
    state.inferenceInFlight = false;
    addDiagnostic(`Main inference error · ${error.message}`);
  }
}

function normalizeResult(result) {
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
      (list || [])
        .slice(0, 1)
        .map((item) => ({
          categoryName: item.categoryName,
          score: item.score,
        })),
    ),
    handedness: (result?.handedness || []).map((list) =>
      (list || [])
        .slice(0, 1)
        .map((item) => ({
          categoryName: item.categoryName,
          score: item.score,
        })),
    ),
  };
}
function updateInferenceCounter() {
  state.inferenceSamples += 1;
  const now = performance.now();
  if (now - state.inferenceSampleAt >= 1000) {
    state.inferenceHz = Math.round(
      (state.inferenceSamples * 1000) / (now - state.inferenceSampleAt),
    );
    state.inferenceSamples = 0;
    state.inferenceSampleAt = now;
    els.inferenceLabel.textContent = `${state.inferenceHz} Hz`;
    updateDiagnostics();
  }
}

function drawOverlay(result) {
  if (!state.overlay) {
    clearCanvas(els.overlay);
    return;
  }
  const ctx = els.overlay.getContext("2d");
  if (!ctx) return;
  const rect = els.video.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  if (
    els.overlay.width !== Math.round(rect.width * dpr) ||
    els.overlay.height !== Math.round(rect.height * dpr)
  )
    resizeCanvases();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);
  const hands = result?.hands || [];
  hands.forEach((hand, index) => {
    const color =
      index === 0 ? "rgba(177,143,255,.82)" : "rgba(117,203,255,.76)";
    const point =
      index === 0 ? "rgba(246,242,255,.96)" : "rgba(237,252,255,.96)";
    ctx.strokeStyle = color;
    ctx.fillStyle = point;
    ctx.lineWidth = isMobile() ? 1.1 : 1.35;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (const [a, b] of CONNECTIONS) {
      const p1 = hand.landmarks[a];
      const p2 = hand.landmarks[b];
      if (!p1 || !p2) continue;
      const x1 = (state.mirror ? 1 - p1.x : p1.x) * rect.width;
      const y1 = p1.y * rect.height;
      const x2 = (state.mirror ? 1 - p2.x : p2.x) * rect.width;
      const y2 = p2.y * rect.height;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    for (const p of hand.landmarks) {
      const x = (state.mirror ? 1 - p.x : p.x) * rect.width;
      const y = p.y * rect.height;
      ctx.beginPath();
      ctx.arc(x, y, isMobile() ? 1.7 : 2.15, 0, Math.PI * 2);
      ctx.fill();
    }
    const labelX =
      (state.mirror ? 1 - hand.features.center.x : hand.features.center.x) *
      rect.width;
    const labelY = hand.features.center.y * rect.height - 16;
    ctx.font = `700 ${isMobile() ? 8 : 9}px ui-monospace, SFMono-Regular, monospace`;
    ctx.fillStyle = color;
    ctx.fillText(
      `${hand.handedness.toUpperCase()} · ${Math.round(hand.confidence * 100)}%`,
      clamp(labelX - 38, 4, rect.width - 100),
      clamp(labelY, 18, rect.height - 6),
    );
  });
}

function clearCanvas(canvas) {
  const ctx = canvas?.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function resizeCanvases() {
  const rect = els.video.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  [els.overlay, els.trailCanvas].forEach((canvas) => {
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  });
  resizeCreativeCanvases();
}
function applyVisualSettings() {
  els.video.classList.toggle("unmirrored", !state.mirror);
  els.overlay.classList.toggle("unmirrored", !state.mirror);
  els.trailCanvas.classList.toggle("unmirrored", !state.mirror);
  els.mirrorButton.setAttribute("aria-pressed", String(state.mirror));
  els.overlayButton.setAttribute("aria-pressed", String(state.overlay));
  els.trailButton.setAttribute("aria-pressed", String(state.trails));
  els.soundToggle.setAttribute("aria-pressed", String(state.sound));
  els.soundToggle.textContent = state.sound ? "◉" : "⊘";
}
function drawTrails(result) {
  if (!state.trails) {
    clearCanvas(els.trailCanvas);
    state.trailHistory = [];
    return;
  }
  const ctx = els.trailCanvas.getContext("2d");
  if (!ctx) return;
  const rect = els.video.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);
  for (const hand of result?.hands || []) {
    const p = hand.features.index;
    const x = (state.mirror ? 1 - p.x : p.x) * rect.width;
    const y = p.y * rect.height;
    state.trailHistory.push({
      x,
      y,
      hand: hand.handedness,
      t: performance.now(),
    });
  }
  const cutoff = performance.now() - (state.reducedMotion ? 120 : 360);
  state.trailHistory = state.trailHistory
    .filter((item) => item.t > cutoff)
    .slice(-90);
  const groups = new Map();
  state.trailHistory.forEach((point) => {
    if (!groups.has(point.hand)) groups.set(point.hand, []);
    groups.get(point.hand).push(point);
  });
  for (const [hand, points] of groups) {
    if (points.length < 2) continue;
    ctx.strokeStyle =
      hand === "Left" ? "rgba(176,142,255,.30)" : "rgba(111,198,255,.26)";
    ctx.lineWidth = isMobile() ? 1.3 : 1.7;
    ctx.beginPath();
    points.forEach((point, index) => {
      const alpha = index / points.length;
      ctx.globalAlpha = alpha;
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

function toggleMirror() {
  state.mirror = !state.mirror;
  state.settings.mirror = state.mirror;
  saveJSON(STORAGE.settings, state.settings);
  applyVisualSettings();
  showToast(state.mirror ? "Mirror on." : "Mirror off.");
}
function toggleOverlay() {
  state.overlay = !state.overlay;
  state.settings.overlay = state.overlay;
  saveJSON(STORAGE.settings, state.settings);
  applyVisualSettings();
  showToast(state.overlay ? "Skeleton on." : "Skeleton off.");
}
function toggleTrails() {
  state.trails = !state.trails;
  state.settings.trails = state.trails;
  saveJSON(STORAGE.settings, state.settings);
  applyVisualSettings();
  showToast(state.trails ? "Trails on." : "Trails off.");
}
async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) await els.cameraCard.requestFullscreen?.();
    else await document.exitFullscreen?.();
  } catch {
    showToast("Fullscreen is not available here.");
  }
}

function takeSnapshot() {
  if (!state.cameraStarted) return showToast("Start the camera first.");
  const video = els.video;
  const width = Math.max(720, video.videoWidth || 1280);
  const height = Math.max(405, video.videoHeight || 720);
  const scale = Math.min(1.5, 1440 / width);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.save();
  if (state.mirror) {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  ctx.restore();
  if (state.overlay) drawSnapshotOverlay(ctx, canvas.width, canvas.height);
  const gradient = ctx.createLinearGradient(
    0,
    canvas.height * 0.7,
    0,
    canvas.height,
  );
  gradient.addColorStop(0, "rgba(5,5,7,0)");
  gradient.addColorStop(1, "rgba(5,5,7,.94)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);
  const data = gestureData(state.gestureStable);
  ctx.fillStyle = "rgba(255,255,255,.96)";
  ctx.font = "700 28px system-ui, sans-serif";
  ctx.fillText(data.name, 44, canvas.height - 64);
  ctx.fillStyle = "rgba(201,187,229,.76)";
  ctx.font = "600 14px ui-monospace, SFMono-Regular, monospace";
  ctx.fillText(
    `NYX · ${Math.round(state.session.best * 100)}% · ${state.lastResult.hands.length} HAND${state.lastResult.hands.length === 1 ? "" : "S"} · ${new Date().toLocaleDateString()}`,
    44,
    canvas.height - 34,
  );
  const link = document.createElement("a");
  link.download = `nyx-${new Date().toISOString().replace(/[:.]/g, "-")}.jpg`;
  link.href = canvas.toDataURL("image/jpeg", 0.92);
  link.click();
  showToast("Snapshot saved.");
  addDiagnostic("Snapshot saved");
}
function drawSnapshotOverlay(ctx, width, height) {
  for (const hand of state.lastResult.hands) {
    ctx.strokeStyle =
      hand.handedness === "Left"
        ? "rgba(177,143,255,.78)"
        : "rgba(117,203,255,.70)";
    ctx.fillStyle = "rgba(255,255,255,.90)";
    ctx.lineWidth = Math.max(1.5, width / 1000);
    for (const [a, b] of CONNECTIONS) {
      const p = hand.landmarks[a],
        q = hand.landmarks[b];
      if (!p || !q) continue;
      const x1 = (state.mirror ? 1 - p.x : p.x) * width,
        y1 = p.y * height,
        x2 = (state.mirror ? 1 - q.x : q.x) * width,
        y2 = q.y * height;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    for (const p of hand.landmarks) {
      const x = (state.mirror ? 1 - p.x : p.x) * width,
        y = p.y * height;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function playTone(gesture) {
  if (!state.sound || state.reducedMotion) return;
  try {
    state.audioContext ||= new (
      window.AudioContext || window.webkitAudioContext
    )();
    if (state.audioContext.state === "suspended") state.audioContext.resume();
    const osc = state.audioContext.createOscillator();
    const gain = state.audioContext.createGain();
    const base = gesture.startsWith("Swipe")
      ? 360
      : gesture === "Pinch_Hold"
        ? 620
        : 440;
    osc.type = "sine";
    osc.frequency.setValueAtTime(base, state.audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(
      base * 1.23,
      state.audioContext.currentTime + 0.11,
    );
    gain.gain.setValueAtTime(0.0001, state.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.028,
      state.audioContext.currentTime + 0.015,
    );
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      state.audioContext.currentTime + 0.13,
    );
    osc.connect(gain).connect(state.audioContext.destination);
    osc.start();
    osc.stop(state.audioContext.currentTime + 0.14);
  } catch {}
}

function updatePointerFromHands(handResults) {
  const pointHand =
    handResults.find((hand) => hand.features?.fingers?.index) ||
    handResults.find((hand) => hand.gesture === "Pointing_Up") ||
    handResults[0];
  if (!pointHand) {
    state.pointer.active = false;
    state.pointer.pinch = false;
    state.pointer.overAction = null;
    state.pointer.hoverSince = 0;
    els.virtualCursor.classList.remove("visible", "pinch", "locked");
    clearControlHover();
    els.controlHint.textContent = state.cameraStarted
      ? "POINT TO AIM"
      : "START CAMERA";
    return;
  }

  const point = pointHand.features.index;
  state.pointer.active = true;
  state.pointer.x = clamp(state.mirror ? 1 - point.x : point.x, 0, 1);
  state.pointer.y = clamp(point.y, 0, 1);
  state.pointer.pinch = pointHand.features.pinch;

  if (state.mode === "control") {
    els.virtualCursor.classList.add("visible");
    els.virtualCursor.classList.toggle("pinch", state.pointer.pinch);
    const rect = els.controlSurface.getBoundingClientRect();
    const x = clamp(state.pointer.x * rect.width, 0, rect.width);
    const y = clamp(state.pointer.y * rect.height, 0, rect.height);
    els.virtualCursor.style.left = `${x}px`;
    els.virtualCursor.style.top = `${y}px`;
    const target = document
      .elementFromPoint(rect.left + x, rect.top + y)
      ?.closest(".control-tile");
    const previousAction = state.pointer.overAction;
    clearControlHover(target);
    if (target) {
      if (previousAction !== target.dataset.action)
        state.pointer.hoverSince = performance.now();
      state.pointer.overAction = target.dataset.action;
      els.controlHint.textContent = `PINCH TO SELECT · ${target.querySelector("strong")?.textContent || "ACTION"}`;
      target.style.setProperty(
        "--hover-progress",
        `${clamp((performance.now() - state.pointer.hoverSince) / 320, 0, 1)}`,
      );
    } else {
      state.pointer.overAction = null;
      state.pointer.hoverSince = 0;
      els.controlHint.textContent = state.pointer.pinch
        ? "PINCH ACTIVE"
        : "POINT TO AIM";
    }
  } else {
    els.virtualCursor.classList.remove("visible", "pinch", "locked");
  }
}
function clearControlHover(active = null) {
  document
    .querySelectorAll(".control-tile.hover")
    .forEach((node) => node.classList.remove("hover"));
  if (active) active.classList.add("hover");
  state.pointer.overAction = active?.dataset.action || null;
}
function activateControlAction(action) {
  const labels = {
    next: "Playground",
    back: "Recognize",
    playground: "Playground",
    fx: "FX",
    snapshot: "Snapshot",
    stop: "Stop camera",
  };
  if (action === "next") setMode("playground");
  if (action === "back") setMode("recognize");
  if (action === "playground") setMode("playground");
  if (action === "fx") setMode("fx");
  if (action === "snapshot") takeSnapshot();
  if (action === "stop") stopCamera();
  playTone("Thumb_Up");
  showToast(`${labels[action] || "Action"} selected.`);
}
function onControlPinch(handResults) {
  const pinchHand = handResults.find((hand) => hand.features.pinch);
  if (!pinchHand || state.mode !== "control") {
    state.pointer.lastPinch = false;
    els.virtualCursor.classList.remove("locked");
    return;
  }
  const now = performance.now();
  if (state.pointer.pinch && !state.pointer.lastPinch) {
    state.pointer.lastPinch = true;
    state.pointer.lastPinchAt = now;
    els.virtualCursor.classList.add("locked");
    if (state.pointer.overAction)
      activateControlAction(state.pointer.overAction);
    return;
  }
  if (!state.pointer.pinch) {
    state.pointer.lastPinch = false;
    els.virtualCursor.classList.remove("locked");
  }
}
function setupControlTiles() {
  document
    .querySelectorAll(".control-tile")
    .forEach((button) =>
      button.addEventListener("click", () =>
        activateControlAction(button.dataset.action),
      ),
    );
}

function setMode(mode) {
  if (!mode || state.mode === mode) return;
  state.mode = mode;
  document
    .querySelectorAll(".mode-button")
    .forEach((button) =>
      button.classList.toggle("active", button.dataset.mode === mode),
    );
  document
    .querySelectorAll(".mobile-dock-button[data-mode]")
    .forEach((button) =>
      button.classList.toggle("active", button.dataset.mode === mode),
    );
  els.workspace.className = `workspace mode-${mode}`;
  document.querySelectorAll(".mode-stage").forEach((stage) => {
    stage.hidden = stage.dataset.stage !== mode;
  });
  els.topModeText.textContent = mode.toUpperCase();
  if (mode === "control")
    els.controlHint.textContent = state.cameraStarted
      ? "POINT TO AIM"
      : "START CAMERA";
  if (mode === "playground")
    els.playgroundMeta.textContent = state.cameraStarted ? "SEARCHING" : "IDLE";
  if (mode === "fx")
    els.fxMeta.textContent = state.cameraStarted ? "SEARCHING" : "IDLE";
  if (!state.cameraStarted)
    showToast("Start the camera to make this mode interactive.");
  addDiagnostic(`Mode · ${mode}`);
  requestAnimationFrame(resizeCanvases);
}

function renderCreativeFrame(now) {
  const dt = Math.min(
    0.033,
    Math.max(0.001, (now - state.lastFrameTime) / 1000),
  );
  state.lastFrameTime = now;
  if (state.mode === "playground") renderPlayground(now, dt);
  if (state.mode === "fx") renderFx(now, dt);
  if (state.mode === "control") onControlPinch(state.lastResult.hands);
}

function initParticles() {
  const count = isMobile() ? 170 : 300;
  state.particles = Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: 0,
    vy: 0,
    size: 0.7 + Math.random() * 1.7,
    alpha: 0.22 + Math.random() * 0.34,
    phase: Math.random() * Math.PI * 2,
  }));
  state.fxParticles = Array.from({ length: isMobile() ? 120 : 210 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: 0,
    vy: 0,
    life: 0,
    ttl: 0,
    size: 0.8 + Math.random() * 2.2,
  }));
  state.fxTrailHistory = new Map();
  state.fxBursts = [];
}
function resizeCreativeCanvases() {
  [
    [els.playgroundCanvas, els.playgroundStage],
    [els.fxCanvas, els.fxStage],
  ].forEach(([canvas, stage]) => {
    if (!canvas || !stage) return;
    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  });
}
function canvasContext(canvas) {
  return canvas?.getContext("2d");
}
function handVisualPoint(hand, rect) {
  const x =
    (state.mirror ? 1 - hand.features.center.x : hand.features.center.x) *
    rect.width;
  const y = hand.features.center.y * rect.height;
  return { x, y };
}
function handTipPoint(hand, rect) {
  const x =
    (state.mirror ? 1 - hand.features.index.x : hand.features.index.x) *
    rect.width;
  const y = hand.features.index.y * rect.height;
  return { x, y };
}
function drawSoftGrid(ctx, width, height) {
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(255,255,255,.032)";
  const step = Math.max(42, Math.min(72, width / 14));
  for (let x = step; x < width; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = step; y < height; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.restore();
}
function renderPlayground(now, dt) {
  const canvas = els.playgroundCanvas,
    ctx = canvasContext(canvas);
  if (!ctx) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = canvas.width / Math.max(1, rect.width);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = "rgba(10,11,15,.34)";
  ctx.fillRect(0, 0, rect.width, rect.height);
  drawSoftGrid(ctx, rect.width, rect.height);

  const hands = state.lastResult.hands;
  const pinchHands = hands.filter((hand) => hand.features.pinch);
  const action =
    pinchHands.length >= 2
      ? "TWO-HAND FIELD"
      : pinchHands.length === 1
        ? "PINCH · ATTRACT"
        : hands.length
          ? "PALM · SHAPE"
          : "MOVE A HAND TO BEGIN";
  els.playgroundHands.textContent = `${hands.length} hand${hands.length === 1 ? "" : "s"}`;
  els.playgroundAction.textContent = action;
  els.playgroundState.textContent =
    action === "MOVE A HAND TO BEGIN" ? "Waiting for hands" : action;

  const targets = hands.map((hand) => ({
    ...handVisualPoint(hand, rect),
    pinch: hand.features.pinch,
    openness: hand.features.openness,
    speed: hand.speed || 0,
  }));

  let dualMid = null;
  let dualDistance = 0;
  if (targets.length >= 2) {
    dualMid = {
      x: (targets[0].x + targets[1].x) / 2,
      y: (targets[0].y + targets[1].y) / 2,
    };
    dualDistance = Math.hypot(
      targets[0].x - targets[1].x,
      targets[0].y - targets[1].y,
    );
    const glow = ctx.createRadialGradient(
      dualMid.x,
      dualMid.y,
      2,
      dualMid.x,
      dualMid.y,
      Math.max(70, dualDistance * 0.75),
    );
    glow.addColorStop(0, "rgba(186,162,235,.12)");
    glow.addColorStop(1, "rgba(186,162,235,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(
      dualMid.x,
      dualMid.y,
      Math.max(70, dualDistance * 0.75),
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }

  for (const p of state.particles) {
    let ax = 0,
      ay = 0;
    for (const target of targets) {
      const dx = target.x - p.x * rect.width;
      const dy = target.y - p.y * rect.height;
      const distPx = Math.max(1, Math.hypot(dx, dy));
      const influence = Math.max(
        0,
        1 - distPx / Math.max(120, rect.width * 0.32),
      );
      if (target.pinch) {
        ax += (dx / distPx) * influence * 1200;
        ay += (dy / distPx) * influence * 1200;
      } else if (target.openness >= 4) {
        ax -= (dx / distPx) * influence * 860;
        ay -= (dy / distPx) * influence * 860;
      } else {
        ax += (dx / distPx) * influence * 120;
        ay += (dy / distPx) * influence * 120;
      }
    }
    if (dualMid) {
      const dx = dualMid.x - p.x * rect.width;
      const dy = dualMid.y - p.y * rect.height;
      const distPx = Math.max(1, Math.hypot(dx, dy));
      const dualInfluence = Math.max(
        0,
        1 - distPx / Math.max(150, rect.width * 0.4),
      );
      const desiredSpacing = clamp(dualDistance * 0.34, 55, 180);
      const towardMid = (dualDistance < desiredSpacing ? 1 : -1) * 220;
      ax += (dx / distPx) * dualInfluence * towardMid;
      ay += (dy / distPx) * dualInfluence * towardMid;
    }
    p.vx = lerp(p.vx, p.vx + ax * dt, 0.76);
    p.vy = lerp(p.vy, p.vy + ay * dt, 0.76);
    p.vx *= 0.965;
    p.vy *= 0.965;
    p.x += (p.vx * dt) / rect.width;
    p.y += (p.vy * dt) / rect.height;
    if (p.x < -0.03 || p.x > 1.03) {
      p.x = clamp(p.x, 0, 1);
      p.vx *= -0.65;
    }
    if (p.y < -0.03 || p.y > 1.03) {
      p.y = clamp(p.y, 0, 1);
      p.vy *= -0.65;
    }
    const speed = Math.min(1, Math.hypot(p.vx, p.vy) / 280);
    ctx.fillStyle = `rgba(207,192,232,${p.alpha + speed * 0.18})`;
    ctx.beginPath();
    ctx.arc(
      p.x * rect.width,
      p.y * rect.height,
      p.size + speed * 1.8,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }

  targets.forEach((target, index) => {
    const accent =
      index === 0 ? "rgba(188,158,240,.95)" : "rgba(122,199,238,.95)";
    const ring = target.pinch ? 26 : target.openness >= 4 ? 22 : 15;
    ctx.strokeStyle = accent;
    ctx.globalAlpha = 0.75;
    ctx.lineWidth = target.pinch ? 2 : 1;
    ctx.beginPath();
    ctx.arc(target.x, target.y, ring, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.arc(target.x, target.y, target.pinch ? 5 : 3, 0, Math.PI * 2);
    ctx.fill();
  });
}
function pushFxBurst(x, y, strength = 1, hue = 265) {
  state.fxBursts.push({ x, y, life: 1, strength, hue });
  if (state.fxBursts.length > 12) state.fxBursts.shift();
}
function spawnFxParticle(x, y, angle, speed, size) {
  const p =
    state.fxParticles.find((item) => item.life <= 0) ||
    state.fxParticles[(Math.random() * state.fxParticles.length) | 0];
  p.x = x;
  p.y = y;
  p.vx = Math.cos(angle) * speed;
  p.vy = Math.sin(angle) * speed;
  p.size = size;
  p.life = 1;
  p.ttl = 0.45 + Math.random() * 0.55;
}
function renderFx(now, dt) {
  const canvas = els.fxCanvas,
    ctx = canvasContext(canvas);
  if (!ctx) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = canvas.width / Math.max(1, rect.width);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = "rgba(8,9,13,.16)";
  ctx.fillRect(0, 0, rect.width, rect.height);
  drawSoftGrid(ctx, rect.width, rect.height);

  const hands = state.lastResult.hands;
  els.fxState.textContent = hands.length
    ? gestureData(state.gestureStable).name
    : "Move a hand to begin";
  els.fxGesture.textContent =
    hands.map((h) => gestureData(h.gesture).name).join("  +  ") || "—";
  els.fxMetric.textContent = `${Math.round((hands.reduce((sum, hand) => sum + hand.confidence, 0) / Math.max(1, hands.length)) * 100)}%`;

  hands.forEach((hand) => {
    const key = hand.handedness;
    const point = handTipPoint(hand, rect);
    const trail = state.fxTrailHistory.get(key) || [];
    trail.push({ x: point.x, y: point.y, t: now });
    while (trail.length > 22 || (trail[0] && now - trail[0].t > 520))
      trail.shift();
    state.fxTrailHistory.set(key, trail);
    if (!state.reducedMotion) {
      const samples = hand.features.pinch ? 3 : 2;
      for (let i = 0; i < samples; i++)
        spawnFxParticle(
          point.x,
          point.y,
          Math.random() * Math.PI * 2,
          18 + Math.random() * 38,
          1 + Math.random() * 2.2,
        );
    }
    const wasPinched = state.fxPinchState.get(key) || false;
    if (hand.features.pinch && !wasPinched)
      pushFxBurst(point.x, point.y, 1.0, 266);
    state.fxPinchState.set(key, hand.features.pinch);
  });

  for (const [hand, points] of state.fxTrailHistory) {
    if (points.length < 2) continue;
    const stroke =
      hand === "Left" ? "rgba(184,155,239,.72)" : "rgba(118,202,239,.70)";
    ctx.strokeStyle = stroke;
    ctx.lineWidth = isMobile() ? 1.4 : 1.8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    points.forEach((point, index) => {
      ctx.globalAlpha = ((index + 1) / points.length) * 0.72;
      index ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y);
    });
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  state.fxParticles.forEach((p) => {
    if (p.life > 0) {
      p.life = Math.max(0, p.life - dt / Math.max(0.2, p.ttl));
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vx *= 0.972;
      p.vy *= 0.972;
      ctx.fillStyle = `rgba(211,197,236,${p.life * 0.55})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  state.fxBursts = state.fxBursts.filter((burst) => burst.life > 0);
  state.fxBursts.forEach((burst) => {
    burst.life = Math.max(0, burst.life - dt * 1.4);
    const radius = (1 - burst.life) * 92 * burst.strength;
    ctx.strokeStyle = `rgba(190,160,242,${burst.life * 0.55})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
    ctx.stroke();
  });

  hands.forEach((hand, index) => {
    const point = handTipPoint(hand, rect);
    const accent =
      index === 0 ? "rgba(190,161,242,.96)" : "rgba(122,205,240,.94)";
    ctx.strokeStyle = accent;
    ctx.fillStyle = accent;
    ctx.lineWidth = hand.features.pinch ? 2 : 1;
    ctx.beginPath();
    ctx.arc(point.x, point.y, hand.features.pinch ? 18 : 12, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(point.x, point.y, hand.features.pinch ? 4.5 : 3.2, 0, Math.PI * 2);
    ctx.fill();
  });
}
function updateCreativeScenes(handResults) {
  if (state.mode === "playground")
    els.playgroundMeta.textContent = handResults.length
      ? "LIVE FIELD"
      : state.cameraStarted
        ? "SEARCHING"
        : "IDLE";
  if (state.mode === "fx")
    els.fxMeta.textContent = handResults.length
      ? "LIVE SIGNAL"
      : state.cameraStarted
        ? "SEARCHING"
        : "IDLE";
}

function updateDiagnostics(workerStats = null) {
  if (workerStats) {
    if (workerStats.inferenceHz) state.inferenceHz = workerStats.inferenceHz;
  }
  els.diagFps.textContent = String(state.previewFps);
  els.diagInference.textContent = `${state.inferenceHz || 0} Hz`;
  els.diagLatency.textContent = state.lastInferenceLatency
    ? `${Math.round(state.lastInferenceLatency)} ms`
    : "—";
  els.diagDelegate.textContent =
    workerStats?.delegate ||
    state.mainRecognizer?.__delegate ||
    (state.workerReady ? "Worker" : "—");
  els.diagWorker.textContent = state.workerReady
    ? "Ready"
    : state.mainFallback
      ? "Fallback"
      : "—";
  els.diagHands.textContent = String(state.lastResult.hands.length);
  els.diagEvent.textContent = state.lastEvent
    ? gestureData(state.lastEvent.gesture).name
    : "—";
  els.diagVision.textContent =
    state.workerReady || state.mainReady ? "Ready" : "Loading";
}

function setupSettings() {
  els.performanceSelect.value = state.settings.performance;
  els.soundSetting.checked = state.sound;
  els.motionSetting.checked = state.reducedMotion;
  els.trailSetting.checked = state.trails;
  els.diagnosticSetting.checked = !!state.settings.diagnostics;
  els.performanceSelect.addEventListener("change", () => {
    state.settings.performance = els.performanceSelect.value;
    saveJSON(STORAGE.settings, state.settings);
    showToast("Performance updated.");
  });
  els.soundSetting.addEventListener("change", () => {
    state.sound = els.soundSetting.checked;
    state.settings.sound = state.sound;
    saveJSON(STORAGE.settings, state.settings);
    applyVisualSettings();
  });
  els.motionSetting.addEventListener("change", () => {
    state.reducedMotion = els.motionSetting.checked;
    state.settings.reducedMotion = state.reducedMotion;
    saveJSON(STORAGE.settings, state.settings);
    document.documentElement.classList.toggle(
      "reduced-motion",
      state.reducedMotion,
    );
  });
  els.trailSetting.addEventListener("change", () => {
    state.trails = els.trailSetting.checked;
    state.settings.trails = state.trails;
    saveJSON(STORAGE.settings, state.settings);
    applyVisualSettings();
  });
  els.diagnosticSetting.addEventListener("change", () => {
    state.settings.diagnostics = els.diagnosticSetting.checked;
    saveJSON(STORAGE.settings, state.settings);
    showToast(
      state.settings.diagnostics
        ? "Diagnostics enabled."
        : "Diagnostics hidden from the app surface.",
    );
  });
  els.cameraSelect.addEventListener("change", async () => {
    state.currentDeviceId = els.cameraSelect.value;
    state.settings.activeCameraId = state.currentDeviceId;
    saveJSON(STORAGE.settings, state.settings);
    if (state.cameraStarted) {
      await switchToDevice(state.currentDeviceId);
    }
  });
}
async function switchToDevice(deviceId) {
  const previousStream = state.stream;
  try {
    const nextStream = await requestCamera(deviceId);
    previousStream?.getTracks().forEach((track) => track.stop());
    state.stream = nextStream;
    els.video.srcObject = state.stream;
    await els.video.play();
    await waitForVideoReady();
    state.currentDeviceId = deviceId || "default";
    state.settings.activeCameraId = state.currentDeviceId;
    saveJSON(STORAGE.settings, state.settings);
    showToast("Camera updated.");
  } catch (error) {
    showToast(cameraErrorMessage(error));
    addDiagnostic(`Camera selection failed · ${error.name || "error"}`);
  }
}

function exportSession() {
  const payload = {
    app: "NYX",
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    session: {
      events: state.session.events,
      unique: [...state.session.unique],
      twoHand: state.session.twoHand,
      bestConfidence: state.session.best,
    },
    history: state.history,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nyx-session-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Session exported.");
}

function setupInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.installPrompt = event;
    els.installButton.hidden = false;
  });
  els.installButton.addEventListener("click", async () => {
    if (!state.installPrompt) return;
    state.installPrompt.prompt();
    await state.installPrompt.userChoice;
    state.installPrompt = null;
    els.installButton.hidden = true;
  });
  window.addEventListener("appinstalled", () => {
    state.installPrompt = null;
    els.installButton.hidden = true;
    showToast("NYX installed.");
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () =>
      navigator.serviceWorker
        .register("./sw.js")
        .catch((error) => addDiagnostic(`Service worker · ${error.message}`)),
    );
  }
}
function applyInitialSettings() {
  document.documentElement.classList.toggle(
    "reduced-motion",
    state.reducedMotion,
  );
  applyVisualSettings();
}

function bindEvents() {
  els.startButton.addEventListener("click", startCamera);
  els.stopButton.addEventListener("click", () => stopCamera());
  els.cameraSwitch.addEventListener("click", switchCamera);
  els.mirrorButton.addEventListener("click", toggleMirror);
  els.overlayButton.addEventListener("click", toggleOverlay);
  els.trailButton.addEventListener("click", toggleTrails);
  els.snapshotButton.addEventListener("click", takeSnapshot);
  els.fullscreenButton.addEventListener("click", toggleFullscreen);
  els.resetSession.addEventListener("click", resetSession);
  els.exportSession.addEventListener("click", exportSession);
  els.clearHistory.addEventListener("click", () => {
    state.history = [];
    saveHistory();
    renderHistory();
    showToast("History cleared.");
    addDiagnostic("History cleared");
  });
  els.soundToggle.addEventListener("click", () => {
    state.sound = !state.sound;
    state.settings.sound = state.sound;
    saveJSON(STORAGE.settings, state.settings);
    applyVisualSettings();
    showToast(state.sound ? "Sound on." : "Sound off.");
    if (state.sound) playTone("Thumb_Up");
  });
  els.settingsButton.addEventListener("click", () =>
    openDialog("settingsSheet"),
  );
  els.mobileSettingsButton.addEventListener("click", () =>
    openDialog("settingsSheet"),
  );
  els.diagnosticsButton.addEventListener("click", () =>
    openDialog("diagnosticsSheet"),
  );
  document
    .querySelectorAll(".mode-button,.mobile-dock-button[data-mode]")
    .forEach((button) =>
      button.addEventListener("click", () => setMode(button.dataset.mode)),
    );
  document
    .querySelectorAll("[data-close-dialog]")
    .forEach((button) =>
      button.addEventListener("click", () =>
        $(button.dataset.closeDialog)?.close(),
      ),
    );
  document.querySelectorAll("dialog").forEach((dialog) =>
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    }),
  );
  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement ||
      event.target instanceof HTMLSelectElement
    )
      return;
    const key = event.key.toLowerCase();
    if (key === " " && !state.cameraStarted) {
      event.preventDefault();
      startCamera();
    }
    if (key === "escape" && state.cameraStarted) stopCamera();
    if (key === "m" && state.cameraStarted) toggleMirror();
    if (key === "o" && state.cameraStarted) toggleOverlay();
    if (key === "t" && state.cameraStarted) toggleTrails();
    if (key === "s" && state.cameraStarted) takeSnapshot();
    if (key === "f") toggleFullscreen();
    if (key === "1") setMode("recognize");
    if (key === "2") setMode("control");
    if (key === "3") setMode("playground");
    if (key === "4") setMode("fx");
  });
  window.addEventListener("resize", () => {
    resizeCanvases();
    resizeCreativeCanvases();
  });
  document.addEventListener("fullscreenchange", resizeCanvases);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(state.inferenceRaf);
      state.inferenceInFlight = false;
    } else if (state.cameraStarted) startLoops();
  });
  document.querySelectorAll(".gesture-tile").forEach((tile) =>
    tile.addEventListener("click", () => {
      const data = gestureData(tile.dataset.gesture);
      showToast(`${data.name} · ${data.meaning}.`);
    }),
  );
  navigator.mediaDevices?.addEventListener?.("devicechange", enumerateCameras);
}

function setup() {
  state.lastHistoryKey = state.history[0]?.gesture || "";
  state.lastFrameTime = performance.now();
  renderGestureGrid();
  renderHistory();
  updateSessionUI();
  setupControlTiles();
  setupSettings();
  setupInstallPrompt();
  registerServiceWorker();
  applyInitialSettings();
  initParticles();
  bindEvents();
  resizeCanvases();
  resizeCreativeCanvases();
  clearResult();
  updateDiagnostics();
  els.deviceStateLabel.textContent = "ON-DEVICE";
  els.engineLabel.textContent = "MediaPipe Vision";
  els.handsModeLabel.textContent = "2 MAX";
  els.cameraEmpty.hidden = false;
  els.stopButton.disabled = true;
  els.cameraSwitch.disabled = true;
  els.mirrorButton.disabled = true;
  els.overlayButton.disabled = true;
  els.trailButton.disabled = true;
  els.snapshotButton.disabled = true;
  if (state.settings.diagnostics) addDiagnostic(`NYX ${APP_VERSION} ready`);
}

window.addEventListener("error", (event) =>
  addDiagnostic(`Runtime · ${event.message}`),
);
window.addEventListener("unhandledrejection", (event) =>
  addDiagnostic(
    `Promise · ${event.reason?.message || event.reason || "unknown"}`,
  ),
);
setup();
