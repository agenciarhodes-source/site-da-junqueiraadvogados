import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";
import { FadeUp, Reveal, LineReveal } from "@/components/motion/Reveal";
import { areas } from "@/config/site";

export default function AreasDeAtuacao() {
    const grouped = areas.reduce((acc, a) => {
        acc[a.group] = acc[a.group] || [];
        acc[a.group].push(a);
        return acc;
    }, {});

    return (
        <InstitutionalLayout>
            <section className="bg-[color:var(--ink)] text-white pt-[130px] pb-16">
                <div className="container-e">
                    <div className="section-label section-label-onDark mb-6">— Áreas de atuação</div>
                    <h1 className="display-hero text-white">
                        <LineReveal lines={["Cada tema uma", <><span className="font-editorial italic text-[color:var(--gold)]">análise técnica</span></>, "própria."]} stagger={0.14} />
                    </h1>
                </div>
            </section>

            <section className="bg-[color:var(--paper)] py-20 md:py-28">
                <div className="container-e">
                    {Object.entries(grouped).map(([group, list], gi) => (
                        <div key={group} className={gi > 0 ? "mt-20" : ""}>
                            <div className="flex items-baseline justify-between hairline-b pb-4 mb-8">
                                <div className="section-label">— {group}</div>
                                <div className="text-[11px] tracking-widest uppercase text-[color:var(--ink)]/40">{list.length} áreas</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {list.map((a, i) => (
                                    <FadeUp key={a.slug} delay={i * 0.03}>
                                        <Link to={`/${a.slug}`} className="editorial-card group block p-7 h-full" data-testid={`areas-card-${a.slug}`}>
                                            <div className="flex items-start justify-between">
                                                <div className="display-md">{a.name}</div>
                                                <ArrowUpRight size={20} className="text-[color:var(--burgundy)] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </div>
                                            <p className="body-sm mt-5">{a.short}</p>
                                        </Link>
                                    </FadeUp>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </InstitutionalLayout>
    );
}
