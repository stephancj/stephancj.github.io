"use client";

import React from "react";
import Image from "next/image";
import { useAppContext } from "../app/providers";
import { aboutMe } from "../data/portfolio";

export default function About() {
    const { getLanguageCode } = useAppContext();

    return (
        <div id="about" className="about-section section">
            <div className="container">
                <div className="section-content row">
                    <div
                        className="about-img col-lg-6"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <div className="layer">
                            <Image
                                src="/assets/images/about-me-1.png"
                                alt="About Me"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div
                        className="about-text col-lg-6"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div className="text-box">
                            <span className="subtitle">
                                {aboutMe.title[getLanguageCode()]}
                            </span>
                            <h2>
                                {aboutMe.subtitle1[getLanguageCode()]}
                                <br />
                                {aboutMe.subtitle2[getLanguageCode()]}
                            </h2>
                            <p>{aboutMe.text[getLanguageCode()]}</p>
                        </div>
                        <div className="btns-container">
                            <a href="#contact" className="btn btn-primary">
                                {aboutMe.hireMe[getLanguageCode()]}
                            </a>
                            <a
                                download
                                href="/assets/CV_Stephan.pdf"
                                className="btn btn-outline-light"
                            >
                                {aboutMe.downloadCv[getLanguageCode()]}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
