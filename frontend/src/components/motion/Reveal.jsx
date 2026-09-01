import React from "react";
import { motion, useInView } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

/** Reveals children with a masked upward slide. */
export function Reveal({ children, delay = 0, y = 24, className = "", once = true }) {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay, ease: easing }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/** Splits string into lines (by array) and reveals them with mask + slide. */
export function LineReveal({ lines, className = "", delay = 0, stagger = 0.12 }) {
    return (
        <span className={className}>
            {lines.map((line, i) => (
                <span key={i} className="mask-line">
                    <motion.span
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            duration: 1.05,
                            delay: delay + i * stagger,
                            ease: easing,
                        }}
                    >
                        {line}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

/** Fades a scroll-linked block with subtle Y. */
export function FadeUp({ children, delay = 0, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.85, delay, ease: easing }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/** Scale-in with mask reveal for images. */
export function ImageReveal({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            className={`relative overflow-hidden ${className}`}
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.2, delay, ease: easing }}
        >
            {children}
        </motion.div>
    );
}
