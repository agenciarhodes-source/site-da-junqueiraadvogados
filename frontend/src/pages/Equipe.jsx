import React from "react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";
import { FadeUp, LineReveal, ImageReveal } from "@/components/motion/Reveal";
import { team } from "@/config/site";

export default function Equipe() {
    return (
        <InstitutionalLayout>
            <section className="bg-[color:var(--ink)] text-white pt-[130px] pb-16">
                <div className="container-e">
                    <div className="section-label section-label-onDark mb-6">— Equipe</div>
                    <h1 className="display-hero text-white">
                        <LineReveal lines={["Advogados que", <><span className="font-editorial italic text-[color:var(--gold)]">assinam</span></>, "cada análise."]} stagger={0.14} />
                    </h1>
                </div>
            </section>

            <section className="bg-[color:var(--paper)] py-20 md:py-28">
                <div className="container-e grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((p, i) => (
                        <FadeUp key={p.name} delay={i * 0.08}>
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
            </section>
        </InstitutionalLayout>
    );
}
