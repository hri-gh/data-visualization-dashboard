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
        <div className="w-full h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{
                        top: 15,
                        right: 30,
                        left: 10,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />

                    <XAxis type="number" tick={{ fontSize: 12 }} />

                    <YAxis
                        type="category"
                        dataKey="country"
                        width={110}
                        tick={{ fontSize: 12 }}
                    />

                    <Tooltip />

                    <Bar
                        dataKey="averageRelevance"
                        fill="#10b981"
                        radius={[0, 4, 4, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
