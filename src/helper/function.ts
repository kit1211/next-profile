// function.ts
"use client";
import { useState, useEffect } from "react";

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return { darkMode, setDarkMode };
}
