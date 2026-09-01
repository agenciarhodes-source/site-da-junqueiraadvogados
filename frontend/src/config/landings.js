// Dados de todas as 11 landing pages independentes para Google Ads.
// Cada landing é auto-suficiente: URL, H1, subtítulo, cards, conteúdo e FAQ.

export const FLIPFORM_BASE = "https://leads.atendimentojunqueiraadv.com.br";

// Parâmetros preservados no clique do CTA para chegarem ao Flipform.
export const TRACKED_PARAMS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "gbraid",
    "wbraid",
    "campaignid",
    "adgroupid",
    "creative",
    "device",
];

export const landings = {
    "pensao-por-morte": {
        slug: "pensao-por-morte",
        topic: "Pensão por Morte",
        eyebrow: "Previdenciário",
        h1: "Pensão por morte: entenda quem pode ser considerado dependente",
        subtitle:
            "Uma análise técnica sobre dependência, qualidade de segurado e documentação necessária, sem promessas e com responsabilidade profissional.",
        heroImage:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
        micro: ["Atendimento presencial e digital", "Análise técnica de cada caso", "Piauí e Maranhão"],
        cards: [
            { title: "Dependência", text: "Categorias previstas em lei e critérios de comprovação." },
            { title: "Qualidade de segurado", text: "Situação previdenciária no momento do fato." },
            { title: "Documentação", text: "Documentos que compõem a análise inicial." },
            { title: "Pedido e análise", text: "Fluxo de solicitação e etapas administrativas." },
        ],
        content: [
            {
                heading: "O que é pensão por morte",
                text: "É um benefício previdenciário destinado aos dependentes previstos em lei, quando o segurado falece. A análise considera diferentes elementos: quem são os dependentes, a situação previdenciária do segurado no momento do fato e os documentos que comprovam o vínculo.",
            },
            {
                heading: "Categorias de dependentes",
                text: "A legislação organiza os dependentes em categorias. Cada uma exige documentação específica e critérios próprios de comprovação. Um cônjuge, um filho e um pai, por exemplo, seguem parâmetros diferentes de análise.",
            },
            {
                heading: "Documentação",
                text: "Certidões, comprovantes, registros e outros documentos ajudam a demonstrar a relação de dependência e o vínculo previdenciário. A organização documental costuma facilitar a análise administrativa.",
            },
        ],
        faq: [
            { q: "Quem pode ser considerado dependente?", a: "A legislação prevê categorias diferentes. Cônjuges, filhos e outras hipóteses seguem critérios próprios que precisam ser verificados em cada caso." },
            { q: "Preciso comprovar dependência econômica?", a: "Em algumas categorias sim, em outras existe presunção. A análise depende de qual categoria é aplicável." },
            { q: "É importante ter documentos organizados?", a: "Sim. Documentação organizada ajuda a apresentar o pedido com mais clareza e agiliza a análise administrativa." },
        ],
    },
    aposentadoria: {
        slug: "aposentadoria",
        topic: "Aposentadoria",
        eyebrow: "Previdenciário",
        h1: "Aposentadoria pelo INSS: o que vale conferir antes do pedido",
        subtitle:
            "Histórico contributivo, CNIS, períodos de atividade e regras aplicáveis. Uma leitura técnica antes de encaminhar o pedido.",
        heroImage:
            "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1600&q=80",
        micro: ["Análise antes do pedido", "Método e transparência", "Atendimento humano"],
        cards: [
            { title: "Histórico contributivo", text: "Consolidar tempo e vínculos existentes." },
            { title: "CNIS", text: "Ler o extrato do INSS com atenção técnica." },
            { title: "Regras aplicáveis", text: "Verificar os requisitos possíveis para o caso." },
            { title: "Documentação", text: "Documentos que dão suporte à análise." },
        ],
        content: [
            {
                heading: "Antes do pedido, uma leitura cuidadosa",
                text: "Encaminhar um pedido de aposentadoria sem uma leitura prévia dos dados costuma trazer surpresas. Uma análise anterior permite entender quais regras podem ser aplicáveis e quais elementos precisam ser confirmados.",
            },
            {
                heading: "O papel do CNIS",
                text: "O CNIS reúne vínculos e contribuições registradas no INSS. Divergências, ausências e informações incompletas costumam aparecer ali. Ajustar o extrato antes do requerimento normalmente é mais eficiente do que corrigi-lo depois.",
            },
            {
                heading: "Regras aplicáveis",
                text: "Existem regras diferentes de aposentadoria previstas no ordenamento previdenciário. A análise técnica ajuda a identificar quais podem se aplicar considerando o histórico do segurado.",
            },
        ],
        faq: [
            { q: "Preciso ir ao INSS para tentar entender minha situação?", a: "Uma leitura técnica pode ser feita antes, com base no CNIS e nos documentos do segurado." },
            { q: "Meu pedido pode ser indeferido?", a: "Sim, existem situações administrativas em que o pedido não é reconhecido. A análise prévia ajuda a organizar melhor o requerimento." },
            { q: "Vale a pena reunir documentos?", a: "Sim, documentação organizada costuma ajudar a esclarecer pontos importantes durante a análise." },
        ],
    },
    cnis: {
        slug: "cnis",
        topic: "CNIS",
        eyebrow: "Previdenciário",
        h1: "Encontrou uma divergência no CNIS? Entenda o que precisa ser conferido",
        subtitle:
            "Vínculos, contribuições e informações em duplicidade podem influenciar futuros pedidos. Uma leitura cuidadosa pode antecipar ajustes.",
        heroImage:
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80",
        micro: ["Leitura técnica do extrato", "Organização documental", "Sem promessas"],
        cards: [
            { title: "O que é o CNIS", text: "Cadastro que consolida vínculos e contribuições." },
            { title: "Vínculos", text: "Períodos de trabalho e recolhimentos previstos." },
            { title: "Divergências", text: "Informações inconsistentes ou incompletas." },
            { title: "Documentação", text: "Documentos que ajudam a confirmar registros." },
        ],
        content: [
            {
                heading: "Por que o CNIS é importante",
                text: "O CNIS costuma servir como base para muitos pedidos administrativos. Um extrato incompleto ou inconsistente pode gerar dificuldades no futuro, especialmente em análises de aposentadoria e outros benefícios.",
            },
            {
                heading: "Divergências mais frequentes",
                text: "Vínculos ausentes, contribuições em duplicidade e informações desatualizadas estão entre os pontos mais comuns. Cada divergência exige uma análise específica sobre como pode ser tratada.",
            },
            {
                heading: "Organização documental",
                text: "Carteira de trabalho, contracheques, contratos e comprovantes ajudam a reforçar a comprovação de períodos e podem ser úteis quando existem ajustes a serem feitos.",
            },
        ],
        faq: [
            { q: "Divergência no CNIS é um problema imediato?", a: "Nem sempre. Mas é útil identificar cedo, para evitar surpresas em pedidos futuros." },
            { q: "É possível corrigir vínculos?", a: "Existem caminhos administrativos e judiciais. A escolha depende do que precisa ser ajustado." },
            { q: "Documentos antigos ajudam?", a: "Sim. Documentos antigos frequentemente têm valor probatório importante." },
        ],
    },
    "planejamento-previdenciario": {
        slug: "planejamento-previdenciario",
        topic: "Planejamento Previdenciário",
        eyebrow: "Previdenciário",
        h1: "Planejamento previdenciário: a análise começa antes do pedido",
        subtitle:
            "Um estudo cuidadoso do histórico contributivo e das regras aplicáveis, com foco em decisões conscientes.",
        heroImage:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
        micro: ["Estudo prévio", "Análise técnica", "Decisões informadas"],
        cards: [
            { title: "Por que planejar", text: "Antecipar decisões com base em dados." },
            { title: "CNIS", text: "Leitura completa do extrato previdenciário." },
            { title: "Histórico", text: "Períodos, contribuições e possíveis complementações." },
            { title: "Documentação", text: "Organização documental como base." },
        ],
        content: [
            {
                heading: "O que é planejamento previdenciário",
                text: "É o estudo do histórico do segurado e das regras aplicáveis antes da decisão de solicitar um benefício. Permite entender quais caminhos existem e quais elementos precisam ser confirmados.",
            },
            {
                heading: "Como o estudo é conduzido",
                text: "Envolve leitura técnica do CNIS, análise de documentação disponível, verificação de vínculos e contribuições, além de comparação entre possíveis cenários.",
            },
        ],
        faq: [
            { q: "Preciso estar próximo da aposentadoria?", a: "O planejamento pode ser conduzido em diferentes momentos da vida contributiva." },
            { q: "É possível ajustar informações antes do pedido?", a: "Sim, especialmente quando existem inconsistências no CNIS que podem ser tratadas." },
        ],
    },
    "auxilio-acidente": {
        slug: "auxilio-acidente",
        topic: "Auxílio-Acidente",
        eyebrow: "Previdenciário",
        h1: "Auxílio-acidente: entenda quais aspectos fazem parte da análise",
        subtitle:
            "Acidente, sequela funcional, atividade habitual e documentação. Cada elemento compõe a avaliação.",
        heroImage:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
        micro: ["Sem promessa de resultado", "Análise técnica", "Cuidado profissional"],
        cards: [
            { title: "Acidente", text: "Evento e circunstâncias envolvidas." },
            { title: "Sequela funcional", text: "Redução da capacidade para a atividade." },
            { title: "Atividade habitual", text: "Como o quadro impacta o dia a dia." },
            { title: "Documentos", text: "Laudos, exames e registros médicos." },
        ],
        content: [
            {
                heading: "O que costuma ser observado",
                text: "A análise considera o acidente, a existência de sequela funcional e como essa sequela afeta a atividade habitual do segurado. Documentos médicos e registros clínicos fazem parte do estudo.",
            },
            {
                heading: "A importância dos documentos",
                text: "Laudos, exames e histórico médico ajudam a compor a análise. Manter registros organizados torna a leitura profissional mais completa.",
            },
        ],
        faq: [
            { q: "Todo acidente gera direito ao benefício?", a: "Não. Existem critérios específicos previstos em lei que precisam ser avaliados caso a caso." },
            { q: "Preciso levar documentos?", a: "Sim, documentação médica e trabalhista costuma ser essencial para a análise." },
        ],
    },
    "emprestimo-nao-reconhecido": {
        slug: "emprestimo-nao-reconhecido",
        topic: "Empréstimo Não Reconhecido",
        eyebrow: "Direito do Consumidor",
        h1: "Empréstimo não reconhecido: saiba quais informações conferir",
        subtitle:
            "Antes de qualquer conclusão, é necessário identificar a operação, checar registros, protocolos e o status atual.",
        heroImage:
            "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80",
        micro: ["Análise responsável", "Sem sensacionalismo", "Método profissional"],
        cards: [
            { title: "Identificação da operação", text: "Data, instituição, valor e canal envolvido." },
            { title: "Extratos e registros", text: "Documentos que ajudam a compor o cenário." },
            { title: "Protocolos", text: "Registros de atendimento realizados." },
            { title: "Situação atual", text: "Descontos, cobranças e comunicações." },
        ],
        content: [
            {
                heading: "Uma abordagem cautelosa",
                text: "Operações não reconhecidas exigem análise cautelosa. É importante identificar a operação, entender o histórico e reunir registros antes de qualquer conclusão.",
            },
            {
                heading: "Documentos e comunicações",
                text: "Extratos, protocolos, contratos e mensagens ajudam a esclarecer o cenário. Manter comunicações organizadas costuma facilitar a análise profissional.",
            },
        ],
        faq: [
            { q: "É possível contestar operações?", a: "Existem caminhos para contestação. A análise depende dos elementos apresentados em cada caso." },
            { q: "Devo registrar protocolos?", a: "Sim, registros de atendimento são importantes para compor a análise." },
        ],
    },
    "direito-aereo": {
        slug: "direito-aereo",
        topic: "Direito Aéreo",
        eyebrow: "Direito do Consumidor",
        h1: "Direito aéreo: cancelamento de voo e problemas com bagagem",
        subtitle:
            "Cancelamento, atraso, conexão perdida ou extravio de bagagem. Uma análise técnica considerando cada elemento da viagem.",
        heroImage:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
        micro: ["Voo, atraso e bagagem", "Análise dos registros", "Atendimento em todo o Brasil"],
        cards: [
            { title: "Detalhes do voo", text: "Datas, trechos, cia. aérea e status." },
            { title: "Comunicação da companhia", text: "Comprovantes e mensagens recebidas." },
            { title: "Etiqueta de bagagem", text: "Documentação do despacho de bagagem." },
            { title: "Protocolos", text: "Registros junto à companhia e órgãos." },
        ],
        content: [
            {
                heading: "O que costuma ser analisado",
                text: "Uma leitura cuidadosa considera detalhes do voo, comunicação recebida da companhia aérea, protocolos e documentos referentes à bagagem, quando for o caso.",
            },
            {
                heading: "Bagagem: cuidados iniciais",
                text: "A etiqueta de bagagem, o registro formal junto à companhia e a lista de itens são elementos importantes para compor a análise.",
            },
        ],
        faq: [
            { q: "Cancelamento sempre gera indenização?", a: "Não é automático. A análise leva em conta circunstâncias e provas de cada situação." },
            { q: "Extravio parcial também é analisado?", a: "Sim, casos de extravio parcial também podem ser objeto de análise." },
        ],
    },
    "bpc-loas": {
        slug: "bpc-loas",
        topic: "BPC / LOAS",
        eyebrow: "Assistencial",
        h1: "BPC/LOAS: entenda quais critérios fazem parte da análise",
        subtitle:
            "O benefício assistencial possui critérios objetivos que precisam ser avaliados antes de qualquer conclusão sobre o caso.",
        heroImage:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
        micro: ["Análise técnica", "Sem promessas", "Atendimento humano"],
        cards: [
            { title: "O que é o BPC", text: "Benefício previsto na Lei Orgânica da Assistência Social." },
            { title: "Critérios", text: "Aspectos analisados pela administração." },
            { title: "Documentação", text: "Cadastro atualizado e documentos exigidos." },
            { title: "Indeferimento", text: "Situações em que o pedido não é reconhecido." },
        ],
        content: [
            {
                heading: "Critérios envolvidos",
                text: "A análise considera critérios objetivos definidos em lei, incluindo aspectos cadastrais, familiares e outros elementos previstos na legislação assistencial.",
            },
            {
                heading: "Documentação",
                text: "Cadastro atualizado, documentos pessoais e comprovantes fazem parte da análise. Manter o cadastro em dia normalmente facilita o pedido.",
            },
        ],
        faq: [
            { q: "Todo pedido é aceito?", a: "Não. Existem critérios objetivos, e casos podem ser indeferidos quando algum elemento não é reconhecido." },
            { q: "O cadastro precisa estar atualizado?", a: "Sim. O cadastro atualizado costuma ser um ponto relevante." },
        ],
    },
    "bpc-idoso": {
        slug: "bpc-idoso",
        topic: "BPC Idoso",
        eyebrow: "Assistencial",
        h1: "BPC para pessoa idosa: idade é um dos critérios da análise",
        subtitle:
            "Além da idade, a análise considera contexto familiar, informações cadastrais e situações que podem gerar indeferimento.",
        heroImage:
            "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=1600&q=80",
        micro: ["Idade e contexto", "Documentação atualizada", "Análise humana"],
        cards: [
            { title: "Idade", text: "Critério previsto na legislação para o BPC idoso." },
            { title: "Contexto familiar", text: "Análise considera o núcleo familiar." },
            { title: "Cadastro", text: "Informações cadastrais atualizadas." },
            { title: "Indeferimentos", text: "Situações em que o pedido é negado." },
        ],
        content: [
            {
                heading: "O que costuma ser observado",
                text: "Além da idade, a análise leva em conta o núcleo familiar do requerente, as informações cadastrais e outros pontos previstos em lei.",
            },
            {
                heading: "Situações de indeferimento",
                text: "Existem hipóteses em que o pedido não é reconhecido. Nessas situações, cabe avaliar se há elementos a serem apresentados ou se cabe algum tipo de revisão.",
            },
        ],
        faq: [
            { q: "Toda pessoa idosa pode receber o benefício?", a: "Não. Existem critérios objetivos, além da idade, que precisam ser analisados." },
            { q: "É preciso apresentar documentos da família?", a: "Sim, informações familiares fazem parte da análise." },
        ],
    },
    "bpc-autismo": {
        slug: "bpc-autismo",
        topic: "BPC e Autismo",
        eyebrow: "Assistencial",
        h1: "BPC e autismo: entenda como funciona a análise do benefício",
        subtitle:
            "A análise considera aspectos previstos em lei e não se resume ao diagnóstico. Cada situação é avaliada com responsabilidade.",
        heroImage:
            "https://images.unsplash.com/photo-1502378735452-bc7d86632805?auto=format&fit=crop&w=1600&q=80",
        micro: ["Sem generalizações", "Análise responsável", "Cuidado profissional"],
        cards: [
            { title: "BPC para pessoa com deficiência", text: "Aspectos previstos na legislação." },
            { title: "Análise", text: "O diagnóstico não é o único fator considerado." },
            { title: "Informações", text: "Contexto familiar e social também são analisados." },
            { title: "Pedido e avaliação", text: "Etapas administrativas envolvidas." },
        ],
        content: [
            {
                heading: "Sobre a análise do benefício",
                text: "A análise do BPC considera aspectos previstos em lei que vão além do diagnóstico. É importante observar contexto familiar, social e demais elementos previstos na legislação assistencial.",
            },
            {
                heading: "Sem generalizações",
                text: "Cada situação é única. A análise responsável evita afirmações automáticas e busca compreender o cenário individual do requerente.",
            },
        ],
        faq: [
            { q: "O diagnóstico basta para conseguir o benefício?", a: "Não. Além do diagnóstico, existem critérios cadastrais, familiares e outros previstos em lei." },
            { q: "O pedido pode ser indeferido?", a: "Sim. Existem situações administrativas em que o benefício não é reconhecido." },
        ],
    },
    "salario-maternidade": {
        slug: "salario-maternidade",
        topic: "Salário-Maternidade",
        eyebrow: "Previdenciário",
        h1: "Salário-maternidade: entenda o que precisa ser analisado",
        subtitle:
            "Situações urbanas e rurais possuem critérios distintos. A análise técnica ajuda a compreender qual caminho se aplica ao seu caso.",
        heroImage:
            "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1600&q=80",
        micro: ["Urbano e rural", "Análise personalizada", "Atendimento humano"],
        cards: [
            { title: "O que é", text: "Benefício previdenciário previsto em lei." },
            { title: "Situações diferentes", text: "Urbana, rural e casos específicos." },
            { title: "Atividade rural", text: "Critérios próprios de comprovação." },
            { title: "Documentação", text: "Documentos que ajudam a compor a análise." },
        ],
        content: [
            {
                heading: "Duas realidades, uma análise cuidadosa",
                text: "O salário-maternidade costuma ser analisado a partir do perfil da segurada. Trabalhadoras urbanas e rurais seguem critérios diferentes; cada situação exige atenção específica.",
            },
            {
                heading: "Atividade rural: comprovação",
                text: "Para trabalhadoras rurais, a comprovação da atividade pode exigir documentação específica. Uma leitura técnica ajuda a identificar quais elementos podem ser reunidos.",
            },
        ],
        faq: [
            { q: "Preciso estar trabalhando com carteira assinada?", a: "Não necessariamente. Existem diferentes situações previdenciárias que podem gerar direito ao benefício." },
            { q: "Trabalhadora rural também tem direito?", a: "Sim, existem regras próprias que consideram a comprovação da atividade rural." },
        ],
    },
};

export const landingList = Object.values(landings);
