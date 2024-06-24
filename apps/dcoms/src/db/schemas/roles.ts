import { pgEnum, pgTable, serial, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum('role', ['technician', 'administrator', 'root']);

export const roles = pgTable('roles', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
}, (roles) => {
    return {
        nameIndex: uniqueIndex('name_idx').on(roles.name),
    }
});