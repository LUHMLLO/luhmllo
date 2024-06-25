
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import type { QueryResult } from 'pg';
import { db } from ".."
import { userRole } from './enums';


// table declaration
export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 59 }).unique().notNull(),
	phone: varchar('phone', { length: 15 }).unique().notNull(),
	email: varchar('email', { length: 59 }).unique().notNull(),
	role: userRole('technician').notNull(),
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

export async function getUsers(column?: string, value?: unknown): Promise<User[]> {
	if (!column) {
		return await db.select().from(users);
	}
	return await db
		.select()
		.from(users)
		.where(sql`${users[column]} = ${value}`);
}

export async function updateUserWhere(id: string, values: {}): Promise<QueryResult<User[]>> {
	return await db
		.update(users)
		.set({ ...values })
		.where(sql`${users.id} = ${id}`);
}

export async function deleteUserWhere(column: string, value: unknown): Promise<QueryResult<User[]>> {
	return await db
		.delete(users)
		.where(sql`${users[column]} = ${value}`);
}