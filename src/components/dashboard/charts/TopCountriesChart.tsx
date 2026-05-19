"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

type Props = {
    data: {
        country: string;
        averageRelevance: number;
    }[];
};

export default function TopCountriesChart({
    data,
}: Props) {
    return (
        <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{
                        top: 20,
                        right: 30,
                        left: 40,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis type="number" />

                    <YAxis
                        type="category"
                        dataKey="country"
                        width={120}
                    />

                    <Tooltip />

                    <Bar
                        dataKey="averageRelevance"
                        fill="#82ca9d"
                        radius={[0, 6, 6, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
