"use client";

import React, { useMemo } from "react";
import { copyrightStartDate } from "../data/portfolio";

export default function Footer() {
    const copyrightDate = useMemo(() => {
        const start = new Date(String(copyrightStartDate)).getFullYear();
        const current = new Date().getFullYear();
        const yearsDuration = current - 1970; // This logic in original code was weird: new Date() - new Date(startDate). This returns milliseconds.
        // Original code:
        // new Date(new Date() - new Date(String(this.copyrightStartDate))).getFullYear() - 1970
        // If copyrightStartDate is 2022.
        // new Date(2022) is basically 1970 + 2022 milliseconds? No, Date(number) is epoch ms.
        // Date("2022") is Jan 1 2022.
        // Let's assume copyrightStartDate is a YEAR number (2022).
        // Original vue code: copyrightStartDate: 2022.
        // new Date("2022") -> Jan 1 2022.
        // Date.now() - Date("2022") = diff in ms.
        // new Date(diff).getFullYear() - 1970 = years diff.

        // Correct logic locally:
        const diff = current - copyrightStartDate;
        return diff === 0
            ? String(copyrightStartDate)
            : `${copyrightStartDate} - ${copyrightStartDate + diff}`;
    }, []);

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {/* logo */}
                        <div className="logo" title="Stéphan">
                            <h1>
                                <a href="#">Stéphan</a>
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        &copy; {copyrightDate} Proudly Powered by{" "}
                        <a
                            href="https://stephancj.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Stéphan J. Christian
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
