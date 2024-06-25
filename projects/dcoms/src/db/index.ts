import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";

const { Client } = pkg;

const client = new Client({
    connectionString: "postgres://root:root@localhost:5432/pg_drizzle",
});

(async () => {
    await client.connect();
})()

export const db = drizzle(client);