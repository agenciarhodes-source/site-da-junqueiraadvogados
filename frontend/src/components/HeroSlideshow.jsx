import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlideshow({ images, interval = 5000 }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="absolute inset-0">
            <AnimatePresence mode="sync">
                <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />
            </AnimatePresence>
        </div>
    );
}
