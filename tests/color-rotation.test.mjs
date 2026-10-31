import assert from "node:assert/strict";
import test from "node:test";
import {
  COLOR_ROTATION_INTERVAL,
  startColorRotation,
} from "../lib/color-rotation.ts";

function environment({ hidden = false, reducedMotion = false } = {}) {
  const doc = Object.assign(new EventTarget(), {
    hidden,
    body: {
      color: undefined,
      setAttribute(name, value) {
        assert.equal(name, "data-color");
        this.color = value;
      },
    },
  });
  const motion = Object.assign(new EventTarget(), { matches: reducedMotion });
  return { doc, motion };
}

test("sets an initial color and changes it every 25 seconds without repetition", (t) => {
  t.mock.timers.enable({ apis: ["setInterval"] });
  t.mock.method(Math, "random", () => 0);
  const { doc, motion } = environment();
  const cleanup = startColorRotation(doc, motion);
  assert.equal(doc.body.color, "COLOR-0");
  t.mock.timers.tick(COLOR_ROTATION_INTERVAL - 1);
  assert.equal(doc.body.color, "COLOR-0");
  t.mock.timers.tick(1);
  assert.equal(doc.body.color, "COLOR-1");
  t.mock.timers.tick(COLOR_ROTATION_INTERVAL);
  assert.equal(doc.body.color, "COLOR-2");
  cleanup();
  t.mock.timers.tick(COLOR_ROTATION_INTERVAL);
  assert.equal(doc.body.color, "COLOR-2");
});

test("pauses in hidden tabs, resumes once visible, and removes listeners on cleanup", (t) => {
  t.mock.timers.enable({ apis: ["setInterval"] });
  t.mock.method(Math, "random", () => 0);
  const { doc, motion } = environment({ hidden: true });
  const cleanup = startColorRotation(doc, motion);
  t.mock.timers.tick(COLOR_ROTATION_INTERVAL * 2);
  assert.equal(doc.body.color, "COLOR-0");
  doc.hidden = false;
  doc.dispatchEvent(new Event("visibilitychange"));
  t.mock.timers.tick(COLOR_ROTATION_INTERVAL);
  assert.equal(doc.body.color, "COLOR-1");
  doc.hidden = true;
  doc.dispatchEvent(new Event("visibilitychange"));
  t.mock.timers.tick(COLOR_ROTATION_INTERVAL);
  assert.equal(doc.body.color, "COLOR-1");
  cleanup();
  doc.hidden = false;
  doc.dispatchEvent(new Event("visibilitychange"));
  motion.dispatchEvent(new Event("change"));
  t.mock.timers.tick(COLOR_ROTATION_INTERVAL);
  assert.equal(doc.body.color, "COLOR-1");
});

test("respects changes to reduced motion without accumulating timers", (t) => {
  t.mock.timers.enable({ apis: ["setInterval"] });
  t.mock.method(Math, "random", () => 0);
  const { doc, motion } = environment({ reducedMotion: true });
  const cleanup = startColorRotation(doc, motion);
  t.mock.timers.tick(COLOR_ROTATION_INTERVAL);
  assert.equal(doc.body.color, "COLOR-0");
  motion.matches = false;
  motion.dispatchEvent(new Event("change"));
  motion.dispatchEvent(new Event("change"));
  t.mock.timers.tick(COLOR_ROTATION_INTERVAL);
  assert.equal(doc.body.color, "COLOR-1");
  motion.matches = true;
  motion.dispatchEvent(new Event("change"));
  t.mock.timers.tick(COLOR_ROTATION_INTERVAL);
  assert.equal(doc.body.color, "COLOR-1");
  cleanup();
});
