import React from "react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";
import { FadeUp, LineReveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";

export default function PoliticaPrivacidade() {
    return (
        <InstitutionalLayout>
            <section className="bg-[color:var(--burgundy)] text-white pt-[130px] pb-16">
                <div className="container-e">
                    <div className="section-label section-label-onDark mb-6">— Política de Privacidade</div>
                    <h1 className="display-xl text-white">
                        <LineReveal lines={["Tratamento de dados", <><span className="font-editorial italic text-[color:var(--gold)]">com transparência</span></>]} stagger={0.14} />
                    </h1>
                </div>
            </section>

            <section className="bg-[color:var(--paper)] py-20 md:py-28">
                <div className="container-e prose max-w-3xl body-lg space-y-6">
                    <FadeUp>
                        <p>Este documento explica como o Junqueira Advogados trata dados coletados por meio deste site, em conformidade com a LGPD (Lei nº 13.709/2018).</p>
                    </FadeUp>
                    <FadeUp delay={0.05}>
                        <h2 className="display-md mt-8">1. Dados de navegação</h2>
                        <p>Podemos coletar dados de navegação (páginas visitadas, dispositivo, referência de origem) por meio de ferramentas como Google Analytics e Google Ads, para fins estatísticos e de aprimoramento das páginas.</p>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <h2 className="display-md mt-8">2. Cookies e parâmetros de mídia</h2>
                        <p>Utilizamos cookies e podemos preservar parâmetros de mídia (utm, gclid, entre outros) para atribuição de campanhas e análise de origem de acessos.</p>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <h2 className="display-md mt-8">3. Formulários externos</h2>
                        <p>Este site direciona o usuário a formulários externos hospedados pelo Flipform. Ao clicar no CTA, o usuário sai deste site e passa a interagir com a plataforma responsável pelo formulário.</p>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <h2 className="display-md mt-8">4. Contato</h2>
                        <p>Para dúvidas sobre tratamento de dados: <a className="link-reveal" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
                    </FadeUp>
                    <FadeUp delay={0.25}>
                        <h2 className="display-md mt-8">5. Direitos do titular</h2>
                        <p>Você pode solicitar acesso, correção ou eliminação de dados pessoais, nos limites previstos pela LGPD, entrando em contato com o escritório.</p>
                    </FadeUp>
                </div>
            </section>
        </InstitutionalLayout>
    );
}
