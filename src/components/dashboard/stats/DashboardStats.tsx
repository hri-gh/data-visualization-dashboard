import StatCard from "@/components/shared/StatCard";
import { Map, ChartNoAxesColumnIncreasing, ChartBarDecreasing, ChartLine } from "lucide-react";

interface DashboardStatsProps {
    data: {
        totalInsights: number;
        averageIntensity: number;
        averageRelevance: number;
        totalCountries: number;
    };
}

export default function DashboardStats({ data }: DashboardStatsProps) {
    return (
        <div className="mx-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard    
                title="Total Insights" 
                value={data.totalInsights}
                className="border-l-4 border-l-amber-500"
                icon={<ChartNoAxesColumnIncreasing className="text-amber-500" />}

            />

            <StatCard title="Avg. Intensity" value={data.averageIntensity}
                className="border-l-4 border-l-blue-500"
                icon={<ChartBarDecreasing className=" text-blue-500" />}
            />

            <StatCard title="Avg. Relevance" value={data.averageRelevance}
                className="border-l-4 border-l-green-500"
                icon={<ChartLine className=" text-green-500" />}
            />

            <StatCard title="Total Countries" value={data.totalCountries}
                className="border-l-4 border-l-gray-500"
                icon={<Map className=" text-gray-500" />}
            />
        </div>
    );
}
