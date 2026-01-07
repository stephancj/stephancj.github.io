"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useAppContext } from "../app/providers";
import {
    navLinks,
    navLinksWithoutPortfolio,
    myWorks,
    contact,
    aboutMe,
} from "../data/portfolio";

export default function Header() {
    const {
        theme,
        toggleTheme,
        language,
        toggleLanguage,
        getLanguageCode,
    } = useAppContext();
    const [isHeaderBig, setIsHeaderBig] = useState(true);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const lastScrollPosition = useRef(0);
    const headerNav = useRef<HTMLElement>(null);
    const navMenuToggleBtn = useRef<HTMLButtonElement>(null);

    const startMinimizingHeaderAt = 100;

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;

            setIsHeaderBig(scrollPosition < startMinimizingHeaderAt);

            if (scrollPosition > 100 && scrollPosition > lastScrollPosition.current) {
                setIsHeaderHidden(true);
            } else {
                setIsHeaderHidden(false);
            }
            lastScrollPosition.current = scrollPosition;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleNavMenu = () => {
        setIsNavMenuOpen(!isNavMenuOpen);
        if (!isNavMenuOpen) {
            document.body.style.overflowY = "hidden";
            // Focus logic could be added here
        } else {
            document.body.style.removeProperty("overflow-y");
        }
    };

    const closeNavMenu = () => {
        setIsNavMenuOpen(false);
        document.body.style.removeProperty("overflow-y");
    };

    const links = myWorks.isVisible ? navLinks : navLinksWithoutPortfolio;

    return (
        <header
            className={`${isHeaderBig ? "big-header" : "small-header"
                } ${isHeaderHidden ? "header-hidden" : ""}`}
        >
            <div className="container">
                {/* logo */}
                <div className="logo" title="Stéphan">
                    <h1>
                        <Link href="/">Stéphan</Link>
                    </h1>
                </div>

                {/* nav links */}
                <nav
                    ref={headerNav}
                    className={`${isNavMenuOpen ? "menu-open" : ""}`}
                >
                    {/* nav menu links */}
                    <ul className="nav-links">
                        {links.map((link) => (
                            <li key={link.url}>
                                <Link href={link.url} onClick={closeNavMenu}>
                                    {link.title[getLanguageCode()]}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* menu content in big devices (hidden in mobile/tablet) */}
                    <div className="desktop-menu-content" tabIndex={-1}>
                        <div className="container">
                            {/* about me */}
                            <div className="about-us">
                                <p>{aboutMe.quoteDescription[getLanguageCode()]}</p>
                                <h4 className="block-title">
                                    {aboutMe.quoteText[getLanguageCode()]}
                                </h4>
                            </div>

                            {/* contact info */}
                            <ul className="contact-info row">
                                <li className="col-lg-6">
                                    <h4 className="block-title">
                                        {contact.emailLabel[getLanguageCode()]}
                                    </h4>
                                    <ul>
                                        <li>
                                            <a href={`mailto:${contact.email1}`}>{contact.email1}</a>
                                        </li>
                                        {contact.email2 && (
                                            <li>
                                                <a href={`mailto:${contact.email2}`}>
                                                    {contact.email2}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </li>
                                <li className="col-lg-6">
                                    <h4 className="block-title">
                                        {contact.addressLabel[getLanguageCode()]}
                                    </h4>
                                    <ul>
                                        <li>
                                            Antananarivo, 101,
                                            <br />
                                            Madagascar
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* options icons */}
                <ul className="options-icons">
                    {/* lang switcher button */}
                    <li className="lang-switcher">
                        <button
                            onClick={toggleLanguage}
                            aria-label="Switching Language"
                            title="Switch Language"
                        >
                            <strong>{language === "english" ? "FR" : "EN"}</strong>
                        </button>
                    </li>

                    {/* theme switcher button */}
                    <li className="theme-switcher">
                        <button
                            className={theme}
                            title="Change Mode"
                            onClick={toggleTheme}
                        ></button>
                    </li>

                    {/* hamburger button */}
                    <li className={`hamburger-btn ${isNavMenuOpen ? "open" : ""}`}>
                        <button
                            onClick={toggleNavMenu}
                            title="Toggle Side Menu"
                            aria-label="Toggle Side Menu"
                            ref={navMenuToggleBtn}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
