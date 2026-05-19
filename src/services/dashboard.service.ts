import { DashboardFilters } from "@/types/dashboard.types";
import { getInsightsCollection } from "@/lib/db";
import { buildDashboardQuery } from "@/utils/query-builder";


export async function getDashboardOverview(filters?: DashboardFilters) {
    const collection = await getInsightsCollection();

    const query = buildDashboardQuery(filters || {});

    // -----------------------------
    // KPI STATS
    // -----------------------------

    const [
        totalInsights,
        averageStats,
        countries
    ] = await Promise.all([
        collection.countDocuments(query),

        collection.aggregate([
            { $match: query },

            {
                $group: {
                    _id: null,

                    averageIntensity: {
                        $avg: "$intensity"
                    },

                    averageRelevance: {
                        $avg: "$relevance"
                    }
                }
            }
        ]).toArray(),

        collection.distinct("country", {
            ...query,
            country: { $ne: null }
        })
    ]);

    // -----------------------------
    // CHART 1
    // Intensity By Sector
    // -----------------------------

    const intensityBySector = await collection.aggregate<{
        sector: string;
        averageIntensity: number;
    }>([
        { $match: query },

        {
            $match: {
                sector: { $ne: null }
            }
        },

        {
            $group: {
                _id: "$sector",

                averageIntensity: {
                    $avg: "$intensity"
                }
            }
        },

        {
            $project: {
                _id: 0,
                sector: "$_id",
                averageIntensity: {
                    $round: ["$averageIntensity", 2]
                }
            }
        },

        {
            $sort: {
                averageIntensity: -1
            }
        }
    ]).toArray();

    // -----------------------------
    // CHART 2
    // Topic Distribution
    // -----------------------------

    const topicDistribution = await collection.aggregate<{
        topic: string;
        count: number;
    }>([
        { $match: query },

        {
            $match: {
                topic: { $ne: null }
            }
        },

        {
            $group: {
                _id: "$topic",

                count: {
                    $sum: 1
                }
            }
        },

        {
            $project: {
                _id: 0,
                topic: "$_id",
                count: 1
            }
        },

        {
            $sort: {
                count: -1
            }
        },

        {
            $limit: 10
        }
    ]).toArray();

    // -----------------------------
    // CHART 3
    // Relevance Over Years
    // -----------------------------
    const relevanceOverYears = await collection.aggregate<{
        year: number;
        averageRelevance: number;
    }>([
        {
            $match: {
                $and: [
                    query,
                    {
                        end_year: {
                            $ne: null
                        },
                        relevance: {
                            $ne: null
                        }
                    }
                ]
            }
        },

        {
            $group: {
                _id: "$end_year",

                averageRelevance: {
                    $avg: "$relevance"
                }
            }
        },

        {
            $project: {
                _id: 0,
                year: "$_id",

                averageRelevance: {
                    $round: ["$averageRelevance", 2]
                }
            }
        },

        {
            $sort: {
                year: 1
            }
        }
    ]).toArray();

    // -----------------------------
    // CHART 4
    // Top Countries by Relevance
    // -----------------------------
    const topCountriesByRelevance = await collection.aggregate<{
        country: string;
        averageRelevance: number;
    }>([
        {
            $match: {
                ...query,
                country: {
                    $ne: null
                },
                relevance: {
                    $ne: null
                }
            }
        },

        {
            $group: {
                _id: "$country",

                averageRelevance: {
                    $avg: "$relevance"
                }
            }
        },

        {
            $project: {
                _id: 0,
                country: "$_id",

                averageRelevance: {
                    $round: ["$averageRelevance", 2]
                }
            }
        },

        {
            $sort: {
                averageRelevance: -1
            }
        },

        {
            $limit: 10
        }
    ]).toArray();

    // -----------------------------
    // CHART 5
    // Sector Performance based on Intensity, Relevance, Likelihood
    // -----------------------------
    const sectorPerformance = await collection.aggregate<{
        sector: string;
        averageIntensity: number;
        averageRelevance: number;
        averageLikelihood: number;
    }>([
        {
            $match: {
                ...query,
                sector: { $ne: null },
                intensity: { $ne: null },
                relevance: { $ne: null },
                likelihood: { $ne: null }
            }
        },

        {
            $group: {
                _id: "$sector",

                averageIntensity: {
                    $avg: "$intensity"
                },

                averageRelevance: {
                    $avg: "$relevance"
                },

                averageLikelihood: {
                    $avg: "$likelihood"
                }
            }
        },

        {
            $project: {
                _id: 0,

                sector: "$_id",

                averageIntensity: {
                    $round: ["$averageIntensity", 2]
                },

                averageRelevance: {
                    $round: ["$averageRelevance", 2]
                },

                averageLikelihood: {
                    $round: ["$averageLikelihood", 2]
                }
            }
        },

        {
            $sort: {
                averageIntensity: -1
            }
        },

        {
            $limit: 5
        }
    ]).toArray();

    return {
        stats: {
            totalInsights,

            averageIntensity:
                averageStats[0]?.averageIntensity?.toFixed(2) || 0,

            averageRelevance:
                averageStats[0]?.averageRelevance?.toFixed(2) || 0,

            totalCountries: countries.length
        },

        charts: {
            intensityBySector,
            topicDistribution,
            relevanceOverYears,
            topCountriesByRelevance,
            sectorPerformance
        }
    };
}
