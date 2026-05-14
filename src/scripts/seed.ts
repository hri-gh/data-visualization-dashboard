import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });


// import clientPromise from "@/lib/mongodb";
import data from "@/data/jsondata.json";
import { Insight } from "@/types/insight.types";
import { getInsightsCollection } from "@/lib/db";

function normalizeValue(value: unknown) {
    if (value === "") {
        return null;
    }

    return value;
}

function normalizeData(item: any): Insight {
    return {
        end_year: normalizeValue(item.end_year) as number | null,
        intensity: normalizeValue(item.intensity) as number | null,
        sector: normalizeValue(item.sector) as string | null,
        topic: normalizeValue(item.topic) as string | null,
        insight: normalizeValue(item.insight) as string | null,
        url: normalizeValue(item.url) as string | null,
        region: normalizeValue(item.region) as string | null,
        start_year: normalizeValue(item.start_year) as string | null,
        impact: normalizeValue(item.impact) as number | null,
        added: normalizeValue(item.added) as string | null,
        published: normalizeValue(item.published) as string | null,
        country: normalizeValue(item.country) as string | null,
        relevance: normalizeValue(item.relevance) as number | null,
        pestle: normalizeValue(item.pestle) as string | null,
        source: normalizeValue(item.source) as string | null,
        title: normalizeValue(item.title) as string | null,
        likelihood: normalizeValue(item.likelihood) as number | null,
    };
}

async function seedDatabase() {
    try {
        // const client = await clientPromise;

        // const db = client.db("dashboard");

        // const collection = db.collection<Insight>("insights");

        const collection = await getInsightsCollection();

        console.log("Connected to MongoDB");

        // Optional during development
        await collection.deleteMany({});

        console.log("Existing data cleared");

        const normalizedData = data.map(normalizeData);

        const result = await collection.insertMany(normalizedData);

        console.log(`${result.insertedCount} documents inserted`);
    } catch (error) {
        console.error("Seeding failed:", error);
    } finally {
        process.exit(0);
    }
}

seedDatabase();
