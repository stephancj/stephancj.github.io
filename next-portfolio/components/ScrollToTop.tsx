"use client";

import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const startShowingScrollTopBtnAt = 600;

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset >= startShowingScrollTopBtnAt);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scroll({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`scroll-to-top ${isVisible ? "show-scrollTop" : ""}`}
            title="Back To Top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <i className="fa fa-angle-up" aria-hidden="true"></i>
        </button>
    );
}
