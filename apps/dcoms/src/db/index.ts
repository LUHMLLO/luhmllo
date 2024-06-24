import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";

const { Client } = pkg;

const client = new Client({
    connectionString: "postgres://root:root@host:5432/pg_drizzle",
});

await client.connect();
export const db = drizzle(client);