import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api/response";
import { handleError } from "@/lib/errors/handle-error";

import { getDashboardFilters } from "@/services/dashboard-filter.service";

export async function GET(request: NextRequest) {
    try {
        const filters = await getDashboardFilters();

        return ApiResponse.success(filters);

    } catch (error) {
        return handleError(error);
    }
}
