"use client";

import React from "react";
import { useAppContext } from "../app/providers";
import { services } from "../data/portfolio";

export default function Services() {
    const { getLanguageCode } = useAppContext();

    return (
        <div id="services" className="services-section section">
            <div className="container">
                <div className="section-title">
                    <span className="subtitle">{services.title[getLanguageCode()]}</span>
                    <h2>{services.subtitle[getLanguageCode()]}</h2>
                </div>

                <div className="section-content row">
                    <div
                        className="col-md-6 col-lg-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="service-box">
                            <div className="icon-wrapper">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </div>
                            <h3>{services.productDesign[getLanguageCode()]}</h3>
                            <p>{services.productDesignText[getLanguageCode()]}</p>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="service-box">
                            <div className="icon-wrapper">
                                <i className="fa fa-code" aria-hidden="true"></i>
                            </div>
                            <h3>{services.webDev[getLanguageCode()]}</h3>
                            <p>{services.webDevText[getLanguageCode()]}</p>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="service-box">
                            <div className="icon-wrapper">
                                <i className="fa fa-mobile" aria-hidden="true"></i>
                            </div>
                            <h3>{services.multiplatformApp[getLanguageCode()]}</h3>
                            <p>{services.xPlatformAppText[getLanguageCode()]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
