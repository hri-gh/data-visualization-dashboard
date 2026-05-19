"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function verifyAccessCode(
    formData: FormData
) {

    const code = formData.get("code");

    if (
        code !== process.env.ACCESS_CODE
    ) {
        return {
            error: "Invalid access code",
        };
    }

    const cookieStore = await cookies();

    cookieStore.set(
        "dashboard-access",
        "granted",
        {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        }
    );

    redirect("/");
}
