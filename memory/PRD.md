# PRD — Junqueira Advogados

## Contexto
Site institucional + 11 landing pages independentes para o escritório Junqueira Advogados (Piauí + Maranhão). Sem backend de formulário — CTAs redirecionam ao Flipform preservando parâmetros de mídia. Site preparado para hospedagem estática na Hostinger.

## Stack
React 19 (CRA), Tailwind, Framer Motion, Lenis, shadcn/ui, Poppins + Cormorant Garamond.

## User personas
1. **Buscador de área jurídica específica (Google Ads)** — chega em uma landing dedicada (ex.: `/pensao-por-morte`), lê conteúdo objetivo e clica em "Fale com um advogado" (CTA sticky no mobile).
2. **Cliente institucional / referência** — navega pelo site institucional (`/`, `/escritorio`, `/equipe`), busca credibilidade e canais de contato.

## Core requirements
- 11 landing pages independentes com H1, subtítulo, cards, conteúdo editorial, FAQ e CTA único
- Site institucional: Home, Escritório, Áreas, Equipe, Unidades, Contato, Privacidade, Termos, 404
- Rastreamento GTM + Google Ads (IDs reais) e preservação de utm/gclid/gbraid/wbraid + landing_slug/landing_page
- Design premium editorial (Awwwards level): kinetic hero, parallax, mask reveals, marquee, capítulos manifesto numerados
- Mobile-first (baseline 390px) com CTA fixo no rodapé nas landings
- Sitemap.xml, robots.txt, favicon da logo oficial

## Implementado — 2025-12
- ✅ Design system completo (tokens, tipografia, botões, cards, hairlines, grain)
- ✅ Header com scroll-state, menu mobile full-screen animado
- ✅ Footer institucional (dark, com links, áreas, políticas)
- ✅ Home com hero kinetic + parallax + numbered chapters + marquee + áreas + equipe + unidades + depoimentos + closing burgundy
- ✅ Escritório, Áreas, Equipe, Unidades (com mapas embed), Contato, Privacidade, Termos, 404
- ✅ LandingTemplate compartilhado por 11 landings + sticky mobile CTA
- ✅ 11 landings ativas com dados completos em `config/landings.js`
- ✅ Tracking: `buildTrackedFormUrl`, `fireLandingCta`, `fireLandingView`, GTM + Google Ads no `index.html`
- ✅ Framer Motion (LineReveal, FadeUp, ImageReveal, Reveal) + Lenis smooth scroll
- ✅ Sitemap.xml, robots.txt, favicon
- ✅ README com instruções de build/deploy

## Backlog / Próximos passos (P1)
- Substituir placeholders de fotos por fotos reais dos sócios e da matriz
- Preencher CNPJ, endereço final de Parnaíba, telefone confirmado de Araioses
- Adicionar `GA4_ID` quando disponível
- Schema.org (Organization / LegalService / FAQPage) — pode ser adicionado no `<head>` de cada landing
- OG image dedicada (1200x630) com identidade da marca

## Backlog P2
- Modo de página estática pura via Astro (migração), se necessário
- Página `/blog` com artigos indexáveis
- A/B test de headlines nas landings
