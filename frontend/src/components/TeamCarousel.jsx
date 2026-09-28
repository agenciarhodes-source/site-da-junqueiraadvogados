import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { team } from "@/config/site";

export default function TeamCarousel() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const timerRef = useRef(null);

    const resetTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % team.length);
        }, 6000);
    }, []);

    useEffect(() => {
        resetTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [resetTimer]);

    const go = (dir) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + team.length) % team.length);
        resetTimer();
    };

    const person = team[current];

    const variants = {
        enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
    };

    return (
        <section className="bg-[color:var(--burgundy)] py-20 md:py-24 overflow-hidden">
            <div className="container-e">
                <h2 className="display-xl text-white mb-12" style={{ maxWidth: "22ch" }}>
                    Advogados que{" "}
                    <span className="font-editorial italic text-[color:var(--gold)]">assinam</span>{" "}
                    cada análise.
                </h2>

                <div className="relative">
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white/[0.12] rounded-2xl overflow-hidden"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
                                <div className="aspect-[3/4] md:aspect-auto max-h-[400px]">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="h-full w-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-8 md:p-10 flex flex-col justify-center">
                                    <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--gold)] font-medium">
                                        {person.role}
                                    </div>
                                    <h3 className="display-lg text-white mt-3">{person.name}</h3>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {person.oab.split("·").map((o) => (
                                            <span
                                                key={o.trim()}
                                                className="text-[11px] tracking-wider text-white/90 border border-white/30 rounded-full px-3 py-1"
                                            >
                                                {o.trim()}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="body-lg mt-6 text-white" style={{ maxWidth: "50ch" }}>
                                        {person.bio}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex gap-2">
                            <button
                                onClick={() => go(-1)}
                                className="h-10 w-10 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                                aria-label="Anterior"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={() => go(1)}
                                className="h-10 w-10 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                                aria-label="Próximo"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            {team.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); resetTimer(); }}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        i === current ? "w-6 bg-[color:var(--gold)]" : "w-2 bg-white/30"
                                    }`}
                                    aria-label={`Ir para ${team[i].name}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
