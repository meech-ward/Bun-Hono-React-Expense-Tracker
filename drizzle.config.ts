import type { Config } from 'drizzle-kit';

export default {
  schema: './server/db/schema/*',
  out: './drizzle',
  driver: 'pg', 
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!
  },
} satisfies Config;