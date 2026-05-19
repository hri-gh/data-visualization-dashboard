import clientPromise from "./mongodb";
import type { Insight } from "@/types/insight.types";

export async function getDatabase() {
    const client = await clientPromise;
    const db = client.db("dashboard");
    console.log("##Database Connected##");
    return db;
}

export async function getInsightsCollection() {
    const db = await getDatabase();
    return db.collection<Insight>("insights");
}
