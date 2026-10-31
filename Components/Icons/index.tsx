import type { SVGProps } from "react";

type IconName = "menu" | "close" | "linkedin" | "github" | "whatsapp";
const paths: Record<IconName, string> = {
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "m6 6 12 12M6 18 18 6",
  linkedin: "M5 9v11M5 5v.01M10 20V9h4v2c1-3 6-3 6 2v7M3 9h4M3 20h4",
  github:
    "M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.3-2-1-2 3-.4 6-1.5 6-6 0-1.3-.4-2.5-1.3-3.4.2-.8.2-2-.3-3.6 0 0-1 0-3.5 1.5a12 12 0 0 0-6 0C6.5 3 5.5 3 5.5 3c-.5 1.6-.5 2.8-.3 3.6C4.4 7.5 4 8.7 4 10c0 4.5 3 5.6 6 6-.7.5-1 1.5-1 2v4",
  whatsapp:
    "M21 11.5a9 9 0 0 1-13.4 8L3 21l1.5-4.6A9 9 0 1 1 21 11.5ZM8 7c-2 2 3 8 6 9 1 .3 2-.5 2-2l-3-1-1 1c-1-.5-3-2.5-3-3l1-1-1-3Z",
};

export default function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
