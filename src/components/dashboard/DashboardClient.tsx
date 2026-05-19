
import ChartsCard from "@/components/dashboard/charts/ChartsCard";
import DashboardStats from "@/components/dashboard/stats/DashboardStats";
import DashboardFilter from "../filters/DashboardFilter";

type Props = {
    dashboardData: any;
    filterOptions: any;
};

export default function DashboardClient({
    dashboardData,
    filterOptions,
}: Props) {
    return (
        <>
            <div>
                <DashboardStats data={dashboardData.stats} />
            </div>

            <div className="space-y-8">

                {/* FILTERS */}

                <div className="flex flex-wrap gap-4 justify-center">
                    <DashboardFilter
                        label="End Year"
                        queryKey="end_year"
                        options={filterOptions.years.map(String)}
                    />

                    <DashboardFilter
                        label="Sector"
                        queryKey="sector"
                        options={filterOptions.sectors}
                    />

                    <DashboardFilter
                        label="Topic"
                        queryKey="topic"
                        options={filterOptions.topics}
                    />

                    <DashboardFilter
                        label="Country"
                        queryKey="country"
                        options={filterOptions.countries}
                    />

                    <DashboardFilter
                        label="Region"
                        queryKey="region"
                        options={filterOptions.regions}
                    />

                    <DashboardFilter
                        label="PESTLE"
                        queryKey="pestle"
                        options={filterOptions.pestles}
                    />

                    <DashboardFilter
                        label="Source"
                        queryKey="source"
                        options={filterOptions.sources}
                    />

                    {/* <DashboardFilter
                        label="SWOT"
                        queryKey="swot"
                        options={filterOptions.swots}
                    /> */}

                </div>

                {/* CHARTS */}
                <ChartsCard data={dashboardData.charts} />

                {/* <SectorPerformanceRadarChart
                data={
                    dashboardData.charts
                        .sectorPerformance
                }
            /> */}
            </div>
        </>
    );
}
