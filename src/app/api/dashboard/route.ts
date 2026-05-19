import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api/response";
import { handleError } from "@/lib/errors/handle-error";

import { getDashboardOverview } from "@/services/dashboard.service";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;

        // console.log("[Search params]", searchParams)

        const filters = {
            end_year: searchParams.get("end_year") ? Number(searchParams.get("end_year")) : undefined,
            topic: searchParams.get("topic") || undefined,
            sector: searchParams.get("sector") || undefined,
            region: searchParams.get("region") || undefined,
            pestle: searchParams.get("pestle") || undefined,
            source: searchParams.get("source") || undefined,
            country: searchParams.get("country") || undefined,
        };

        // console.log("[Filters]", filters)
        const data = await getDashboardOverview(filters);

        return ApiResponse.success(data);

    } catch (error) {
        return handleError(error);
    }
}
