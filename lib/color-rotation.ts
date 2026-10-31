export const COLOR_ROTATION_INTERVAL = 25_000;
const COLOR_COUNT = 3;

/** Keep the accent color in sync without running timers in inactive tabs. */
export function startColorRotation(doc: Document, motion: MediaQueryList) {
  let color = Math.floor(Math.random() * COLOR_COUNT);
  let timer: ReturnType<typeof setInterval> | undefined;

  const applyColor = () => {
    doc.body.setAttribute("data-color", `COLOR-${color}`);
  };
  const stop = () => {
    clearInterval(timer);
    timer = undefined;
  };
  const sync = () => {
    stop();
    if (doc.hidden || motion.matches) return;
    timer = setInterval(() => {
      // Select either of the other colors, never the currently displayed one.
      color =
        (color + 1 + Math.floor(Math.random() * (COLOR_COUNT - 1))) %
        COLOR_COUNT;
      applyColor();
    }, COLOR_ROTATION_INTERVAL);
  };

  applyColor();
  sync();
  doc.addEventListener("visibilitychange", sync);
  motion.addEventListener("change", sync);

  return () => {
    stop();
    doc.removeEventListener("visibilitychange", sync);
    motion.removeEventListener("change", sync);
  };
}
