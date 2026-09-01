import React from "react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";
import { FadeUp, LineReveal } from "@/components/motion/Reveal";
import { siteConfig, units } from "@/config/site";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Contato() {
    return (
        <InstitutionalLayout>
            <section className="bg-[color:var(--burgundy)] text-white pt-[130px] pb-16">
                <div className="container-e">
                    <div className="section-label section-label-onDark mb-6">— Contato</div>
                    <h1 className="display-hero text-white">
                        <LineReveal lines={["Fale com", <><span className="font-editorial italic text-[color:var(--gold)]">quem escuta</span></>, "antes de responder."]} stagger={0.14} />
                    </h1>
                </div>
            </section>

            <section className="bg-[color:var(--paper)] py-20 md:py-28">
                <div className="container-e grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-5 space-y-5">
                        <FadeUp>
                            <a href={siteConfig.generalWhatsappLink} target="_blank" rel="noreferrer" className="editorial-card group flex items-center justify-between gap-4 p-7 w-full" data-testid="contato-whatsapp">
                                <div className="flex items-center gap-4">
                                    <MessageCircle size={22} className="text-[color:var(--burgundy)]" />
                                    <div>
                                        <div className="section-label">WhatsApp</div>
                                        <div className="display-md mt-1">{siteConfig.generalWhatsapp}</div>
                                    </div>
                                </div>
                                <span className="text-[color:var(--burgundy)] group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </FadeUp>
                        <FadeUp delay={0.05}>
                            <a href={`tel:+${siteConfig.generalPhone.replace(/\D/g, "")}`} className="editorial-card group flex items-center justify-between gap-4 p-7 w-full" data-testid="contato-phone">
                                <div className="flex items-center gap-4">
                                    <Phone size={22} className="text-[color:var(--burgundy)]" />
                                    <div>
                                        <div className="section-label">Telefone</div>
                                        <div className="display-md mt-1">{siteConfig.generalPhone}</div>
                                    </div>
                                </div>
                                <span className="text-[color:var(--burgundy)] group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <a href={`mailto:${siteConfig.email}`} className="editorial-card group flex items-center justify-between gap-4 p-7 w-full" data-testid="contato-email">
                                <div className="flex items-center gap-4">
                                    <Mail size={22} className="text-[color:var(--burgundy)]" />
                                    <div>
                                        <div className="section-label">E-mail</div>
                                        <div className="display-md mt-1 break-all">{siteConfig.email}</div>
                                    </div>
                                </div>
                                <span className="text-[color:var(--burgundy)] group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </FadeUp>
                        <p className="body-sm mt-6">
                            Horário de atendimento: {siteConfig.hours}. Todas as informações trocadas seguem sigilo profissional.
                        </p>
                    </div>

                    <div className="md:col-span-7">
                        <div className="section-label mb-6">— Unidades</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {units.map((u, i) => (
                                <FadeUp key={u.city} delay={i * 0.03}>
                                    <div className="editorial-card p-6 h-full">
                                        <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--burgundy)] font-medium">{u.state}</div>
                                        <div className="display-md mt-2">{u.city}</div>
                                        <div className="mt-3 flex items-start gap-2 body-sm">
                                            <MapPin size={14} className="mt-1 text-[color:var(--burgundy)] flex-none" />
                                            <span>{u.address}</span>
                                        </div>
                                        {(u.phone || u.whatsapp) && (
                                            <div className="mt-2 body-sm">
                                                {u.whatsapp || u.phone}
                                            </div>
                                        )}
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </InstitutionalLayout>
    );
}
