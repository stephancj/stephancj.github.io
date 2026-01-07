"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useAppContext } from "../app/providers";
import { myWorks, allPortfolioItems } from "../data/portfolio";

export default function Portfolio() {
    const { getLanguageCode } = useAppContext();
    const [filter, setFilter] = useState("*");
    const [visibleItems, setVisibleItems] = useState(6);

    // Filter items
    const filteredItems = useMemo(() => {
        return filter === "*"
            ? allPortfolioItems
            : allPortfolioItems.filter((item) => item.category.slug === filter);
    }, [filter]);

    // Load more logic
    const handleLoadMore = () => {
        setVisibleItems((prev) => prev + 3);
    };

    if (!myWorks.isVisible) return null;

    return (
        <div id="portfolio" className="portfolio-section section">
            <div className="container">
                <div className="section-title">
                    <span className="subtitle">{myWorks.title[getLanguageCode()]}</span>
                    <h2>
                        {myWorks.subtitle1[getLanguageCode()]}
                        <br />
                        {myWorks.subtitle2[getLanguageCode()]}
                    </h2>
                    <p>{myWorks.text[getLanguageCode()]}</p>
                </div>

                {/* Filter buttons */}
                <div className="filter-buttons">
                    <button
                        className={filter === "*" ? "current" : ""}
                        onClick={() => setFilter("*")}
                        data-filter="*"
                    >
                        All
                    </button>
                    <button
                        className={filter === "web" ? "current" : ""}
                        onClick={() => setFilter("web")}
                        data-filter=".web"
                    >
                        Web
                    </button>
                    <button
                        className={filter === "mobile" ? "current" : ""}
                        onClick={() => setFilter("mobile")}
                        data-filter=".mobile"
                    >
                        Mobile
                    </button>
                    <button
                        className={filter === "desktop" ? "current" : ""}
                        onClick={() => setFilter("desktop")}
                        data-filter=".desktop"
                    >
                        Desktop
                    </button>
                </div>

                {/* Portfolio items */}
                <div className="portfolio-items row">
                    {filteredItems.slice(0, visibleItems).map((item, index) => (
                        <div
                            key={index}
                            className={`col-md-6 col-lg-4 portfolio-item ${item.category.slug}`}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="item-content">
                                <div className="img-wrapper">
                                    <Image
                                        src={`/${item.imgUrl}`}
                                        alt={item.title[getLanguageCode()]}
                                        width={500}
                                        height={500}
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                    <div className="overlay">
                                        <a
                                            href={item.url}
                                            className="view-btn"
                                            title={item.title[getLanguageCode()]}
                                        >
                                            <i className="fa fa-external-link" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-content">
                                    <h3>{item.title[getLanguageCode()]}</h3>
                                    <span>{item.category.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load more button */}
                {visibleItems < filteredItems.length && (
                    <div className="text-center mt-5">
                        <button className="btn btn-primary" onClick={handleLoadMore}>
                            {myWorks.loadMore[getLanguageCode()]}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
