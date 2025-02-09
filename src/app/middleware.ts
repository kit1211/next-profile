import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n"; // ใช้ค่าภาษา


export function middleware(request: NextRequest) {
    const locale = localStorage.getItem("locale");
    const { pathname } = request.nextUrl;

    if (pathname === "/") {
        return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }

    const pathLocale = pathname.split("/")[1];
    if (!locales.includes(pathLocale)) {
        return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/(en|th)/:path*"], // รองรับ "/en", "/th"
};
