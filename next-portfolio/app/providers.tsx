"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Theme = "light_theme" | "dark_theme";
type Language = "english" | "french";

interface AppContextType {
    theme: Theme;
    language: Language;
    toggleTheme: () => void;
    toggleLanguage: () => void;
    getLanguageCode: () => "en" | "fr";
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark_theme");
    const [language, setLanguage] = useState<Language>("english");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1200, // values from original if possible, default is usually fine
            once: true,
        });

        const savedTheme = localStorage.getItem("nafieSavedTheme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            setTheme("dark_theme");
        } else {
            setTheme("light_theme");
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("nafieSavedTheme", theme);
            document.body.className = theme; // Or Apply to specific container
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light_theme" ? "dark_theme" : "light_theme"));
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "english" ? "french" : "english"));
    };

    const getLanguageCode = () => {
        return language === "english" ? "en" : "fr";
    };

    // Always render Provider to avoid context errors in children
    // The theme will start as 'dark_theme' and update on mount if needed
    return (
        <AppContext.Provider
            value={{ theme, language, toggleTheme, toggleLanguage, getLanguageCode }}
        >
            <div id="app-inner" className={theme}>
                {children}
            </div>
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
}
