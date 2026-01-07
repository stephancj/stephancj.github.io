"use client";

import React from "react";
import { useAppContext } from "../app/providers";
import { education, experience } from "../data/portfolio";

const chunkArray = (arr: any[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        let chunk = arr.slice(i, i + size);
        while (chunk.length < size) chunk.push({});
        result.push(chunk);
    }
    return result;
};

export default function EducationExperience() {
    const { getLanguageCode } = useAppContext();

    const educationChunks = chunkArray(education.items, 3);
    const experienceChunks = chunkArray(experience.items, 3);

    return (
        <>
            {/* Education Section */}
            <div id="education" className="experience-section section">
                <div className="container">
                    <div className="section-content row">
                        <div className="experience-timeline col-lg-6" data-aos="fade-right" data-aos-delay="200">
                            {/* ✅ div.outer-ul (pas ul) */}
                            <div className="outer-ul">
                                {educationChunks.map((group, index) => (
                                    <ul key={index} className="inner-ul">
                                        {group.map((item: any, i: number) => {
                                            // ✅ placeholders : li VRAIMENT vide => li:empty:after affiche "?"
                                            if (Object.keys(item).length === 0) {
                                                return <li key={i} className="has-ultimate-tooltip" tabIndex={0} />;
                                            }

                                            return (
                                                <li key={i} className="has-ultimate-tooltip" tabIndex={0}>
                                                    <h3>{item.date}</h3>

                                                    <div className="ultimate-tooltip">
                                                        <h4 className="ultimate-tooltip-title">{item.schoolName[getLanguageCode()]}</h4>
                                                        <h5 className="ultimate-tooltip-subtitle">{item.degreeTitle[getLanguageCode()]}</h5>
                                                        <p>{item.desc[getLanguageCode()]}</p>
                                                    </div>
                                                    <div className="ultimate-tooltip-arrow" />
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ))}
                            </div>
                        </div>

                        <div className="experience-text col-lg-6" data-aos="fade-left" data-aos-delay="200">
                            <div className="text-box">
                                <span className="subtitle">{education.title[getLanguageCode()]}</span>
                                <h2>{education.subtitle[getLanguageCode()]}</h2>
                                <p style={{ textAlign: "justify" }}>{education.text[getLanguageCode()]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div id="experience" className="experience-section section">
                <div className="container">
                    <div className="section-content row">
                        <div className="experience-timeline col-lg-6" data-aos="fade-right" data-aos-delay="200">
                            {/* ✅ div.outer-ul (pas ul) */}
                            <div className="outer-ul">
                                {experienceChunks.map((group, index) => (
                                    <ul key={index} className="inner-ul">
                                        {group.map((item: any, i: number) => {
                                            if (Object.keys(item).length === 0) {
                                                return <li key={i} className="has-ultimate-tooltip" tabIndex={0} />;
                                            }

                                            return (
                                                <li key={i} className="has-ultimate-tooltip" tabIndex={0}>
                                                    <h3>{item.date}</h3>

                                                    <div className="ultimate-tooltip">
                                                        <h4 className="ultimate-tooltip-title">{item.companyName[getLanguageCode()]}</h4>
                                                        <h5 className="ultimate-tooltip-subtitle">{item.jobTitle[getLanguageCode()]}</h5>
                                                        <p style={{ whiteSpace: "pre-line" }}>{item.desc[getLanguageCode()]}</p>
                                                    </div>
                                                    <div className="ultimate-tooltip-arrow" />
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ))}
                            </div>
                        </div>

                        <div className="experience-text col-lg-6" data-aos="fade-left" data-aos-delay="200">
                            <div className="text-box">
                                <span className="subtitle">{experience.title[getLanguageCode()]}</span>
                                <h2>
                                    {experience.subtitle1[getLanguageCode()]}
                                    <br />
                                    {experience.subtitle2[getLanguageCode()]}
                                </h2>
                                <p style={{ textAlign: "justify" }}>{experience.text[getLanguageCode()]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
