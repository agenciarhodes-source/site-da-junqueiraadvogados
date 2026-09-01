import React from "react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";
import { Reveal, FadeUp, LineReveal, ImageReveal } from "@/components/motion/Reveal";
import Chapter from "@/components/Chapter";
import Marquee from "@/components/Marquee";
import { team, units } from "@/config/site";
import { Link } from "react-router-dom";

const BG = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80";

export default function Escritorio() {
    return (
        <InstitutionalLayout>
            {/* Hero */}
            <section className="relative bg-[color:var(--burgundy)] text-white pt-[130px] pb-24 md:pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={BG} alt="" className="h-full w-full object-cover opacity-20 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--burgundy)]/70 via-[color:var(--burgundy)]/85 to-[color:var(--burgundy-deep)]" />
                    <div className="absolute inset-0 grain opacity-40" />
                </div>
                <div className="container-e relative">
                    <div className="section-label section-label-onDark mb-6">— O Escritório</div>
                    <h1 className="display-hero text-white">
                        <LineReveal
                            lines={[
                                "Experiência,",
                                <><span className="font-editorial italic text-[color:var(--gold)]">propósito</span></>,
                                "e estratégia jurídica.",
                            ]}
                            delay={0.15}
                            stagger={0.14}
                        />
                    </h1>
                </div>
            </section>

            {/* Body */}
            <section className="bg-[color:var(--paper)] py-24 md:py-28">
                <div className="container-e grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <ImageReveal className="aspect-[4/5] spotlight-frame">
                            <img
                                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                                alt="Equipe do escritório"
                                className="h-full w-full object-cover"
                            />
                        </ImageReveal>
                    </div>
                    <div className="md:col-span-7 md:pt-8">
                        <div className="section-label mb-4">— História</div>
                        <Reveal>
                            <h2 className="display-lg" style={{ maxWidth: "24ch" }}>
                                De <span className="font-editorial italic text-[color:var(--burgundy)]">Luzilândia</span> para as principais praças do Piauí e Maranhão.
                            </h2>
                        </Reveal>
                        <FadeUp>
                            <p className="body-lg mt-6" style={{ maxWidth: "58ch" }}>
                                O Junqueira Advogados nasce de uma trajetória construída no interior, aos poucos ampliada para novas cidades. A atuação ganhou densidade técnica sem perder a proximidade que caracteriza a origem.
                            </p>
                            <p className="body-lg mt-4" style={{ maxWidth: "58ch" }}>
                                Reunimos profissionais com olhares complementares e um ponto em comum: cuidar de cada caso com responsabilidade profissional, escuta atenta e método aplicado a cada análise.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Missão / Visão / Valores */}
            <section className="bg-[color:var(--burgundy-deep)] text-white py-24 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 grain opacity-30" />
                <div className="container-e relative">
                    <div className="section-label section-label-onDark mb-4">— Missão, Visão, Valores</div>
                    <h2 className="display-xl text-white mb-16">
                        Uma <span className="font-editorial italic text-[color:var(--gold)]">conduta</span> escrita em cada relação.
                    </h2>
                    <div className="grid grid-cols-1 md:gap-16">
                        <FadeUp>
                            <Chapter num="01" title="Missão" onDark>
                                Oferecer atendimento jurídico à altura das histórias de nossos clientes, com método, escuta e responsabilidade profissional.
                            </Chapter>
                        </FadeUp>
                        <div className="h-16" />
                        <FadeUp delay={0.05}>
                            <Chapter num="02" title="Visão" onDark>
                                Ser referência no Piauí e Maranhão pela qualidade da comunicação com o cliente, pela análise técnica e pela postura profissional.
                            </Chapter>
                        </FadeUp>
                        <div className="h-16" />
                        <FadeUp delay={0.1}>
                            <Chapter num="03" title="Valores" onDark>
                                Transparência, cuidado, presença regional e clareza da linguagem. Uma comunicação sem promessas e um trabalho conduzido com respeito ao cliente e à profissão.
                            </Chapter>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <section className="bg-[color:var(--paper)] hairline-b">
                <Marquee words={["Método", "Presença", "Transparência", "Cuidado", "Piauí + Maranhão"]} />
            </section>

            {/* Equipe resumida */}
            <section className="bg-[color:var(--paper)] py-24 md:py-28">
                <div className="container-e">
                    <div className="section-label mb-4">— Sócios</div>
                    <h2 className="display-xl mb-14" style={{ maxWidth: "22ch" }}>
                        Advogados que <span className="font-editorial italic text-[color:var(--burgundy)]">assinam</span> cada análise.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {team.map((p, i) => (
                            <FadeUp key={p.name} delay={i * 0.06}>
                                <div>
                                    <ImageReveal className="aspect-[4/5] spotlight-frame">
                                        <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                                    </ImageReveal>
                                    <div className="mt-5">
                                        <div className="display-md">{p.name}</div>
                                        <div className="text-[11px] tracking-[0.24em] uppercase text-[color:var(--burgundy)] mt-1">{p.role}</div>
                                        <div className="text-[13px] text-[color:var(--ink)]/60 mt-2">{p.oab}</div>
                                        <p className="body-sm mt-3">{p.bio}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link to="/unidades" className="btn-ghost">Ver todas as unidades →</Link>
                    </div>
                </div>
            </section>
        </InstitutionalLayout>
    );
}
