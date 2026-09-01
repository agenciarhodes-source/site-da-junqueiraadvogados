// Junqueira Advogados — single source of truth for institutional data.
// Any pendências ficam centralizadas aqui.

export const siteConfig = {
    name: "Junqueira Advogados",
    shortName: "Junqueira",
    tagline: "Método, presença e cuidado jurídico.",
    siteUrl: "https://junqueiraadvogados.com.br",
    email: "contato@junqueiraadvogados.com.br",
    cnpj: "", // pendente
    hours: "Seg. a Sex. · 08h às 18h",
    social: {
        instagram: "",
        linkedin: "",
    },
    tracking: {
        GTM_ID: "GTM-WTLCRB6X",
        GA4_ID: "",
        GOOGLE_ADS_ID: "AW-17730711944",
    },
    hero: {
        eyebrow: "Escritório de Advocacia",
        title: [
            "Excelência",
            "que protege",
            "o seu direito.",
        ],
        subtitle:
            "Método, transparência e proximidade. Uma atuação jurídica pensada para cada história e construída com responsabilidade profissional.",
        cta: "Falar com um advogado",
    },
    generalPhone: "(86) 4009-6145",
    generalWhatsapp: "(86) 9 9926-6593",
    generalWhatsappLink: "https://wa.me/558699926593?text=Olá%2C%20gostaria%20de%20falar%20com%20o%20escritório%20Junqueira%20Advogados.",
};

