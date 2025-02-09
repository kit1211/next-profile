"use client";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import Flag from 'react-world-flags'


export default function LanguageSelector() {
    const router = useRouter();
    const locale = useLocale();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const changeLanguage = (lang: string) => {
        router.push(`/${lang}`);
        setDropdownOpen(false);
    };

    // set locale to local storage
    useEffect(() => {
        localStorage.setItem("locale", locale);
    }, [locale]);

    return (
        <div className="relative">

            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-gray-200 dark:bg-gray-700 dark:text-white p-2 rounded flex items-center gap-2 w-full font-ibmPlexThai"
            >
                {locale === "th" ?
                    <div className="flex items-center gap-2">
                        <Flag code="TH" height="20" width="20" /> Thai
                    </div>
                    :
                    <div className="flex items-center gap-2">
                        <Flag code="US" height="20" width="20" /> English
                    </div>

                }

            </button>

            {dropdownOpen && (
                <ul className="absolute-top w-full right-0 mt-2  bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded shadow-lg">
                    <ul>
                        <li>
                            <button
                                onClick={() => changeLanguage("en")}
                                className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-left"
                            >
                                <Flag code="US" height="20" width="20" />
                                English
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => changeLanguage("th")}
                                className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-left"
                            >
                                <Flag code="TH" height="20" width="20" />
                                Thai
                            </button>
                        </li>
                    </ul>
                </ul>
            )}
        </div>
    );
}
