"use client";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";

type Props = {
    data: {
        topic: string;
        count: number;
    }[];
};

const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#0088fe",
    "#00c49f",
    "#ffbb28",
    "#ff6666",
    "#a28cff",
    "#ff99cc",
];

const data = [
    {
        "count": 403,
        "topic": "oil"
    },
    {
        "count": 89,
        "topic": "gas"
    },
    {
        "count": 51,
        "topic": "growth"
    },
    {
        "count": 43,
        "topic": "energy"
    },
    {
        "count": 38,
        "topic": "export"
    },
    {
        "count": 35,
        "topic": "production"
    },
    {
        "count": 20,
        "topic": "economy"
    },
    {
        "count": 19,
        "topic": "market"
    },
    {
        "count": 11,
        "topic": "power"
    },
    {
        "count": 9,
        "topic": "economic growth"
    }
]

export default function TopicDistributionChart({ data }: Props) {
    return (
        // <div className="h-125 w-full">
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="count"
                    nameKey="topic"
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={3}
                >
                    {data.map((_, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={
                                COLORS[index % COLORS.length]
                            }
                        />
                    ))}
                </Pie>

                <Tooltip />

                <Legend />
            </PieChart>
        </ResponsiveContainer>
        // </div>
    );
}
