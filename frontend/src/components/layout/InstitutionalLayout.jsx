import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSmoothScroll } from "@/lib/useSmoothScroll";

export default function InstitutionalLayout({ children }) {
    useSmoothScroll();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
