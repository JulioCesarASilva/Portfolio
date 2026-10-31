import { useEffect, useRef } from "react";
import styles from "../../styles/Particles.module.css";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};
const colors = ["#fff", "#560CF2", "#9B0DFC", "#C900E6", "#FC0DBF", "#F20C44"];

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let visible = true;
    let points: Point[] = [];
    let pointer: { x: number; y: number } | null = null;

    const draw = (delta: number) => {
      context.clearRect(0, 0, width, height);
      points.forEach((point, index) => {
        point.x += point.vx * delta;
        point.y += point.vy * delta;
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
        point.x = Math.max(0, Math.min(width, point.x));
        point.y = Math.max(0, Math.min(height, point.y));
        const link = (target: { x: number; y: number }) => {
          const distance = Math.hypot(point.x - target.x, point.y - target.y);
          if (distance >= 150) return;
          context.strokeStyle = `rgba(255,255,255,${(1 - distance / 150) * 0.45})`;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(target.x, target.y);
          context.stroke();
        };
        for (let other = index + 1; other < points.length; other++)
          link(points[other]);
        if (pointer) link(pointer);
        context.fillStyle = point.color;
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      });
    };
    const animate = (time: number) => {
      draw(lastTime ? Math.min(time - lastTime, 50) / 16.67 : 0);
      lastTime = time;
      frame = requestAnimationFrame(animate);
    };
    const syncAnimation = () => {
      cancelAnimationFrame(frame);
      lastTime = 0;
      if (!motion.matches && !document.hidden && visible)
        frame = requestAnimationFrame(animate);
      else draw(0);
    };
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      points = Array.from(
        {
          length: Math.min(
            100,
            Math.max(20, Math.floor((width * height) / 15000)),
          ),
        },
        () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: 1 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        }),
      );
      draw(0);
    };
    const move = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };
    };
    const leave = () => {
      pointer = null;
    };
    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    resize();
    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    motion.addEventListener("change", syncAnimation);
    document.addEventListener("visibilitychange", syncAnimation);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerleave", leave);
    syncAnimation();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      motion.removeEventListener("change", syncAnimation);
      document.removeEventListener("visibilitychange", syncAnimation);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
  );
}
