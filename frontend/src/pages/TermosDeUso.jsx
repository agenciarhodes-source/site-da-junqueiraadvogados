import React from "react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";
import { FadeUp, LineReveal } from "@/components/motion/Reveal";

export default function TermosDeUso() {
    return (
        <InstitutionalLayout>
            <section className="bg-[color:var(--burgundy)] text-white pt-[130px] pb-16">
                <div className="container-e">
                    <div className="section-label section-label-onDark mb-6">— Termos de Uso</div>
                    <h1 className="display-xl text-white">
                        <LineReveal lines={["Condições de uso", <><span className="font-editorial italic text-[color:var(--gold)]">deste site</span></>]} stagger={0.14} />
                    </h1>
                </div>
            </section>

            <section className="bg-[color:var(--paper)] py-20 md:py-28">
                <div className="container-e prose max-w-3xl body-lg space-y-6">
                    <FadeUp>
                        <p>O conteúdo deste site tem caráter meramente informativo. Nada aqui publicado deve ser interpretado como promessa de resultado ou substituto de análise jurídica individual.</p>
                    </FadeUp>
                    <FadeUp delay={0.05}>
                        <h2 className="display-md mt-8">1. Caráter informativo</h2>
                        <p>Textos, artigos e materiais visam contribuir para o esclarecimento geral. Situações individuais precisam de análise técnica específica.</p>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <h2 className="display-md mt-8">2. Uso responsável</h2>
                        <p>Ao navegar, o usuário se compromete a utilizar o conteúdo de forma responsável, sem reproduções não autorizadas ou usos comerciais.</p>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <h2 className="display-md mt-8">3. Links externos</h2>
                        <p>Este site pode conter links externos, incluindo formulários mantidos pela Flipform. O escritório não se responsabiliza por conteúdos ou práticas de páginas de terceiros.</p>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <h2 className="display-md mt-8">4. Propriedade intelectual</h2>
                        <p>Logotipo, textos e imagens deste site pertencem ao Junqueira Advogados, salvo quando indicada fonte diversa.</p>
                    </FadeUp>
                    <FadeUp delay={0.25}>
                        <h2 className="display-md mt-8">5. Alterações</h2>
                        <p>O escritório poderá atualizar estes termos a qualquer tempo, publicando a versão vigente nesta página.</p>
                    </FadeUp>
                </div>
            </section>
        </InstitutionalLayout>
    );
}
