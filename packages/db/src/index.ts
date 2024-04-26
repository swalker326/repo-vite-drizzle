import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
export * from "./drizzle/schema";
export * from "drizzle-orm";

if (!process.env.TURSO_CONNECTION_URL) {
	throw new Error("TURSO_CONNECTION_URL is not set");
}
if (!process.env.TURSO_AUTH_TOKEN) {
	throw new Error("TURSO_AUTH_TOKEN is not set");
}
const client = createClient({
	url: process.env.TURSO_CONNECTION_URL,
	authToken: process.env.TURSO_AUTH_TOKEN,
});
export const db = drizzle(client);
