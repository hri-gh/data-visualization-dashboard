import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
};

export default function ChartsCard({ data }: ChartsCardProps) {
    // console.log("@@ ChartsCard Data : ", data);
    return (
        <div>
            <div className="mx-3 grid grid-cols-1 lg:grid-cols-2 gap-4">


                <Card>
                    <CardHeader>
                        <CardTitle className="text-center font-bold">Average Intensity by Sector</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <IntensityBySectorChart data={data.intensityBySector} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-center font-bold">Topic Distribution</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <TopicDistributionChart data={data.topicDistribution} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-center font-bold">Relevance Over Years</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <RelevanceOverYearsChart data={data.relevanceOverYears} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-center font-bold">Top Countries by Relevance</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <TopCountriesChart data={data.topCountriesByRelevance} />
                    </CardContent>
                </Card>

            </div>

            <Card className="m-3">
                <CardHeader>
                    <CardTitle className="text-center font-bold">Sector Performance</CardTitle>
                </CardHeader>

                <CardContent>
                    <SectorPerformanceRadarChart data={data.sectorPerformance} />
                </CardContent>
            </Card>


        </div>
    );
}
