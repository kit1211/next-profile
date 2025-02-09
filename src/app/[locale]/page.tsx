"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

    const t = useTranslations();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div>
            {/* Navbar */}
            <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{t("page.dashboard.title")}</h1>
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

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {/* loop 10x */}
                {Array.from({ length: 10 }).map((_, index) => (
                    <Link href="#"  key={index}>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" key={index}>
                            <div className="flex justify-between gap-4 mt-2 mb-2">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Revenue</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-red-400 dark:bg-red-500 text-white dark:text-white px-2 py-1 rounded-md">New!</span>
                                </div>
                            </div>
                            <hr className="mb-3 border-gray-200 dark:border-gray-700" />
                            <div className="relative w-full h-48">
                                <Image src="https://placehold.co/600x400" alt="logo" fill className="object-cover p-0" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-3">
                                <div className="col-span-2">
                                    <p className="text-gray-600 dark:text-gray-400">รายละเอียด:</p>
                                    <p className="text-gray-600 dark:text-white line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, magni. Rem fuga, nesciunt optio, nisi perspiciatis atque...</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                <div className="inline-flex gap-2">
                                    <p className="text-gray-600 dark:text-gray-400">ราคา:</p>
                                    <p className="text-gray-600 dark:text-white">$75</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                <div className="inline-flex gap-2 items-center">
                                    <p className="text-gray-600 dark:text-gray-400">Tags:</p>
                                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-white px-2 py-1 rounded-md">#AI</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
