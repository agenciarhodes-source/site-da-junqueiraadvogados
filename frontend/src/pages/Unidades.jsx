import React from "react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";
import { FadeUp, LineReveal } from "@/components/motion/Reveal";
import { units } from "@/config/site";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Unidades() {
    return (
        <InstitutionalLayout>
            <section className="bg-[color:var(--ink)] text-white pt-[130px] pb-16">
                <div className="container-e">
                    <div className="section-label section-label-onDark mb-6">— Unidades</div>
                    <h1 className="display-hero text-white">
                        <LineReveal lines={["Sete cidades. Uma", <><span className="font-editorial italic text-[color:var(--gold)]">rotina</span></>, "de proximidade."]} stagger={0.14} />
                    </h1>
                </div>
            </section>

            <section className="bg-[color:var(--paper)] py-20 md:py-28">
                <div className="container-e space-y-6">
                    {units.map((u, i) => (
                        <FadeUp key={u.city} delay={i * 0.03}>
                            <div className="editorial-card overflow-hidden grid grid-cols-1 md:grid-cols-12">
                                <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between">
                                    <div>
                                        <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--burgundy)] font-medium">{u.state}</div>
                                        <div className="display-lg mt-3 flex items-baseline gap-3">
                                            {u.city}
                                            {u.head && (
                                                <span className="text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-2)] px-2 py-1 border border-[color:var(--gold)]/40 rounded-full">matriz</span>
                                            )}
                                        </div>
                                        <div className="mt-6 flex items-start gap-3 body-md">
                                            <MapPin size={16} className="mt-1 text-[color:var(--burgundy)] flex-none" />
                                            <span>{u.address}</span>
                                        </div>
                                        {u.phone && (
                                            <div className="mt-3 flex items-center gap-3 body-md">
                                                <Phone size={16} className="text-[color:var(--burgundy)] flex-none" />
                                                <a href={`tel:+${u.phone.replace(/\D/g, "")}`} className="link-reveal">{u.phone}</a>
                                            </div>
                                        )}
                                        {u.whatsapp && (
                                            <div className="mt-3 flex items-center gap-3 body-md">
                                                <MessageCircle size={16} className="text-[color:var(--burgundy)] flex-none" />
                                                <a href={u.whatsappLink} target="_blank" rel="noreferrer" className="link-reveal">{u.whatsapp}</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="md:col-span-7 min-h-[280px] md:min-h-[380px]">
                                    <iframe
                                        title={`Mapa ${u.city}`}
                                        src={u.mapEmbed}
                                        loading="lazy"
                                        className="h-full w-full min-h-[280px] md:min-h-[380px]"
                                        style={{ border: 0, filter: "grayscale(0.4) contrast(0.95)" }}
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>
        </InstitutionalLayout>
    );
}
