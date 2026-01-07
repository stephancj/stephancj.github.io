"use client";

import React, { useState, FormEvent } from "react";
import { useAppContext } from "../app/providers";
import { contact } from "../data/portfolio";

export default function Contact() {
    const { getLanguageCode } = useAppContext();
    const [loading, setLoading] = useState(false);

    // Since the original used https://usebasin.com/f/046a372f70f0, we can keep using it.
    // Ideally we should use fetch to submit so we can handle success/error states without redirecting,
    // or just use the form action. The original used AJAX I believe (Vue method sendContactFormMessage).
    // I will implement a standard form submission for now which redirects, 
    // or simple fetch if I can verify CORS. Basin usually supports AJAX.

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://usebasin.com/f/046a372f70f0", {
                method: "POST",
                body: formData,
                headers: {
                    // 'Accept': 'application/json' // Basin supports JSON response if this header is set
                }
            });

            if (response.ok) {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Oops! something went wrong, please try again.");
            }
        } catch (error) {
            alert("Oops! something went wrong, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="contact" className="contact-section section">
            <div className="container">
                <div className="section-content row">
                    {/* text box */}
                    <div
                        className="contact-text col-lg-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="text-box">
                            <span className="subtitle">
                                {contact.title[getLanguageCode()]}
                            </span>
                            <h2>
                                {contact.subtitle1[getLanguageCode()]}
                                <br />
                                {contact.subtitle2[getLanguageCode()]}
                            </h2>
                            <p style={{ textAlign: 'justify' }}>{contact.text[getLanguageCode()]}</p>
                        </div>

                        {/* contact info */}
                        <ul className="contact-info">
                            <li>
                                <div style={{ width: 30 }}>
                                    {/* Replaced img with simple text or FontAwesome if available */}
                                    <i className="fa fa-map-marker fa-2x" aria-hidden="true" style={{ color: '#fff' }}></i>
                                </div>
                                <div>
                                    <strong>{contact.addressLabel[getLanguageCode()]}:</strong>
                                    {contact.address}
                                </div>
                            </li>
                            <li>
                                <div style={{ width: 30 }}>
                                    <i className="fa fa-phone fa-2x" aria-hidden="true" style={{ color: '#fff' }}></i>
                                </div>
                                <div>
                                    <strong>{contact.phoneLabel[getLanguageCode()]}:</strong>
                                    <ul>
                                        <li>
                                            <a href={`tel:${contact.phone1}`}>{contact.phone1}</a>
                                        </li>
                                        {contact.phone2 && (
                                            <li>
                                                <a href={`tel:${contact.phone2}`}>{contact.phone2}</a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div style={{ width: 30 }}>
                                    <i className="fa fa-envelope fa-2x" aria-hidden="true" style={{ color: '#fff' }}></i>
                                </div>
                                <div>
                                    <strong>{contact.emailLabel[getLanguageCode()]}:</strong>
                                    <ul>
                                        <li>
                                            <a href={`mailto:${contact.email1}`}>{contact.email1}</a>
                                        </li>
                                        {contact.email2 && (
                                            <li>
                                                <a href={`mailto:${contact.email2}`}>{contact.email2}</a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </li>
                        </ul>

                        {/* social links */}
                        <ul className="social">
                            <li>
                                <a
                                    href="https://www.facebook.com/SutefanC30/"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Facebook"
                                >
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/stephan.cj/"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Instagram"
                                >
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
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

                    {/* contact form */}
                    <div
                        className="col-lg-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <form
                            className="contact-form form-styled"
                            onSubmit={handleSubmit}
                        >
                            <div className="group">
                                <label>
                                    {contact.form.customerNameLabel[getLanguageCode()]}
                                </label>
                                <div className="control has-prefix-icon">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder={contact.form.customerNamePlaceholder[getLanguageCode()]}
                                        minLength={3}
                                        required
                                    />
                                    <i
                                        className="fa fa-user-circle prefix-icon"
                                        aria-hidden="true"
                                    ></i>
                                </div>
                            </div>
                            <div className="group">
                                <label>
                                    {contact.form.customerEmailLabel[getLanguageCode()]}
                                </label>
                                <div className="control has-prefix-icon">
                                    <input
                                        className="ltr-dir"
                                        type="email"
                                        inputMode="email"
                                        name="email"
                                        placeholder={contact.form.customerEmailPlaceholder[getLanguageCode()]}
                                        required
                                    />
                                    <i
                                        className="fa fa-envelope prefix-icon"
                                        aria-hidden="true"
                                    ></i>
                                </div>
                            </div>
                            <div className="group phone-number">
                                <label>
                                    {contact.form.customerPhoneLabel[getLanguageCode()]}
                                    <span className="optional">
                                        ({contact.form.optionalLabel[getLanguageCode()]})
                                    </span>
                                </label>
                                <div className="control has-prefix-icon">
                                    <input
                                        type="tel"
                                        inputMode="tel"
                                        name="phone"
                                        placeholder={contact.form.customerPhonePlaceholder[getLanguageCode()]}
                                    />
                                    <i className="fa fa-phone prefix-icon" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="group">
                                <label>{contact.form.messageLabel[getLanguageCode()]}</label>
                                <div className="control has-prefix-icon">
                                    <textarea
                                        name="message"
                                        placeholder={contact.form.messagePlaceholder[getLanguageCode()]}
                                        required
                                    ></textarea>
                                    <i
                                        className="fa fa-comments prefix-icon"
                                        aria-hidden="true"
                                    ></i>
                                </div>
                            </div>
                            <div className="group">
                                <div className="control">
                                    <button
                                        className="submit-btn btn btn-dark"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        {loading ? "Sending..." : (getLanguageCode() === "en" ? "Send" : "Envoyer")}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
