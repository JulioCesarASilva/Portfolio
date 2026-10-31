import { useEffect } from "react";
import { startColorRotation } from "../lib/color-rotation";

export default function useAccentColor() {
  useEffect(() => {
    return startColorRotation(
      document,
      window.matchMedia("(prefers-reduced-motion: reduce)"),
    );
  }, []);
}
