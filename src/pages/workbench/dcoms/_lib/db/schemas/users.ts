
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import type { QueryResult } from 'pg';
import { roleEnum } from './roles';
import { db } from ".."


// table declaration
export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 59 }).unique(),
	phone: varchar('phone', { length: 15 }).unique(),
	role: roleEnum('technician'),
});

// type declarations
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

// methods declarations
export async function insertNewUser(
	user: NewUser
): Promise<QueryResult<User[]>> {
	return db.insert(users).values(user);
}

export async function getAllUsers(): Promise<User[]> {
	return await db.select().from(users);
}

export async function getUserById(id: number): Promise<User[]> {
	return await db
		.select()
		.from(users)
		.where(sql`${users.id} = ${id}`);
}