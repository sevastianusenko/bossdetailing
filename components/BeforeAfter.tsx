"use client";

import Image from "next/image";
import { useId, useState } from "react";

/**
 * Paint-correction comparison. The control is a real range input laid over
 * the frame, so dragging, tapping and arrow keys all work and a screen
 * reader gets a labelled slider rather than a div with a mouse handler.
 */
export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  note,
  priority = false,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** Provenance line. Say what the frames are; never imply a job we did not do. */
  note?: string;
  priority?: boolean;
}) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <figure className="m-0">
      <div className="relative aspect-[16/10] w-full select-none overflow-hidden bg-ink-2">
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          priority={priority}
          className="object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <Image
            src={after}
            alt={afterAlt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            priority={priority}
            className="object-cover"
          />
        </div>

        {/* Divider + handle, purely presentational; the input below owns behaviour. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-bone/85"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone/70 bg-ink/70 backdrop-blur-sm">
            <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
              <path
                d="M9 1 4 6l5 5M17 1l5 5-5 5"
                stroke="#f3f2ee"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </div>

        <span
          aria-hidden="true"
          className="absolute left-4 top-4 z-10 bg-ink/80 px-2.5 py-1 font-display text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-silver backdrop-blur-sm"
        >
          {beforeLabel}
        </span>
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 z-10 bg-carmine px-2.5 py-1 font-display text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-bone"
        >
          {afterLabel}
        </span>

        <label htmlFor={id} className="sr-only">
          Reveal the corrected paint — drag or use the arrow keys
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent [&::-moz-range-thumb]:h-full [&::-moz-range-thumb]:w-12 [&::-moz-range-thumb]:cursor-ew-resize [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-webkit-slider-thumb]:h-[999px] [&::-webkit-slider-thumb]:w-12 [&::-webkit-slider-thumb]:cursor-ew-resize [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-transparent"
        />
      </div>

      <figcaption className="mt-3 text-sm text-muted">
        Drag the handle, or focus it and use the arrow keys.
        {note && <span className="mt-1 block">{note}</span>}
      </figcaption>
    </figure>
  );
}
