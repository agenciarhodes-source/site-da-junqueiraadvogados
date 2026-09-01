import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/lib/useSmoothScroll";
import { fireLandingCta, fireLandingView } from "@/lib/tracking";
import { siteConfig } from "@/config/site";

/**
 * Layout minimalista para landing pages (Google Ads).
 * Navegação reduzida; sticky CTA no mobile.
 */
export default function LandingLayout({ slug, topic, children }) {
    useSmoothScroll();

    useEffect(() => {
        window.scrollTo(0, 0);
        fireLandingView(slug, topic);
    }, [slug, topic]);

    const onCta = () => fireLandingCta(slug, topic);

    return (
        <div className="relative bg-[color:var(--paper)] has-sticky-cta">
            <header className="fixed inset-x-0 top-0 z-50 bg-[color:var(--burgundy)]/95 backdrop-blur-xl border-b border-white/10">
                <div className="container-e h-[64px] flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3" data-testid="landing-logo-link">
                        <img
                            src={`${process.env.PUBLIC_URL || ""}/brand/logo-mark.png`}
                            alt="Junqueira Advogados"
                            className="h-9 w-9 rounded-md"
                        />
                        <div className="hidden sm:flex flex-col leading-none">
                            <span className="text-white text-[16px] font-medium tracking-[-0.01em]">Junqueira</span>
                            <span className="text-[9px] tracking-[0.42em] uppercase text-white/70 mt-1 font-medium">Advogados</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href={`tel:+${siteConfig.generalPhone.replace(/\D/g, "")}`}
                            className="text-[13px] text-white/80 hover:text-white link-reveal"
                            data-testid="landing-phone"
                        >
                            {siteConfig.generalPhone}
                        </a>
                        <button onClick={onCta} className="btn-primary" data-testid="landing-cta-header">
                            Fale com um advogado <span className="btn-arrow">→</span>
                        </button>
                    </div>
                    <button
                        onClick={onCta}
                        className="md:hidden btn-primary !py-2.5 !px-4 !text-[11px]"
                        data-testid="landing-cta-header-mobile"
                    >
                        Fale com um advogado
                    </button>
                </div>
            </header>

            <main>{children}</main>

            {/* Sticky mobile CTA */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden fixed inset-x-0 bottom-0 z-40 p-3 bg-gradient-to-t from-[color:var(--paper)] via-[color:var(--paper)]/95 to-transparent"
            >
                <button
                    onClick={onCta}
                    className="btn-primary w-full !py-4 shadow-2xl"
                    data-testid="landing-cta-sticky"
                >
                    Fale com um advogado <span className="btn-arrow">→</span>
                </button>
            </motion.div>

            {/* Slim footer */}
            <footer className="bg-[color:var(--burgundy-deep)] text-white/60 text-xs">
                <div className="container-e py-8 flex flex-col md:flex-row justify-between gap-3">
                    <div>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</div>
                    <div className="flex gap-6">
                        <Link to="/politica-de-privacidade" className="link-reveal">Política de Privacidade</Link>
                        <Link to="/termos-de-uso" className="link-reveal">Termos de Uso</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
