import { getInsightsCollection } from "@/lib/db";

export async function getDashboardFilters() {
    const collection = await getInsightsCollection();

    const [
        sectors,
        topics,
        countries,
        regions,
        pestles,
        sources,
        swots,
        years,
    ] = await Promise.all([
        collection.distinct("sector"),

        collection.distinct("topic"),

        collection.distinct("country"),

        collection.distinct("region"),

        collection.distinct("pestle"),

        collection.distinct("source"),

        collection.distinct("swot"),

        collection.distinct("end_year"),
    ]);

    return {
        sectors: cleanArray(sectors),

        topics: cleanArray(topics),

        countries: cleanArray(countries),

        regions: cleanArray(regions),

        pestles: cleanArray(pestles),

        sources: cleanArray(sources),

        swots: cleanArray(swots),

        years: cleanArray(years).sort(),
    };
}

function cleanArray(values: unknown[]) {
    return values.filter(
        (value) =>
            value !== null &&
            value !== undefined &&
            value !== ""
    );
}
