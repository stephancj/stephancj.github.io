"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../app/providers";
import { staticTexts } from "../data/portfolio";

export default function Hero() {
    const { getLanguageCode } = useAppContext();
    const heroSection = useRef<HTMLDivElement>(null);
    const layer1 = useRef<HTMLDivElement>(null);
    const layer2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroSection.current || !layer1.current || !layer2.current) return;
            const parent = heroSection.current;
            const x =
                ((e.clientX - parent.getBoundingClientRect().x) / parent.offsetWidth) *
                100;
            const y =
                ((e.clientY - parent.getBoundingClientRect().y) / parent.offsetHeight) *
                100;

            parent.classList.add("parallax-animation");

            layer1.current.setAttribute(
                "style",
                `transform-origin: ${x}vw ${y}vh;`
            );
            // layer2 is a visual clone in the original, usually for effect. 
            // In original main.js: const layer2 = parent.querySelectorAll(".layer")[1];
            // In original HTML: <div class="layer" v-clone>...</div>
            // v-clone directive duplicates the element.
            // So I should render two layers or handle it similarly.
            layer2.current.setAttribute(
                "style",
                `transform-origin: ${x}vw ${y}vh;`
            );
        };

        const section = heroSection.current;
        if (section && window.innerWidth >= 992) {
            section.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (section) {
                section.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);

    return (
        <div id="hero" className="hero-section" ref={heroSection}>
            <div className="hero-img">
                <div className="layer" ref={layer1}>
                    <Image
                        src="/assets/images/hero-img-3.png"
                        alt="A photo of me"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
                {/* Clone for the effect */}
                <div className="layer" ref={layer2}>
                    <Image
                        src="/assets/images/hero-img-3.png"
                        alt="A photo of me"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
            </div>

            <div
                className="hero-text"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <h2>
                    {staticTexts.presentation.greeting[getLanguageCode()]}
                    <br />
                    {staticTexts.presentation.currentJobTitle[getLanguageCode()]}
                </h2>
                <Link href="#contact" className="btn get-in-touch-btn">
                    {staticTexts.getInTouch[getLanguageCode()]}
                </Link>
            </div>

            <div className="social">
                <ul>
                    <li>
                        <a
                            href="https://www.facebook.com/StephanChristianJ/"
                            target="_blank"
                            rel="noreferrer"
                            title="Facebook"
                        >
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/stephancj/"
                            target="_blank"
                            rel="noreferrer"
                            title="LinkedIn"
                        >
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="scroll-down">
                <a href="#about" title="Scroll Down">
                    {staticTexts.scroll[getLanguageCode()]}
                </a>
            </div>
        </div>
    );
}
