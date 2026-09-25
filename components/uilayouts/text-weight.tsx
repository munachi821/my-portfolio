"use client";

// Dynamic Weight — Originkit
// Props set in the preview:
//   label: "MUNACHI"

import * as React from "react";
import { useEffect, useRef } from "react";
const useIsStaticRenderer = () => false;
import { motion, useAnimationFrame } from "motion/react";

/**
 * VariableFontCursorProximity — text whose letters individually morph
 * their `wght` (font-variation-settings) based on proximity to the cursor.
 * Each letter interpolates linearly between `fromWeight` (resting) and
 * `toWeight` (at cursor center); the Transition control eases both the
 * ramp-in and ramp-out. The component IS the container — proximity is
 * measured relative to its own bounding box, so no external ref is required.
 *
 * Ships with a bundled Inter Variable (loaded from rsms.me) so the
 * default `wght` + `slnt` animation works out of the box. Override
 * `fontFamily` with any other variable font's family name — but you
 * must ensure that font is actually loaded in your Framer project.
 *
 * Per-frame `style.fontVariationSettings` mutation is done directly
 * on the DOM nodes (bypassing React) for performance — at 60fps with
 * many letters, anything else would thrash.
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 600
 * @framerIntrinsicHeight 200
 */
export default function VariableFontCursorProximity(props: Props) {
  props = { ...COMPONENT_DEFAULTS, ...props };
  const {
    label,
    fromWeight,
    toWeight,
    strength,
    fontSize,
    color,
    transition,
    style,
  } = props;

  // Strength 1–100 → proximity reach in px (100 = MAX_REACH).
  const reach = Math.max(
    1,
    (Math.max(1, Math.min(100, strength)) / 100) * MAX_REACH,
  );

  const isStatic = useIsStaticRenderer();
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const letterFactorsRef = useRef<number[]>([]);
  const lastFrameRef = useRef(0);
  const mousePositionRef = useRef({ x: -99999, y: -99999 });
  const letterCentersRef = useRef<Array<{ cx: number; cy: number }>>([]);
  const [isInView, setIsInView] = React.useState(false);
  const isPointerFine = useRef(false);
  const isDirtyRef = useRef(false);

  // Measure letter centers relative to container once (or on resize)
  const measureCenters = React.useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    letterCentersRef.current = letterRefs.current.map((el) => {
      if (!el) return { cx: 0, cy: 0 };
      const r = el.getBoundingClientRect();
      return {
        cx: r.left + r.width / 2 - containerRect.left,
        cy: r.top + r.height / 2 - containerRect.top,
      };
    });
  }, []);

  useEffect(() => {
    if (isStatic) return;

    isPointerFine.current = window.matchMedia("(pointer: fine)").matches;
    if (!isPointerFine.current) return;

    const el = containerRef.current;
    if (!el) return;

    // Observe when in view so we don't calculate off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          measureCenters();
        }
      },
      { rootMargin: "100px" }
    );
    observer.observe(el);

    const updatePosition = (clientX: number, clientY: number) => {
      const currentContainer = containerRef.current;
      if (!currentContainer) return;
      const rect = currentContainer.getBoundingClientRect();
      mousePositionRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
      isDirtyRef.current = true;
    };

    const handleMouseMove = (ev: MouseEvent) =>
      updatePosition(ev.clientX, ev.clientY);

    const handleResize = () => {
      measureCenters();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isStatic, measureCenters]);

  // Resting / hover wght values as variation-settings strings.
  const fromSettings = `'wght' ${fromWeight}`;

  // Per-frame: only runs if component is in view and on a device with a fine pointer (desktop)
  useAnimationFrame((now: number) => {
    if (isStatic || !isInView || !isPointerFine.current) return;
    if (!isDirtyRef.current) return;

    const mx = mousePositionRef.current.x;
    const my = mousePositionRef.current.y;

    const prevT = lastFrameRef.current || now;
    const dtSec = Math.min(0.1, Math.max(0, (now - prevT) / 1000));
    lastFrameRef.current = now;

    const tau = Math.max(0.016, transition?.duration ?? 0.3);
    const a = 1 - Math.exp(-dtSec / tau);

    let hasNonZeroChange = false;

    for (let i = 0; i < letterRefs.current.length; i++) {
      const letterEl = letterRefs.current[i];
      if (!letterEl) continue;

      const center = letterCentersRef.current[i];
      if (!center) continue;

      const dx = mx - center.cx;
      const dy = my - center.cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const target = Math.min(Math.max(1 - dist / reach, 0), 1);
      const prev = letterFactorsRef.current[i] ?? 0;
      const f = prev + (target - prev) * a;
      letterFactorsRef.current[i] = f;

      if (f < 0.001) {
        if (letterEl.style.fontVariationSettings !== fromSettings) {
          letterEl.style.fontVariationSettings = fromSettings;
        }
        continue;
      }

      hasNonZeroChange = true;
      const w = Math.round(fromWeight + (toWeight - fromWeight) * f);
      letterEl.style.fontVariationSettings = `'wght' ${w}`;
    }

    // Stop updating if all letters reached resting state and cursor is away
    if (!hasNonZeroChange && (mx < -1000 || my < -1000)) {
      isDirtyRef.current = false;
    }
  });

  // ---- Render ----------------------------------------------------------
  // sr-only: visually hidden but available to screen readers. The
  // visible per-letter spans are aria-hidden so this one carries
  // the semantic text.
  const srOnlyStyle: React.CSSProperties = {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    whiteSpace: "nowrap",
    borderWidth: 0,
  };

  // Using the site's native Fraunces variable font instead of a remote Inter fetch.
  const innerSpanStyle: React.CSSProperties = {
    fontFamily: "var(--font-fraunces)",
    fontSize,
    color,
    textAlign: "center",
    display: "block",
    width: "100%",
    lineHeight: 1.1,
  };

  // Split into words (preserving the gaps) so words don't break
  // mid-line. Each word is an inline-block with whitespace: nowrap
  // and its letters are inline-block so each one has a measurable
  // box for distance calculations.
  const words = label ? label.split(" ") : [];

  let letterIndex = 0;

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: isStatic ? undefined : "pointer",
        ...style,
      }}
    >
      {/* Font face removed — using native Fraunces variable font */}
      {words.length === 0 ? null : (
        <span style={innerSpanStyle}>
          <span style={srOnlyStyle}>{label}</span>
          {words.map((word, wi) => {
            const wordLetters = word.split("");
            return (
              <React.Fragment key={wi}>
                <span
                  aria-hidden
                  style={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  {wordLetters.map((letter, li) => {
                    const idx = letterIndex++;
                    return (
                      <motion.span
                        key={li}
                        ref={(el: HTMLSpanElement | null) => {
                          if (el) {
                            letterRefs.current[idx] = el;
                          }
                        }}
                        style={{
                          display: "inline-block",
                          fontVariationSettings: fromSettings,
                        }}
                      >
                        {letter}
                      </motion.span>
                    );
                  })}
                </span>
                {wi < words.length - 1 && (
                  <span
                    aria-hidden
                    style={{
                      display: "inline-block",
                    }}
                  >
                    &nbsp;
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </span>
      )}
    </div>
  );
}

// Bundled variable font so the default animation works without the
// user having to load anything. Inter exposes both `wght` (100-900)
// and `slnt` (-10..0) axes, matching the default From/To strings.
// Unique family name avoids colliding with any user-installed "Inter".
const INTER_VARIABLE_FONT_FACE = `
@font-face {
    font-family: "InterVariableFramer";
    src: url("https://rsms.me/inter/font-files/InterVariable.woff2?v=4.0") format("woff2-variations");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: "InterVariableFramer";
    src: url("https://rsms.me/inter/font-files/InterVariable-Italic.woff2?v=4.0") format("woff2-variations");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}
`;

// The proximity morph only works on a VARIABLE font. Framer's Font control
// can hand back a static instance + a fixed `fontWeight` that would lock the
// `wght` axis, so the rendered letters are always forced onto this bundled
// variable stack regardless of the picked family.
const VARIABLE_FONT_STACK =
  '"InterVariableFramer", "Inter Variable", "Inter", system-ui, sans-serif';

// Strength 1–100 maps to this proximity reach (px) at full strength.
const MAX_REACH = 800;

type Props = {
  label: string;
  fromWeight: number;
  toWeight: number;
  strength: number;
  fontSize: number | string;
  color: string;
  transition?: any;
  style?: React.CSSProperties;
};

const WEIGHT_OPTIONS = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const WEIGHT_TITLES = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

const COMPONENT_DEFAULTS = {
  label: "Variable Font Proximity",
  fontSize: 48,
  color: "#FFFFFF",
  fromWeight: 400,
  toWeight: 900,
  strength: 25,
  transition: {
    type: "tween",
    duration: 0.3,
    ease: "easeOut",
  },
};
