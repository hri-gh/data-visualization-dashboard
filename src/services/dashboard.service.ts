import { DashboardFilters } from "@/types/dashboard.types";
import { getInsightsCollection } from "@/lib/db";
import { buildDashboardQuery } from "@/utils/query-builder";


export async function getDashboardData(filters: DashboardFilters) {
    const collection = await getInsightsCollection();

    const query = buildDashboardQuery(filters);

    console.log("[Query]", query);

    const data = await collection
        .find(query)
        .limit(20)
        .toArray();

    return data;
}
