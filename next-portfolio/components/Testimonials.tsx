"use client";

import React from "react";
import Image from "next/image";
import { useAppContext } from "../app/providers";
import { testimonials, testimonialsItems } from "../data/portfolio";

// Basic carousel implementation or list for now.
// The original used owl-carousel (likely from libraries.min.css/js).
// Since we are moving to React, we might need a react carousel library or just a simple flex scroll.
// For now, let's implement a simple horizontal scroll or grid.
// Given the original had a carousel, let's try to make it look decent.
// We'll map them all for now. A real carousel might require a package like 'embla-carousel-react' or 'swiper'.
// To avoid adding dependencies without permission, I'll stick to a scrollable container or grid.

export default function Testimonials() {
    const { getLanguageCode } = useAppContext();

    return (
        <div id="testimonials" className="testimonials-section section">
            <div className="container">
                <div className="section-title">
                    <span className="subtitle">{testimonials.title[getLanguageCode()]}</span>
                    <h2>
                        {testimonials.subtitle1[getLanguageCode()]}
                        <br />
                        {testimonials.subtitle2[getLanguageCode()]}
                    </h2>
                </div>

                <div className="testimonials-items row">
                    {/* 
                Original was a carousel.
                We will display them in a grid for simplicity in version 1, 
                or we can use CSS snap scrolling if we want a slider feel.
            */}
                    {testimonialsItems.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="testimonial-item">
                                <div className="img-wrapper">
                                    <Image
                                        src={`/${item.imgUrl}`}
                                        alt={item.quoteAuthor[getLanguageCode()]}
                                        width={100}
                                        height={100}
                                        style={{ borderRadius: '50%' }}
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        {item.quoteContent[getLanguageCode()]}
                                    </p>
                                    <h3>{item.quoteAuthor[getLanguageCode()]}</h3>
                                    <span>{item.jobTitle[getLanguageCode()]}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
