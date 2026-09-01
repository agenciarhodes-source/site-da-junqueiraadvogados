import React from "react";

/**
 * Numbered manifesto chapter block.
 */
export default function Chapter({ num, title, children, onDark = false, className = "" }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start ${className}`}>
            <div className="md:col-span-3">
                <div className={`chapter-num ${onDark ? "chapter-num-onDark" : ""}`}>
                    {num}
                </div>
            </div>
            <div className="md:col-span-9 pt-3">
                <h3
                    className={`display-lg ${onDark ? "text-white" : ""}`}
                    style={{ maxWidth: "60ch" }}
                >
                    {title}
                </h3>
                <div className={`mt-5 body-lg ${onDark ? "body-onDark" : ""}`} style={{ maxWidth: "58ch" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
