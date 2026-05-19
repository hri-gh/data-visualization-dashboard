
import { getDashboardOverview } from "@/services/dashboard.service";
import { getDashboardFilters } from "@/services/dashboard-filter.service";
import DashboardClient from "@/components/dashboard/DashboardClient";


interface DashboardPageProps {
    searchParams: Promise<{
        end_year?: number;
        topic?: string;
        sector?: string;
        region?: string;
        pestle?: string;
        source?: string;
        country?: string;
    }>;
}

export default async function Dashboard({ searchParams }: DashboardPageProps) {
    const filters = await searchParams

    const dashboardData = await getDashboardOverview(filters);

    const filterOptions = await getDashboardFilters();

    return (
        <>
            <div className="font-bold text-3xl p-4">
                Dashboard
            </div>


            <DashboardClient
                dashboardData={dashboardData}
                filterOptions={filterOptions}
            />
        </>
    );
}


