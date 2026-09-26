import "dotenv/config";
import { defineConfig, env } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // We use DIRECT_URL here so Supabase allows the table creation
    url: env("DIRECT_URL"), 
  },
});