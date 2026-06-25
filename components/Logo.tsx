import Image from "next/image";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  /** Invert the black mark to white for dark backgrounds. */
  onDark?: boolean;
  priority?: boolean;
};

/**
 * DC Solar KC brand mark — the official Kansas City skyline wordmark
 * (public/logo.png). The source art is black on transparent. Control the
 * displayed size with a height utility class (e.g. `h-8`); width stays auto so
 * the aspect ratio is preserved.
 */
export function Logo({ className, onDark = false, priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={`${siteConfig.name} logo`}
      width={951}
      height={359}
      priority={priority}
      className={`w-auto object-contain ${onDark ? "invert" : ""} ${className ?? ""}`}
    />
  );
}
