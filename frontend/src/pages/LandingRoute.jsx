import React from "react";
import { Navigate } from "react-router-dom";
import LandingTemplate from "@/components/LandingTemplate";
import { landings } from "@/config/landings";

/**
 * Recebe o slug como prop (setado pelo App.js). Cada landing tem URL própria e SEO próprio.
 */
export default function LandingRoute({ slug }) {
    const data = landings[slug];

    React.useEffect(() => {
        if (!data) return;
        document.title = `${data.h1} — Junqueira Advogados`;
        const desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute("content", data.subtitle);
    }, [data]);

    if (!data) return <Navigate to="/404" replace />;

    return <LandingTemplate data={data} />;
}