// Sócios / equipe
export const team = [
    {
        name: "Filipe Junqueira",
        role: "Sócio-fundador",
        oab: "OAB PI 15510 · OAB MA 28024-A",
        bio: "Trajetória construída no interior e ampliada para as principais praças do Piauí e Maranhão, com foco em cuidado jurídico responsável.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Adônis Ferreira",
        role: "Sócio",
        oab: "OAB PI 23588",
        bio: "Atuação orientada à análise técnica dos processos, com foco em previdenciário e consumidor.",
        image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Marcos Vinicius",
        role: "Sócio",
        oab: "OAB PI 23610",
        bio: "Atendimento consultivo e estratégico, unindo escuta e método para cada demanda recebida.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    },
];

// Unidades
export const units = [
    {
        city: "Teresina",
        state: "Piauí",
        address:
            "Av. Jóquei Clube, 299 · Edif. EuroBusiness · Cobertura · Sala 4 — Jóquei",
        phone: "(86) 4009-6145",
        whatsapp: "(86) 9 9926-6593",
        whatsappLink:
            "https://wa.me/558699926593?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20unidade%20de%20Teresina.",
        mapEmbed:
            "https://www.google.com/maps?q=Av.+Joquei+Clube+299+Teresina+PI&output=embed",
        head: true,
    },
    {
        city: "Parnaíba",
        state: "Piauí",
        address: "Rua Itabajara, 535 — Bairro São Francisco",
        whatsapp: "(86) 9 9920-1896",
        whatsappLink: "https://wa.me/558699920896",
        mapEmbed:
            "https://www.google.com/maps?q=Rua+Itabajara+535+Parnaiba+PI&output=embed",
    },
    {
        city: "Luzilândia",
        state: "Piauí",
        address: "R. Cel. Hugo de Castro, 412",
        whatsapp: "(86) 9 9907-9295",
        whatsappLink: "https://wa.me/558699079295",
        mapEmbed:
            "https://www.google.com/maps?q=R.+Cel.+Hugo+de+Castro+412+Luzilandia+PI&output=embed",
    },
    {
        city: "Esperantina",
        state: "Piauí",
        address: "R. Ver. Ramos, 727 — Centro",
        whatsapp: "(86) 9 8864-1132",
        whatsappLink: "https://wa.me/558688641132",
        mapEmbed:
            "https://www.google.com/maps?q=R.+Ver.+Ramos+727+Esperantina+PI&output=embed",
    },
    {
        city: "Barras",
        state: "Piauí",
        address: "R. Mal. Pires Ferreira, 484 — Centro",
        whatsapp: "(86) 9 8177-0086",
        whatsappLink: "https://wa.me/558681770086",
        mapEmbed:
            "https://www.google.com/maps?q=R.+Mal.+Pires+Ferreira+484+Barras+PI&output=embed",
    },
    {
        city: "São Bernardo",
        state: "Maranhão",
        address: "R. Barão do Rio Branco, 732",
        whatsapp: "(98) 9 8443-1955",
        whatsappLink: "https://wa.me/559884431955",
        mapEmbed:
            "https://www.google.com/maps?q=R.+Barao+do+Rio+Branco+732+Sao+Bernardo+MA&output=embed",
    },
    {
        city: "Araioses",
        state: "Maranhão",
        address: "R. Vinte e Oito de Julho, s/n — Centro",
        phone: "(98) 7006-0896",
        mapEmbed:
            "https://www.google.com/maps?q=R.+Vinte+e+Oito+de+Julho+Araioses+MA&output=embed",
    },
];

// Áreas de atuação (para grid do site institucional)
export const areas = [
    {
        slug: "pensao-por-morte",
        name: "Pensão por Morte",
        group: "Previdenciário",
        short: "Análise técnica sobre dependência, qualidade de segurado e documentação.",
    },
    {
        slug: "aposentadoria",
        name: "Aposentadoria",
        group: "Previdenciário",
        short: "Revisão de histórico contributivo e regras aplicáveis ao pedido no INSS.",
    },
    {
        slug: "cnis",
        name: "CNIS",
        group: "Previdenciário",
        short: "Conferência de vínculos, contribuições e possíveis divergências.",
    },
    {
        slug: "planejamento-previdenciario",
        name: "Planejamento Previdenciário",
        group: "Previdenciário",
        short: "Estudo do histórico e das regras antes do requerimento do benefício.",
    },
    {
        slug: "auxilio-acidente",
        name: "Auxílio-Acidente",
        group: "Previdenciário",
        short: "Análise dos aspectos que compõem a avaliação do benefício.",
    },
    {
        slug: "bpc-loas",
        name: "BPC / LOAS",
        group: "Previdenciário",
        short: "Critérios objetivos, documentação e situações de indeferimento.",
    },
    {
        slug: "bpc-idoso",
        name: "BPC Idoso",
        group: "Previdenciário",
        short: "Idade é um dos critérios; a análise considera contexto familiar.",
    },
    {
        slug: "bpc-autismo",
        name: "BPC e Autismo",
        group: "Previdenciário",
        short: "Análise da avaliação social e das particularidades do caso.",
    },
    {
        slug: "salario-maternidade",
        name: "Salário-Maternidade",
        group: "Previdenciário",
        short: "Situações urbanas e rurais analisadas conforme cada perfil.",
    },
    {
        slug: "emprestimo-nao-reconhecido",
        name: "Empréstimo Não Reconhecido",
        group: "Consumidor",
        short: "Contestação de operações e conferência de registros e protocolos.",
    },
    {
        slug: "direito-aereo",
        name: "Direito Aéreo",
        group: "Consumidor",
        short: "Cancelamento de voo, atraso, extravio e problemas com bagagem.",
    },
];

// Depoimentos (institucional)
export const testimonials = [
    {
        name: "Nazaré de Andrade",
        text: "Fui muito bem atendida por uma equipe atenciosa. Recomendo o escritório com muita segurança.",
    },
    {
        name: "Marcos Rocha",
        text: "Atendimento próximo e explicações claras em todas as etapas. Excelente experiência.",
    },
    {
        name: "Karina Magalhães",
        text: "Profissionais preparados e humanos, do primeiro contato ao acompanhamento do caso.",
    },
    {
        name: "Camila Silva",
        text: "Método sério, comunicação transparente e cuidado no atendimento.",
    },
];
