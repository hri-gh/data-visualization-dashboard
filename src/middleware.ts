import { NextRequest, NextResponse } from "next/server";

export function middleware(
    request: NextRequest
) {

    const accessCookie =
        request.cookies.get(
            "dashboard-access"
        );

    const pathname =
        request.nextUrl.pathname;

    const isAccessPage =
        pathname === "/access";

    if (
        !accessCookie &&
        !isAccessPage
    ) {
        return NextResponse.redirect(
            new URL("/access", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next|favicon.ico).*)",
    ],
};
