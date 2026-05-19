"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"


interface IntensityChartProps {
    data: Array<{
        sector: string;
        averageIntensity: number;
    }>;
}

const chartData = [
    {
        sector: "Information Technology",
        averageIntensity: 14.13
    },
    {
        sector: "Security",
        averageIntensity: 14
    },
    {
        sector: "Tourism & hospitality",
        averageIntensity: 12
    },
    {
        sector: "Food & agriculture",
        averageIntensity: 11.89
    },
    {
        sector: "Financial services",
        averageIntensity: 11.1
    },
    {
        sector: "Support services",
        averageIntensity: 10.75
    },
    {
        sector: "Energy",
        averageIntensity: 10.24
    },
    {
        sector: "Manufacturing",
        averageIntensity: 10.23
    },
    {
        sector: "Healthcare",
        averageIntensity: 10
    },
    {
        sector: "Government",
        averageIntensity: 9.59
    },
    {
        sector: "Media & entertainment",
        averageIntensity: 9.5
    },
    {
        sector: "Retail",
        averageIntensity: 8.97
    },
    {
        sector: "Transport",
        averageIntensity: 8.4
    },
    {
        sector: "Aerospace & defence",
        averageIntensity: 8.26
    },
    {
        sector: "Construction",
        averageIntensity: 8.25
    },
    {
        sector: "Automotive",
        averageIntensity: 7.33
    },
    {
        sector: "Environment",
        averageIntensity: 5.21
    },
    {
        sector: "Water",
        averageIntensity: 4.33
    }
]

const chartConfig: ChartConfig = {
    averageIntensity: {
        label: "Average Intensity",
        // color: "hsl(var(--chart-1))",
        color: "#60a5fa",
    },
}


export default function IntensityBySectorChart({ data }: IntensityChartProps) {
    return (
        <div className="h-125 w-full">
            {/* <ChartContainer config={chartConfig} > */}
            <ResponsiveContainer width="100%" height={600}>
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

                    <XAxis
                        type="number"
                    />

                    <YAxis
                        type="category"
                        dataKey="sector"
                        width={180}
                    />

                    <Tooltip />

                    <Bar
                        dataKey="averageIntensity"
                        radius={[0, 6, 6, 0]}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill="#8884d8"
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            {/* </ChartContainer> */}
        </div>
    );
}
// export default IntensityChart
