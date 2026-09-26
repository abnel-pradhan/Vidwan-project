import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/client';

// 1. Force Node.js to globally accept Supabase's self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// 2. Provide a fallback string so Next.js static builds never crash
const connectionString = process.env.DATABASE_URL || 'postgresql://dummy:dummy@dummy:5432/dummy';

// 3. Inject strict SSL bypass into the underlying 'pg' connection pool
const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;