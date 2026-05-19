"use client";

import { useActionState } from "react";
import { verifyAccessCode } from "@/actions/access.actions";

import { Button } from "@/components/ui/button";

export default function AccessPage() {
    const [state, formAction, isPending] = useActionState(
        async (prevState: any, formData: FormData) => {
            return await verifyAccessCode(formData);
        },
        null
    );

    return (
        <div className="w-full max-w-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl border p-8 shadow-sm">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">Data Visualization Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                    Enter the access code
                </p>
            </div>

            <form action={formAction} className="mt-6 space-y-4">
                <input
                    type="password"
                    name="code"
                    placeholder="Enter 6-digit code"
                    className="w-full rounded-md border px-3 py-2 outline-none"
                    required
                />

                {state?.error && (
                    <p className="text-sm text-red-500">{state.error}</p>
                )}

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full rounded-md bg-primary py-2 text-white disabled:opacity-50"
                >
                    {isPending ? "Verifying..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
