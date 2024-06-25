import { pgEnum } from "drizzle-orm/pg-core";

export const userRole = pgEnum('user_role', ['technician', 'administrator']);

export const packageType = pgEnum('package_type', ['residential', 'commercial', 'undefined']);