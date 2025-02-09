"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useTranslations }                    from "next-intl";

function Supporter() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef                     = useRef<HTMLDivElement>(null);
    const t                               = useTranslations();
    const locale = localStorage.getItem("locale");


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    

    useEffect(() => {
        if (locale === "th") {
            document.documentElement.classList.add("font-ibm-plex-thai");
        } else {
            document.documentElement.classList.add("font-consola");
        }
    }, [locale]);


    

    return (
        <div>
            <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{t("page.supporter.title")}</h1>
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}

                        className="bg-gray-200 dark:bg-gray-700 dark:text-white p-2 rounded transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 "
                    >
                        ⚙️ ตั้งค่า
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded shadow-lg ">
                            <ul>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Customer</h3>
                    <p className="text-gray-600 dark:text-gray-400">$12,345</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Buyer</h3>
                    <p className="text-gray-600 dark:text-gray-400">1,234</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">User</h3>
                    <p className="text-gray-600 dark:text-gray-400">567</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Free</h3>
                    <p className="text-gray-600 dark:text-gray-400">89%</p>
                </div>
            </div>
        </div>
    )
}

export default Supporter
