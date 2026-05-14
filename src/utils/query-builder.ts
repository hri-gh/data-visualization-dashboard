import { DashboardFilters } from "@/types/dashboard.types";

export function buildDashboardQuery(filters: DashboardFilters) {
    const query: Record<string, unknown> = {};

    // if (filters.sector) {
    //     query.sector = filters.sector;
    // }

    // if (filters.region) {
    //     query.region = filters.region;
    // }

    Object.entries(filters).forEach(([key, value]) => {
        if (value) {
            query[key] = value;
        }
    });

    return query;
}
