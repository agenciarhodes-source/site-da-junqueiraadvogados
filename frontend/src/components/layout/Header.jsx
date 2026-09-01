import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const nav = [
    { to: "/", label: "Home" },
    { to: "/escritorio", label: "O Escritório" },
    { to: "/areas-de-atuacao", label: "Áreas" },
    { to: "/equipe", label: "Equipe" },
    { to: "/unidades", label: "Unidades" },
    { to: "/contato", label: "Contato" },
];

export default function Header({ variant = "light" }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const loc = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [loc.pathname]);

    const onDark = variant === "dark";
    const barBg = scrolled
        ? "bg-[rgba(128,64,64,0.94)] backdrop-blur-xl border-b border-white/10"
        : "bg-transparent";
    const linkColor = "text-white/90";

    return (
        <>
            <motion.header
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${barBg}`}
                data-testid="site-header"
            >
                <div className="container-e flex items-center justify-between h-[72px]">
                    <Link to="/" className="flex items-center gap-3" data-testid="site-logo-link">
                        <img
                            src={`${process.env.PUBLIC_URL || ""}/brand/logo-mark.png`}
                            alt="Junqueira Advogados"
                            className="h-10 w-10 object-contain rounded-md"
                        />
                        <div className="hidden sm:flex flex-col leading-none">
                            <span className="text-white text-[18px] font-medium tracking-[-0.01em]">
                                Junqueira
                            </span>
                            <span className="text-[9px] text-white/70 tracking-[0.42em] uppercase font-medium mt-1">
                                Advogados
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8">
                        {nav.map((n) => (
                            <NavLink
                                key={n.to}
                                to={n.to}
                                end={n.to === "/"}
                                className={({ isActive }) =>
                                    `link-reveal text-[13px] tracking-wide font-medium ${linkColor} hover:text-white transition-colors ${isActive ? "!text-[color:var(--gold)]" : ""}`
                                }
                                data-testid={`nav-${n.to.replace(/\//g, "") || "home"}`}
                            >
                                {n.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="tel:+558640096145"
                            className="text-[13px] text-white/80 hover:text-white link-reveal font-medium tracking-wide"
                            data-testid="header-phone"
                        >
                            (86) 4009-6145
                        </a>
                    </div>

                    <button
                        aria-label="Abrir menu"
                        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white"
                        onClick={() => setOpen(true)}
                        data-testid="mobile-menu-open"
                    >
                        <Menu size={18} />
                    </button>
                </div>
            </motion.header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="fixed inset-0 z-[70] bg-[color:var(--burgundy-deep)]"
                        data-testid="mobile-menu"
                    >
                        <div className="container-e h-[72px] flex items-center justify-between">
                            <Link to="/" className="flex items-center gap-3">
                                <img
                                    src={`${process.env.PUBLIC_URL || ""}/brand/logo-mark.png`}
                                    alt="Junqueira"
                                    className="h-8 w-8"
                                />
                                <span className="font-editorial italic text-white text-lg">Junqueira Advogados</span>
                            </Link>
                            <button
                                aria-label="Fechar menu"
                                className="h-10 w-10 rounded-full border border-white/25 text-white flex items-center justify-center"
                                onClick={() => setOpen(false)}
                                data-testid="mobile-menu-close"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <div className="container-e mt-10">
                            <ul className="flex flex-col gap-2">
                                {nav.map((n, i) => (
                                    <motion.li
                                        key={n.to}
                                        initial={{ y: 22, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.1 + i * 0.06,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        <Link
                                            to={n.to}
                                            className="block py-4 text-white text-3xl font-editorial italic hairline-dark"
                                            data-testid={`mobile-nav-${n.to.replace(/\//g, "") || "home"}`}
                                        >
                                            {n.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="mt-10 flex flex-col gap-3">
                                <a
                                    href="https://wa.me/558699926593"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary w-fit"
                                    data-testid="mobile-whatsapp"
                                >
                                    Falar no WhatsApp
                                    <span className="btn-arrow">→</span>
                                </a>
                                <a
                                    href="tel:+558640096145"
                                    className="text-white/75 text-sm tracking-wide"
                                    data-testid="mobile-phone"
                                >
                                    (86) 4009-6145
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
