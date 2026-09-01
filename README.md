# Junqueira Advogados — Site Institucional + Landing Pages

Site institucional completo do escritório Junqueira Advogados e 11 landing pages independentes para Google Ads.

## Stack

- **React 19** + **CRA/Craco** (build estático — pasta `build/` compatível com Hostinger `public_html`)
- **Tailwind 3** + tokens brand (`#804040`, `#F1F1F1`, gold `#C9A36A`)
- **Framer Motion 11** — kinetic hero, section reveals, micro-interactions
- **Lenis** — momentum scrolling
- **shadcn/ui** — Accordion (FAQ)
- **Poppins** (obrigatória) + **Cormorant Garamond** (editorial discreto)

## Como rodar

```bash
cd frontend
yarn install
yarn start   # dev em http://localhost:3000
yarn build   # gera pasta build/ pronta para produção
```

## Deploy Hostinger

1. Execute `yarn build` na pasta `frontend/`
2. O conteúdo da pasta `frontend/build/` deve ser enviado para `public_html/` na Hostinger
3. Configure a rota fallback do Hostinger (SPA): crie um arquivo `.htaccess` em `public_html` com:

```apacheconf
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

Isso garante que as 11 URLs de landing (`/pensao-por-morte`, `/aposentadoria`, etc.) sejam servidas pelo React Router após o carregamento inicial. Todos os assets estáticos (favicon, sitemap, robots) já estão em `public/`.

## Estrutura

```
frontend/
├── public/
│   ├── brand/          # logo oficial (mark + wordmark)
│   ├── favicon.png     # gerado a partir do símbolo oficial
│   ├── robots.txt
│   └── sitemap.xml     # inclui todas as 20 URLs
└── src/
    ├── config/
    │   ├── site.js         # dados institucionais (unidades, equipe, áreas)
    │   └── landings.js     # dados das 11 landing pages + FLIPFORM_BASE + TRACKED_PARAMS
    ├── lib/
    │   ├── tracking.js     # buildTrackedFormUrl(), fireLandingCta(), pushEvent()
    │   └── useSmoothScroll.js  # Lenis
    ├── components/
    │   ├── layout/
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   ├── InstitutionalLayout.jsx
    │   │   └── LandingLayout.jsx      # com sticky CTA no mobile
    │   ├── motion/Reveal.jsx           # LineReveal / FadeUp / ImageReveal / Reveal
    │   ├── Chapter.jsx                 # capítulos numerados (manifesto)
    │   ├── Marquee.jsx                 # editorial marquee slow
    │   └── LandingTemplate.jsx         # template compartilhado das 11 landings
    └── pages/
        ├── Home.jsx                    # kinetic hero + parallax + manifesto + marquee
        ├── Escritorio.jsx
        ├── AreasDeAtuacao.jsx
        ├── Equipe.jsx
        ├── Unidades.jsx
        ├── Contato.jsx
        ├── PoliticaPrivacidade.jsx
        ├── TermosDeUso.jsx
        ├── LandingRoute.jsx            # ativa uma landing conforme slug
        └── NotFound.jsx
```

## Landing pages ativas (11)

Todas com URL própria, conteúdo próprio, FAQ próprio, SEO próprio e CTA que redireciona para o Flipform preservando parâmetros de mídia.

| Slug | Flipform |
|------|----------|
| /pensao-por-morte | leads.atendimentojunqueiraadv.com.br/pensao-por-morte |
| /aposentadoria | .../aposentadoria |
| /cnis | .../cnis |
| /planejamento-previdenciario | .../planejamento-previdenciario |
| /auxilio-acidente | .../auxilio-acidente |
| /emprestimo-nao-reconhecido | .../emprestimo-nao-reconhecido |
| /direito-aereo | .../direito-aereo (consolida voo cancelado + bagagem extraviada) |
| /bpc-loas | .../bpc-loas |
| /bpc-idoso | .../bpc-idoso |
| /bpc-autismo | .../bpc-autismo |
| /salario-maternidade | .../salario-maternidade (consolida rural) |

## Tracking

Preservado ao clicar em qualquer CTA:
`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `gbraid`, `wbraid`, `campaignid`, `adgroupid`, `creative`, `device`.

Adicionados: `landing_slug`, `landing_page`.

Eventos push no dataLayer:
- `landing_view` — ao carregar a landing
- `landing_cta_click` — ao clicar em qualquer CTA principal

IDs configurados:
- GTM: `GTM-WTLCRB6X`
- Google Ads: `AW-17730711944`
- GA4: ainda não fornecido — deixar vazio em `src/config/site.js` (`tracking.GA4_ID`)

## Configurações pendentes (edite em `src/config/site.js`)

- `siteUrl` — atualize se domínio final for diferente
- `cnpj` — vazio
- Fotos oficiais dos sócios — atualmente placeholders (URLs Unsplash em `team[].image`)
- Endereço final de Parnaíba e telefone de Araioses estão como valores atuais (a confirmar)

## Compliance

O conteúdo segue estrito compliance jurídico: sem promessa de resultado, sem valores de indenização/benefícios, sem "você tem direito" automático, sem sensacionalismo, sem contadores regressivos, sem afirmação automática de fraude. Em BPC e autismo não há presunção pessoal.

## Design

Estilo editorial contemporâneo: kinetic hero com mask reveal linha-a-linha, parallax discreto, marquee lento, capítulos numerados de manifesto, fotos com spotlight, animações scroll-triggered com Framer Motion. Mobile-first (390px baseline).
