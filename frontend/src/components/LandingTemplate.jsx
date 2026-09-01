import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LandingLayout from "@/components/layout/LandingLayout";
import { FadeUp, LineReveal, Reveal, ImageReveal } from "@/components/motion/Reveal";
import { fireLandingCta } from "@/lib/tracking";
import { siteConfig } from "@/config/site";
import Marquee from "@/components/Marquee";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

/**
 * Template compartilhado por todas as 11 landing pages.
 * Recebe os dados de uma landing (slug, h1, cards, content, faq...).
 */
export default function LandingTemplate({ data }) {
    const onCta = () => fireLandingCta(data.slug, data.topic);
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 700], [0, 100]);
    const heroScale = useTransform(scrollY, [0, 700], [1, 1.06]);

    return (
        <LandingLayout slug={data.slug} topic={data.topic}>
            {/* ================= HERO ================= */}
            <section className="relative min-h-[85svh] w-full overflow-hidden bg-[color:var(--burgundy)] text-white">
                <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
                    <img src={data.heroImage} alt="" className="h-full w-full object-cover opacity-25 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--burgundy)]/70 via-[color:var(--burgundy)]/85 to-[color:var(--burgundy-deep)]" />
                    <div className="absolute inset-0 grain opacity-40" />
                </motion.div>

                <div className="relative container-e min-h-[85svh] flex flex-col justify-between pt-[110px] pb-14">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-[color:var(--gold)]" />
                        <span className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--gold)] font-medium">
                            {data.eyebrow}
                        </span>
                    </motion.div>

                    <div className="mt-16 md:mt-24 max-w-[720px]">
                        <h1 className="display-lg text-white" style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)" }}>
                            <LineReveal lines={data.h1.split(":").map((s, i, arr) => (i < arr.length - 1 ? `${s}:` : s))} stagger={0.14} delay={0.25} />
                        </h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.3 }}
                        className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
                    >
                        <div className="md:col-span-7">
                            <p className="body-lg body-onDark max-w-[52ch]">{data.subtitle}</p>
                            <div className="mt-8 hidden md:flex flex-wrap items-center gap-4">
                                <button onClick={onCta} className="btn-primary" data-testid="landing-cta-hero">
                                    Fale com um advogado <span className="btn-arrow">→</span>
                                </button>
                                <a
                                    href={`tel:+${siteConfig.generalPhone.replace(/\D/g, "")}`}
                                    className="text-white/70 text-[13px] tracking-wide link-reveal"
                                >
                                    Ou ligar {siteConfig.generalPhone}
                                </a>
                            </div>
                        </div>
                        <div className="md:col-span-5 flex flex-col md:items-end gap-3">
                            {data.micro.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1.5 + i * 0.1 }}
                                    className="flex items-center gap-2 text-[12px] tracking-wide text-white/70"
                                >
                                    <CheckCircle2 size={14} className="text-[color:var(--gold)]" />
                                    {m}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= CARDS ================= */}
            <section className="bg-[color:var(--paper)] py-20">
                <div className="container-e">
                    <div className="section-label mb-3">— O que costuma ser analisado</div>
                    <Reveal>
                        <h2 className="display-lg max-w-2xl">
                            Uma leitura <span className="font-editorial italic text-[color:var(--burgundy)]">técnica</span> antes de qualquer conclusão.
                        </h2>
                    </Reveal>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {data.cards.map((c, i) => (
                            <FadeUp key={i} delay={i * 0.05}>
                                <div className="editorial-card p-6 h-full">
                                    <div className="text-[color:var(--burgundy)] font-editorial italic text-3xl leading-none">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <div className="display-md mt-3">{c.title}</div>
                                    <p className="body-sm mt-3">{c.text}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CONTENT (Editorial) ================= */}
            <section className="bg-[color:var(--paper-2)] py-20 md:py-28">
                <div className="container-e grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-4">
                        <div className="section-label mb-3">— Sobre o tema</div>
                        <Reveal>
                            <h2 className="display-lg" style={{ maxWidth: "20ch" }}>
                                Uma explicação <span className="font-editorial italic text-[color:var(--burgundy)]">clara</span>, sem promessas.
                            </h2>
                        </Reveal>
                    </div>
                    <div className="md:col-span-8 space-y-10">
                        {data.content.map((sec, i) => (
                            <FadeUp key={i} delay={i * 0.05}>
                                <div className="hairline-b pb-8">
                                    <div className="flex items-baseline gap-4">
                                        <span className="font-editorial italic text-[color:var(--burgundy)] text-2xl">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className="display-md">{sec.heading}</h3>
                                    </div>
                                    <p className="body-lg mt-4">{sec.text}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA STRIP ================= */}
            <section className="relative bg-[color:var(--burgundy)] text-white overflow-hidden">
                <div className="absolute inset-0 grain opacity-40" />
                <div className="container-e relative py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-8">
                        <div className="section-label section-label-onDark mb-3">— Conversa direta</div>
                        <h2 className="display-lg text-white">
                            Quer conversar com um advogado sobre o seu caso?
                        </h2>
                    </div>
                    <div className="md:col-span-4 md:text-right">
                        <button
                            onClick={onCta}
                            className="btn-primary bg-white text-[color:var(--burgundy)]"
                            style={{ backgroundColor: "#fff", color: "var(--burgundy)" }}
                            data-testid="landing-cta-midstrip"
                        >
                            Fale com um advogado <span className="btn-arrow">→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="bg-[color:var(--paper)] py-20 md:py-28">
                <div className="container-e grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-4">
                        <div className="section-label mb-3">— Perguntas frequentes</div>
                        <h2 className="display-lg" style={{ maxWidth: "16ch" }}>
                            Dúvidas <span className="font-editorial italic text-[color:var(--burgundy)]">comuns</span>.
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <Accordion type="single" collapsible className="w-full" data-testid="landing-faq">
                            {data.faq.map((f, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-b border-[color:var(--hairline)]">
                                    <AccordionTrigger className="text-left py-6 hover:no-underline">
                                        <span className="display-md">{f.q}</span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="body-lg pb-4 max-w-2xl">{f.a}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* ================= Marquee ================= */}
            <section className="bg-[color:var(--paper)] hairline-b">
                <Marquee words={["Método", "Cuidado", "Junqueira Advogados", "Piauí + Maranhão"]} slow />
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative bg-[color:var(--burgundy-deep)] text-white overflow-hidden">
                <div className="absolute inset-0 grain opacity-40" />
                <div className="container-e relative py-24 md:py-32 text-center">
                    <div className="section-label section-label-onDark mb-6 inline-block">— {data.topic}</div>
                    <h2 className="display-xl text-white mx-auto" style={{ maxWidth: "22ch" }}>
                        Uma análise técnica <span className="font-editorial italic text-[color:var(--gold)]">humana</span> começa com uma conversa.
                    </h2>
                    <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
                        <button onClick={onCta} className="btn-primary" data-testid="landing-cta-final">
                            Fale com um advogado <span className="btn-arrow">→</span>
                        </button>
                        <a
                            href={`tel:+${siteConfig.generalPhone.replace(/\D/g, "")}`}
                            className="btn-ghost btn-onDark"
                        >
                            Ou ligar {siteConfig.generalPhone}
                        </a>
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
