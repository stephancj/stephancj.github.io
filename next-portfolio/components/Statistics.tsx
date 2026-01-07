"use client";

import React from "react";
import { useAppContext } from "../app/providers";
import {
    staticTexts,
    careerStartDate,
    initialCompletedProjects,
    initialHappyClients,
} from "../data/portfolio";

export default function Statistics() {
    const { getLanguageCode } = useAppContext();

    const experienceYears =
        new Date(
            new Date().getTime() - new Date(String(careerStartDate)).getTime()
        ).getFullYear() - 1970;

    // Note: completedProjects and happyClients were static in original data()
    // completedProjects: 15, happyClients: 10
    // I exported them as initialCompletedProjects etc.

    return (
        <div className="statistics-section section">
            <div className="container">
                <div className="row">
                    <div
                        className="col-12 col-md-4 statistic-item"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <span className="value">{experienceYears}+</span>
                        <p className="title">
                            {staticTexts.experienceYearLabel[getLanguageCode()]}
                        </p>
                    </div>
                    <div
                        className="col-12 col-md-4 statistic-item"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <span className="value">{initialCompletedProjects}+</span>
                        <p className="title">
                            {staticTexts.completedProjectLabel[getLanguageCode()]}
                        </p>
                    </div>
                    <div
                        className="col-12 col-md-4 statistic-item"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <span className="value">{initialHappyClients}+</span>
                        <p className="title">
                            {staticTexts.happyClientLabel[getLanguageCode()]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
