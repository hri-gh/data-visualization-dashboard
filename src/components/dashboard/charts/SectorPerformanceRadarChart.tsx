"use client";

import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Tooltip,
    Legend,
} from "recharts";

type Props = {
    data: {
        sector: string;
        averageIntensity: number;
        averageRelevance: number;
        averageLikelihood: number;
    }[];
};

export default function SectorPerformanceRadarChart({
    data,
}: Props) {
    return (
        <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={data}>
                    <PolarGrid />

                    <PolarAngleAxis dataKey="sector" />

                    <PolarRadiusAxis />

                    <Tooltip />

                    <Legend />

                    <Radar
                        name="Intensity"
                        dataKey="averageIntensity"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.4}
                    />

                    <Radar
                        name="Relevance"
                        dataKey="averageRelevance"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.3}
                    />

                    <Radar
                        name="Likelihood"
                        dataKey="averageLikelihood"
                        stroke="#ffc658"
                        fill="#ffc658"
                        fillOpacity={0.3}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
