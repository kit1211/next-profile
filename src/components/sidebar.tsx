"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslations } from "next-intl";






export default function Sidebar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (darkMode: boolean) => void }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const params = useParams(); // ✅ ใช้ค่า locale จาก URL
    const locale = params.locale as string;
    const t = useTranslations();


    useEffect(() => {
        if (locale === "th") {
            document.documentElement.classList.add("font-ibm-plex-thai");
        } else {
            document.documentElement.classList.add("font-consola");
        }
    }, [locale]);


    return (
        <>
            {/* Desktop Sidebar (ซ่อนบนมือถือ) */}
            <aside className="hidden md:block w-64 bg-white dark:bg-gray-800 shadow-lg">
                <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white ">
                        Codex Share
                    </h2>
                    <button

                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 bg-gray-200 dark:bg-white-500 rounded"
                    >
                        {darkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>

                        )}
                    </button>
                </div>
                <nav className="p-4">
                    <ul className="space-y-3">
                        <li>
                            <Link href={`/${locale}`} className={` flex items-center gap-2 p-2 rounded transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 ${pathname === "/" ? "bg-gray-200 dark:bg-gray-700" : ""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                                </svg>
                                {t("sidebar.li_1")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/supporter`} className={` flex items-center gap-2 p-2 rounded transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 ${pathname === "/supporter" ? "bg-gray-200 dark:bg-gray-700" : ""} `}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">

                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>
                                {t("sidebar.li_2")}
                            </Link>
                        </li>
                        <li className="fixed bottom-0 pb-5">
                            <LanguageSelector />
                        </li>
                    </ul>

                </nav>

            </aside>



            {/* Hamburger Button (แสดงบนมือถือ) */}
            <button
                className="md:hidden fixed top-4 left-4 bg-gray-200 dark:bg-gray-700 p-2 rounded z-50"
                onClick={() => setMobileOpen(true)}
            >
                🍔
            </button>

            {/* Mobile Sidebar (แสดงเมื่อกดปุ่ม) */}
            {mobileOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileOpen(false)}>
                    <aside className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg p-4 z-50">
                        <button
                            className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 rounded ml-2 text-red-500"
                            onClick={() => setMobileOpen(false)}
                        >❌ Close</button>
                        <nav>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                                        📊 Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">

                                        ⚙️ Settings
                                    </Link>
                                </li>
                              
                            </ul>
                        </nav>
                    </aside>
                </div>
            )}
        </>
    );
}
