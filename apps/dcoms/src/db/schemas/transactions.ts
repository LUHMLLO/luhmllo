import { sql } from "drizzle-orm";
import { integer, pgTable, uuid } from "drizzle-orm/pg-core";

export const transactions = pgTable('transactions', {
  id: uuid('uuid2').default(sql`gen_random_uuid()`),
});