"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useAppContext } from "../app/providers";
import { mySkills } from "../data/portfolio";

export default function Skills() {
    const { getLanguageCode } = useAppContext();
    const [isSkillsOrTools, setIsSkillsOrTools] = useState<"skills" | "tools">("skills");

    return (
        <div id="skills" className="skills-section section">
            <div className="container">
                <div className="section-content row">
                    {/* text box */}
                    <div
                        className="skills-text col-lg-6"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <div className="text-box">
                            <span className="subtitle">
                                {mySkills.title[getLanguageCode()]}
                            </span>
                            <h2>
                                {mySkills.subtitle1[getLanguageCode()]}
                                <br />
                                {mySkills.subtitle2[getLanguageCode()]}
                            </h2>
                            <p style={{ textAlign: "justify" }}>{mySkills.text[getLanguageCode()]}</p>

                            <div className="toggle-switch-btn">
                                <input
                                    id="skills-list"
                                    type="radio"
                                    name="skillstype"
                                    value="skills"
                                    checked={isSkillsOrTools === "skills"}
                                    onChange={() => setIsSkillsOrTools("skills")}
                                />
                                <label htmlFor="skills-list" className="link-hover">
                                    {mySkills.skillsLabel[getLanguageCode()]}
                                </label>
                                <input
                                    id="tools-list"
                                    type="radio"
                                    name="skillstype"
                                    value="tools"
                                    checked={isSkillsOrTools === "tools"}
                                    onChange={() => setIsSkillsOrTools("tools")}
                                />
                                <label htmlFor="tools-list" className="link-hover">
                                    {mySkills.toolsLabel[getLanguageCode()]}
                                </label>
                                <span className="switcher-toggle"></span>
                            </div>
                        </div>
                    </div>

                    {/* skills items */}
                    <div
                        className="skills-items col-lg-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {isSkillsOrTools === "skills" && (
                            <ul>
                                {mySkills.skillsItems.map((skill, i) => (
                                    <li
                                        key={skill.title}
                                        tabIndex={0}
                                        title={skill.title}
                                    >
                                        <div className="skill-icon">
                                            <Image
                                                src={`/${skill.imgUrl}`}
                                                alt={skill.title}
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {isSkillsOrTools === "tools" && (
                            <ul>
                                {mySkills.toolsItems.map((tool, i) => (
                                    <li
                                        key={tool.title}
                                        tabIndex={0}
                                        title={tool.title}
                                    >
                                        <div className="skill-icon">
                                            <Image
                                                src={`/${tool.imgUrl}`}
                                                alt={tool.title}
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
