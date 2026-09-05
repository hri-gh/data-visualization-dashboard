"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

interface Props {
    data: Array<{
        year: number;
        averageRelevance: number;
    }>;
};

export default function RelevanceOverYearsChart({
    data,
}: Props) {
    return (
        <div className="w-full h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 15,
                        right: 30,
                        left: 10,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="year" tick={{ fontSize: 12 }} />

                    <YAxis tick={{ fontSize: 12 }} />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="averageRelevance"
                        stroke="#8884d8"
                        strokeWidth={2.5}
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
