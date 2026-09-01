import React from "react";

/**
 * Slow editorial marquee. Duplicates children for seamless loop.
 */
export default function Marquee({ words = [], onDark = false, slow = true }) {
    const track = (
        <div className={`marquee-track items-center ${slow ? "" : ""}`} aria-hidden>
            {[...words, ...words].map((w, i) => (
                <div
                    key={i}
                    className="flex items-center gap-12 whitespace-nowrap"
                >
                    <span
                        className={`font-editorial italic ${onDark ? "text-white/90" : "text-[color:var(--ink)]"}`}
                        style={{
                            fontSize: "clamp(3rem, 10vw, 7.5rem)",
                            letterSpacing: "-0.02em",
                            lineHeight: 1,
                        }}
                    >
                        {w}
                    </span>
                    <span
                        className={`inline-block h-2 w-2 rounded-full ${onDark ? "bg-[color:var(--gold)]" : "bg-[color:var(--burgundy)]"}`}
                    />
                </div>
            ))}
        </div>
    );
    return (
        <div className={`marquee ${slow ? "marquee-slow" : ""} py-4`}>
            {track}
        </div>
    );
}
