
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import type { QueryResult } from 'pg';
import { db } from ".."
import { packageType } from './enums';


// table declaration
export const packages = pgTable('packages', {
    id: serial('id').primaryKey(),
    code: varchar('code', { length: 10 }).unique().notNull(),
    name: varchar('name', { length: 59 }).unique().notNull(),
    type: packageType('undefined').notNull(),
});

// type declarations
export type Package = typeof packages.$inferSelect;
export type NewPackage = typeof packages.$inferInsert;

// methods declarations
export async function insertNewPackage(
    user: NewPackage
): Promise<QueryResult<Package[]>> {
    return db.insert(packages).values(user);
}

export async function getAllUsers(): Promise<Package[]> {
    return await db.select().from(packages);
}

export async function getUserById(id: number): Promise<Package[]> {
    return await db
        .select()
        .from(packages)
        .where(sql`${packages.id} = ${id}`);
}

function packageTypeEnum(arg0: string) {
    throw new Error('Function not implemented.');
}
