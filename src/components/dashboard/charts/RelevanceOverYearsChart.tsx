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
        // <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="year" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="averageRelevance"
                        stroke="#8884d8"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        // </div>
    );
}
