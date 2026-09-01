import React from "react";
import { Link } from "react-router-dom";
import { siteConfig, units, areas } from "@/config/site";

export default function Footer() {
    return (
        <footer
            className="relative bg-[color:var(--burgundy-deep)] text-white/85"
            data-testid="site-footer"
        >
            <div className="container-e pt-24 pb-14 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5">
                    <div className="flex items-center gap-4">
                        <img
                            src={`${process.env.PUBLIC_URL || ""}/brand/logo-mark.png`}
                            alt="Junqueira Advogados"
                            className="h-14 w-14 rounded-lg"
                        />
                        <div>
                            <div className="text-white text-2xl font-medium tracking-[-0.01em] leading-none">
                                Junqueira
                            </div>
                            <div className="text-[10px] tracking-[0.42em] uppercase text-white/60 mt-2 font-medium">
                                Advogados
                            </div>
                        </div>
                    </div>
                    <p className="body-md body-onDark mt-6 max-w-md">
                        Escritório de advocacia com origem em Luzilândia (PI), presença consolidada no Piauí e Maranhão. Atendimento presencial e digital com método e transparência.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href={siteConfig.generalWhatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-ghost btn-onDark"
                            data-testid="footer-whatsapp"
                        >
                            WhatsApp {siteConfig.generalWhatsapp}
                        </a>
                        <a
                            href="tel:+558640096145"
                            className="btn-ghost btn-onDark"
                            data-testid="footer-phone"
                        >
                            {siteConfig.generalPhone}
                        </a>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="section-label section-label-onDark mb-5">Institucional</div>
                    <ul className="flex flex-col gap-3 text-white/75">
                        <li><Link className="link-reveal" to="/">Home</Link></li>
                        <li><Link className="link-reveal" to="/escritorio">O Escritório</Link></li>
                        <li><Link className="link-reveal" to="/areas-de-atuacao">Áreas de Atuação</Link></li>
                        <li><Link className="link-reveal" to="/equipe">Equipe</Link></li>
                        <li><Link className="link-reveal" to="/unidades">Unidades</Link></li>
                        <li><Link className="link-reveal" to="/contato">Contato</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <div className="section-label section-label-onDark mb-5">Áreas</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-white/75">
                        {areas.slice(0, 8).map((a) => (
                            <li key={a.slug}>
                                <Link className="link-reveal" to={`/${a.slug}`}>{a.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="hairline-dark">
                <div className="container-e py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/50">
                    <div>
                        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link to="/politica-de-privacidade" className="link-reveal">Política de Privacidade</Link>
                        <Link to="/termos-de-uso" className="link-reveal">Termos de Uso</Link>
                        <span>Matriz — {units[0].address}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
