import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql',
	out: './drizzle',
	schema: 'src/pages/workbench/docms/_lib/db/schemas/*.ts',
	strict: true,
	verbose: true,
});