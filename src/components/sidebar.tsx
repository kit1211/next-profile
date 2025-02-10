"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslations } from "next-intl";

export default function Sidebar({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const params = useParams();
    const locale = params.locale as string;
    const t = useTranslations();

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar (Desktop) */}
            <aside className="hidden xl:flex flex-col w-64 h-screen bg-white dark:bg-gray-800 shadow-lg fixed left-0 top-0 flex-shrink-0 transition-all">
                <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white cursor-default">
                        Codex Share
                    </h2>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                    >
                        {darkMode ? "🌙" : "☀️"}
                    </button>
                </div>
                <nav className="p-4 flex-1">
                    <ul className="space-y-3">
                        <li>
                            <Link
                                href={`/${locale}`}
                                className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 ${
                                    pathname === "/" ? "bg-gray-200 dark:bg-gray-700" : ""
                                }`}
                            >
                                📊 {t("sidebar.li_1")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/supporter`}
                                className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 ${
                                    pathname === "/supporter" ? "bg-gray-200 dark:bg-gray-700" : ""
                                }`}
                            >
                                ⚙️ {t("sidebar.li_2")}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="p-4 border-t dark:border-gray-700">
                    <LanguageSelector />
                </div>
            </aside>

            {/* ปุ่ม Hamburger (แสดงเฉพาะมือถือ & iPad) */}
            <button
                className="xl:hidden fixed top-2 right-4 bg-gray-200 dark:bg-gray-700 p-3 rounded-lg shadow-lg z-50 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                onClick={() => setMobileOpen(true)}
            >
                🍔
            </button>

            {/* Mobile Sidebar (แสดงเมื่อ Hamburger Menu ถูกกด) */}
            {mobileOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" onClick={() => setMobileOpen(false)}>
                    <aside className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-50">
                        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white cursor-default">
                                Codex Share
                            </h2>
                            <button
                                className="p-3 pl-5 pr-5 bg-red-400 text-white rounded shadow-md hover:bg-red-600 transition-all "
                                onClick={() => setMobileOpen(false)}
                            >
                                X

                            </button>
                        </div>
                        <nav className="p-4 flex-1">
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href={`/${locale}`}
                                        className="flex items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                    >
                                        📊 {t("sidebar.li_1")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`/${locale}/supporter`}
                                        className="flex items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                    >
                                        ⚙️ {t("sidebar.li_2")}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="p-4 border-t dark:border-gray-700">
                            <LanguageSelector />
                        </div>
                    </aside>
                </div>
            )}

        </div>
    );
}
