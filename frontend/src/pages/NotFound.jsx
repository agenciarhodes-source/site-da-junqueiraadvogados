import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[color:var(--burgundy)] text-white flex items-center relative overflow-hidden">
            <div className="absolute inset-0 grain opacity-40" />
            <div className="container-e relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="section-label section-label-onDark mb-6">— Erro 404</div>
                    <h1 className="display-hero text-white mb-8">
                        Página não <span className="font-editorial italic text-[color:var(--gold)]">encontrada</span>.
                    </h1>
                    <p className="body-lg body-onDark max-w-lg mb-10">
                        A página que você buscou não existe ou foi movida. Vamos voltar ao início.
                    </p>
                    <Link to="/" className="btn-primary" data-testid="notfound-home">
                        Voltar para a Home <span className="btn-arrow">→</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
