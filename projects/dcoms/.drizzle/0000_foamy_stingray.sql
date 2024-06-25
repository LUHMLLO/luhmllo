DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('technician', 'administrator', 'root');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "roles" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(59),
	"phone" varchar(15),
	"technician" "role",
	CONSTRAINT "users_name_unique" UNIQUE("name"),
	CONSTRAINT "users_phone_unique" UNIQUE("phone")
);
