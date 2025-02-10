"use client";
import Sidebar from "@/components/sidebar";
import { useDarkMode } from "../../helper/function"; // Import Hook
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { IntlProvider } from "next-intl";
import { useParams } from "next/navigation"; // ✅ ใช้ useParams() ดึง locale
import { useEffect, useState } from "react";
import "./globals.css";
import { locales } from "@/app/i18n";


const ibmPlexThai = IBM_Plex_Sans_Thai({
    subsets: ["thai", "latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    variable: "--font-ibm-plex-thai",
});

const consolas = {
    variable: "--font-consolas",
    className: "font-consola"
};



export default function Layout({ children }: { children: React.ReactNode }) {
    const { darkMode, setDarkMode } = useDarkMode(); // ใช้งาน Dark Mode
    const params = useParams(); // ✅ ใช้ useParams() เพื่อดึงค่า locale
    const locale = params.locale as string; // ✅ แปลงให้เป็น string
    const [messages, setMessages] = useState<any>(null);

    // ✅ โหลดไฟล์แปลภาษาแบบ Client Component (useEffect)
    useEffect(() => {
        async function loadMessages() {
            try {
                const msgs = (await import(`../messages/${locale}.json`)).default;
                setMessages(msgs);
            } catch (error) {
                console.error("Error loading translation:", error);
            }
        }
        loadMessages();
    }, [locale]);

    const fontClass = params.locale === "th" ? ibmPlexThai.variable : consolas.className;

    if (!messages) return null;

    return (
        <html lang={params.locale as string} className={`${ibmPlexThai.variable} ${darkMode ? "dark" : ""} ${fontClass}`}>
            <body className="bg-gray-100 dark:bg-gray-900 transition-all duration-600">
                <IntlProvider locale={params.locale as string} messages={messages}>
                    <div className="flex min-h-screen">
                        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
                        <main className={`flex-1 xl:ml-64 p-6 transition-all duration-300 ${fontClass}`}>
                            {children}
                        </main>
                    </div>
                </IntlProvider>
            </body>
        </html>
    );
}
