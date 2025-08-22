
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schemas.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
//'./src/app/db/schemas.ts' && './src/app/db/schemas.ts',C:\Users\HP\Desktop\projet stage\taskflow\auth-schema.ts