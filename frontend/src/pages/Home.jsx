import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";
import { LineReveal, Reveal, FadeUp, ImageReveal } from "@/components/motion/Reveal";
import Marquee from "@/components/Marquee";
import HeroSlideshow from "@/components/HeroSlideshow";
import TeamCarousel from "@/components/TeamCarousel";
import { siteConfig, areas, units, testimonials } from "@/config/site";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

const HERO_SLIDES = [
    "/brand/hero/hero-1.jpg",
    "/brand/hero/hero-2.jpg",
    "/brand/hero/hero-3.jpg",
    "/brand/hero/hero-4.jpg",
];

export default function Home() {
    const { scrollY } = useScroll();
    const heroTextY = useTransform(scrollY, [0, 600], [0, -60]);

    return (
        <InstitutionalLayout>
            {/* ========================== HERO ========================== */}
            <section className="relative min-h-[100svh] w-full overflow-hidden bg-[color:var(--burgundy)] text-white">
                {/* Slideshow background */}
                <HeroSlideshow images={HERO_SLIDES} interval={5000} />
                {/* Burgundy overlay */}
                <div className="absolute inset-0 bg-[color:var(--burgundy)]" style={{ opacity: 0.3 }} />
                <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--burgundy)]/60 via-transparent to-[color:var(--burgundy-deep)]/80" />
                <div className="absolute inset-0 grain opacity-70" />

                <motion.div style={{ y: heroTextY }} className="relative container-e min-h-[100svh] flex flex-col justify-center gap-5 md:gap-7 pt-[150px] pb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.4 }}
                        className="flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-[color:var(--gold)]" />
                        <span className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--gold)] font-medium">
                            {siteConfig.hero.eyebrow}
                        </span>
                    </motion.div>

                    {/* Kinetic H1 */}
                    <div className="mt-0 max-w-[1200px]">
                        <h1 className="display-hero text-white font-light">
                            <LineReveal
                                lines={siteConfig.hero.title.map((t, i) =>
                                    i === 1 ? (
                                        <span key={i} className="font-editorial italic text-[color:var(--gold)]" style={{ fontWeight: 400 }}>
                                            {t}
                                        </span>
                                    ) : (
                                        <span key={i}>{t}</span>
                                    ),
                                )}
                                delay={0.35}
                                stagger={0.16}
                            />
                        </h1>
                    </div>

                    {/* Bottom row */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            className="md:col-span-6"
                        >
                            <p className="body-lg body-onDark max-w-[46ch]">
                                {siteConfig.hero.subtitle}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link to="/contato" className="btn-gold" data-testid="hero-cta-primary">
                                    Fale com um advogado
                                    <span className="btn-arrow">→</span>
                                </Link>
                                <Link
                                    to="/areas-de-atuacao"
                                    className="btn-ghost btn-onDark"
                                    data-testid="hero-cta-secondary"
                                >
                                    Áreas de atuação
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.7 }}
                            className="md:col-span-6 flex flex-col md:items-end"
                        >
                            <div className="flex items-center gap-8">
                                <div>
                                    <div className="chapter-num chapter-num-onDark">15+</div>
                                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/60 mt-2">
                                        anos de experiência
                                    </div>
                                </div>
                                <div>
                                    <div className="chapter-num chapter-num-onDark">7</div>
                                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/60 mt-2">
                                        unidades PI + MA
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll cue */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-[10px] tracking-[0.3em] uppercase flex flex-col items-center gap-2"
                >
                    <span>Explore</span>
                    <motion.span
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="h-6 w-px bg-white/40"
                    />
                </motion.div>
            </section>

            {/* ========================== NOSSA HISTÓRIA ========================== */}
            <section className="bg-[color:var(--paper)] py-24 md:py-32">
                <div className="container-e grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
                    <div className="md:col-span-6">
                        <Reveal>
                            <h2 className="display-lg mt-5" style={{ maxWidth: "20ch" }}>
                                Compromisso com resultados e uma trajetória de <span className="font-editorial italic text-[color:var(--burgundy)]">confiança</span>.
                            </h2>
                        </Reveal>
                    </div>
                    <div className="md:col-span-6 md:pt-4">
                        <FadeUp>
                            <p className="body-lg">
                                Com anos de atuação e uma equipe multidisciplinar altamente qualificada, o escritório Junqueira Advogados é referência em atendimento estratégico e humanizado.
                            </p>
                            <p className="body-lg mt-5">
                                Nossa estrutura sólida nos permite atender clientes em todo o Brasil com agilidade, ética e excelência técnica.
                            </p>
                            <div className="mt-8">
                                <Link to="/escritorio" className="btn-gold" data-testid="historia-cta">
                                    Saiba mais sobre nossa história <span className="btn-arrow">→</span>
                                </Link>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* ========================== EDITORIAL MARQUEE ========================== */}
            <section className="bg-[color:var(--paper)] hairline-b py-4">
                <Marquee
                    words={[
                        "Método",
                        "Presença",
                        "Cuidado",
                        "Junqueira Advogados",
                        "Excelência",
                    ]}
                    slow
                />
            </section>

            {/* ========================== TEAM CAROUSEL ========================== */}
            <TeamCarousel />

            {/* ========================== ÁREAS ========================== */}
            <section className="bg-[color:var(--paper)] py-24 md:py-32" id="areas">
                <div className="container-e">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-14">
                        <div className="md:col-span-12">
                            <h2 className="display-xl">
                                Áreas de <span className="font-editorial italic text-[color:var(--burgundy)]">atuação</span>.
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {areas.map((a) => (
                            <Link
                                key={a.slug}
                                to={`/${a.slug}`}
                                className="editorial-card group block p-7 md:p-8 h-full"
                                data-testid={`area-card-${a.slug}`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="text-[10px] tracking-[0.28em] uppercase font-medium" style={{ color: "#4E1615" }}>
                                            {a.group}
                                        </div>
                                        <div className="display-md mt-3" style={{ color: "#1d1d1d" }}>{a.name}</div>
                                    </div>
                                    <ArrowUpRight
                                        size={20}
                                        className="text-[color:var(--burgundy)] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </div>
                                <p className="body-sm mt-6" style={{ color: "#1d1d1d" }}>{a.short}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================== UNIDADES ========================== */}
            <section className="bg-[color:var(--paper)] py-24 md:py-32">
                <div className="container-e">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 items-end">
                        <div className="md:col-span-7">
                            <h2 className="display-xl">
                                Sete <span className="font-editorial italic text-[color:var(--burgundy)]">unidades</span>.
                            </h2>
                        </div>
                        <div className="md:col-span-5 md:text-right">
                            <Link to="/unidades" className="btn-ghost" data-testid="units-cta">
                                Todas as unidades <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {units.map((u) => (
                            <div key={u.city} className="editorial-card p-6 md:p-7 h-full">
                                <div className="text-[10px] tracking-[0.28em] uppercase font-medium" style={{ color: "#4E1615" }}>
                                    {u.state}
                                </div>
                                <div className="display-md mt-3 flex items-baseline gap-3" style={{ color: "#1d1d1d" }}>
                                    {u.city}
                                    {u.head && (
                                        <span className="text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-2)] px-2 py-1 border border-[color:var(--gold)]/40 rounded-full">
                                            matriz
                                        </span>
                                    )}
                                </div>
                                <div className="mt-4 flex items-start gap-2 body-sm" style={{ color: "#1d1d1d" }}>
                                    <MapPin size={14} className="mt-1 text-[color:var(--burgundy)]" />
                                    <span>{u.address}</span>
                                </div>
                                {(u.whatsapp || u.phone) && (
                                    <div className="mt-2 flex items-center gap-2 body-sm" style={{ color: "#1d1d1d" }}>
                                        <Phone size={14} className="text-[color:var(--burgundy)]" />
                                        <span>{u.whatsapp || u.phone}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================== DEPOIMENTOS ========================== */}
            <section className="bg-[color:var(--paper-2)] py-24 md:py-32">
                <div className="container-e">
                    <h2 className="display-xl mb-14" style={{ maxWidth: "22ch" }}>
                        O que <span className="font-editorial italic text-[color:var(--burgundy)]">dizem</span> sobre a Junqueira Advogados.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {testimonials.map((t) => (
                            <div key={t.name} className="editorial-card p-6 h-full flex flex-col">
                                <div className="text-[color:var(--gold)] text-lg tracking-widest">★★★★★</div>
                                <p className="body-sm mt-4 flex-1" style={{ color: "#1d1d1d" }}>"{t.text}"</p>
                                <div className="mt-6 text-[11px] tracking-[0.24em] uppercase font-medium" style={{ color: "#4E1615" }}>
                                    {t.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================== CLOSING BURGUNDY BLOCK ========================== */}
            <section className="relative bg-[color:var(--burgundy)] text-white overflow-hidden">
                <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
                <div className="container-e relative py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                    <div className="md:col-span-8">
                        <div className="section-label section-label-onDark mb-5">— Fale com o escritório</div>
                        <h2 className="display-xl text-white">
                            Cada história merece uma <span className="font-editorial italic text-[color:var(--gold)]">análise técnica</span> — e um interlocutor humano.
                        </h2>
                    </div>
                    <div className="md:col-span-4 flex flex-col gap-4">
                        <Link to="/contato" className="btn-primary bg-white text-[color:var(--burgundy)] hover:bg-white/90" style={{ backgroundColor: "#fff", color: "var(--burgundy)" }} data-testid="closing-cta">
                            Falar com um advogado <span className="btn-arrow">→</span>
                        </Link>
                        <a
                            href={siteConfig.generalWhatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-ghost btn-onDark"
                            data-testid="closing-whatsapp"
                        >
                            WhatsApp {siteConfig.generalWhatsapp}
                        </a>
                    </div>
                </div>
            </section>
        </InstitutionalLayout>
    );
}
