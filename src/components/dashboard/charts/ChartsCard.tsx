import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import IntensityBySectorChart from "./IntensityBySectorChart";
import TopicDistributionChart from "./TopicDistributionChart";
import RelevanceOverYearsChart from "./RelevanceOverYearsChart";
import TopCountriesChart from "./TopCountriesChart";
import SectorPerformanceRadarChart from "./SectorPerformanceRadarChart";

interface ChartsCardProps {
    data: {
        intensityBySector: {
            sector: string;
            averageIntensity: number;
        }[];
        topicDistribution: {
            topic: string;
            count: number;
        }[];
        relevanceOverYears: {
            year: number;
            averageRelevance: number;
        }[];
        topCountriesByRelevance: {
            country: string;
            averageRelevance: number;
        }[];
        sectorPerformance: {
            sector: string;
            averageIntensity: number;
            averageRelevance: number;
            averageLikelihood: number;
        }[];
    };
}

export default function ChartsCard({ data }: ChartsCardProps) {
    return (
        <div className="mx-3 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Bar Chart - Average Intensity by Sector (Wider: 7 cols) */}
            <Card className="lg:col-span-7 flex flex-col justify-between shadow-sm">
                <CardHeader>
                    <CardTitle className="text-base font-semibold">Average Intensity by Sector</CardTitle>
                    <CardDescription>Intensity distribution across industry sectors</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                    <IntensityBySectorChart data={data.intensityBySector} />
                </CardContent>
            </Card>

            {/* Pie / Donut Chart - Topic Distribution (Compact: 5 cols) */}
            <Card className="lg:col-span-5 flex flex-col justify-between shadow-sm">
                <CardHeader>
                    <CardTitle className="text-base font-semibold">Topic Distribution</CardTitle>
                    <CardDescription>Breakdown of top topics and occurrences</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                    <TopicDistributionChart data={data.topicDistribution} />
                </CardContent>
            </Card>

            {/* Line Chart - Relevance Over Years (Timeline: 7 cols) */}
            <Card className="lg:col-span-7 flex flex-col justify-between shadow-sm">
                <CardHeader>
                    <CardTitle className="text-base font-semibold">Relevance Over Years</CardTitle>
                    <CardDescription>Historical trend of average relevance over time</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                    <RelevanceOverYearsChart data={data.relevanceOverYears} />
                </CardContent>
            </Card>

            {/* Bar Chart - Top Countries by Relevance (Ranking: 5 cols) */}
            <Card className="lg:col-span-5 flex flex-col justify-between shadow-sm">
                <CardHeader>
                    <CardTitle className="text-base font-semibold">Top Countries by Relevance</CardTitle>
                    <CardDescription>Highest scoring countries by relevance metric</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                    <TopCountriesChart data={data.topCountriesByRelevance} />
                </CardContent>
            </Card>

            {/* Radar Chart - Sector Performance (Full-width: 12 cols) */}
            <Card className="lg:col-span-12 shadow-sm">
                <CardHeader>
                    <CardTitle className="text-base font-semibold">Sector Performance Analysis</CardTitle>
                    <CardDescription>Multi-metric comparison (Intensity, Relevance, Likelihood) across sectors</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                    <SectorPerformanceRadarChart data={data.sectorPerformance} />
                </CardContent>
            </Card>
        </div>
    );
}

