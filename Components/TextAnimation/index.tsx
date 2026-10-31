import { useEffect, useState } from "react";
import styles from "../../styles/TextAnimation.module.css";

export default function TextAnimation({ func }: { func: string[] }) {
  const [text, setText] = useState(func[0] ?? "");
  const words = JSON.stringify(func.filter(Boolean));

  useEffect(() => {
    const phrases = JSON.parse(words) as string[];
    if (!phrases.length) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;
    let index = 0;
    let characters = Array.from(phrases[0]).length;
    let deleting = true;
    const tick = () => {
      const phrase = Array.from(phrases[index]);
      characters += deleting ? -1 : 1;
      setText(phrase.slice(0, characters).join(""));
      let delay = deleting ? 70 : 100;
      if (!deleting && characters === phrase.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && characters === 0) {
        deleting = false;
        index = (index + 1) % phrases.length;
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    };
    const restart = () => {
      clearTimeout(timer);
      index = 0;
      characters = Array.from(phrases[0]).length;
      deleting = true;
      setText(phrases[0]);
      if (!motion.matches && !document.hidden) timer = setTimeout(tick, 1600);
    };
    restart();
    motion.addEventListener("change", restart);
    document.addEventListener("visibilitychange", restart);
    return () => {
      clearTimeout(timer);
      motion.removeEventListener("change", restart);
      document.removeEventListener("visibilitychange", restart);
    };
  }, [words]);

  return (
    <>
      <span className={styles.accessible}>{func.join(", ")}</span>
      <span aria-hidden="true" className={styles.text}>
        {text}
        <span className={styles.cursor}>|</span>
      </span>
    </>
  );
}
