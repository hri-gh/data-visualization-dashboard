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
        <div className="w-full h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                    <PolarGrid />

                    <PolarAngleAxis dataKey="sector" tick={{ fontSize: 11 }} />

                    <PolarRadiusAxis tick={{ fontSize: 10 }} />

                    <Tooltip />

                    <Legend wrapperStyle={{ paddingTop: "10px", fontSize: "12px" }} />

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
