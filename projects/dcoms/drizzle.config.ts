import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql',
	out: './.drizzle',
	schema: 'src/db/schemas/*.ts',
	strict: true,
	verbose: true,
	dbCredentials: {
		url: "postgres://root:root@localhost:5432/pg_drizzle"
	}
});