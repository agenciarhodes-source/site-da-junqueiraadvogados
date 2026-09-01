import React from "react";
import { motion } from "framer-motion";

/**
 * Auto-scrolling infinite photo carousel using framer-motion.
 * Duplicates the images and animates X translation linearly forever.
 */
export default function GalleryCarousel({ images = [], duration = 45 }) {
    const doubled = [...images, ...images];
    return (
        <div className="relative w-full overflow-hidden" data-testid="gallery-carousel">
            <motion.div
                className="flex gap-6 md:gap-8 will-change-transform"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                style={{ width: "max-content" }}
            >
                {doubled.map((src, i) => (
                    <div
                        key={i}
                        className="relative flex-none w-[240px] sm:w-[300px] md:w-[400px] aspect-[4/5] spotlight-frame overflow-hidden"
                    >
                        <img
                            src={src}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="lazy"
                            draggable={false}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
