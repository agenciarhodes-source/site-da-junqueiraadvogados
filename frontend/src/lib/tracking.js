import { FLIPFORM_BASE, TRACKED_PARAMS } from "@/config/landings";

/**
 * Preserva parâmetros de mídia (utm_*, gclid, gbraid, wbraid, etc.) da URL atual
 * e adiciona landing_page + landing_slug antes de redirecionar ao Flipform.
 */
export function buildTrackedFormUrl(slug) {
    const base = `${FLIPFORM_BASE}/${slug}`;
    if (typeof window === "undefined") return base;

    const currentUrl = new URL(window.location.href);
    const target = new URL(base);

    TRACKED_PARAMS.forEach((key) => {
        const v = currentUrl.searchParams.get(key);
        if (v) target.searchParams.set(key, v);
    });

    target.searchParams.set("landing_slug", slug);
    target.searchParams.set(
        "landing_page",
        currentUrl.pathname.replace(/^\//, "") || "home",
    );

    return target.toString();
}

/**
 * Push seguro de evento para o dataLayer (GTM) quando disponível.
 */
export function pushEvent(event, params = {}) {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
}

/** Registra o evento landing_cta_click e navega ao Flipform. */
export function fireLandingCta(slug, topic) {
    pushEvent("landing_cta_click", {
        landing_slug: slug,
        landing_topic: topic,
    });
    const url = buildTrackedFormUrl(slug);
    window.location.href = url;
}

/** Registra abertura de uma landing (view). */
export function fireLandingView(slug, topic) {
    pushEvent("landing_view", {
        landing_slug: slug,
        landing_topic: topic,
    });
}
