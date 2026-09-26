import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// 1. Give Next.js a fallback string during static builds so the compiler never crashes
const connectionString = process.env.DATABASE_URL || 'postgresql://dummy:dummy@dummy:5432/dummy';

// 2. We let the 'pg' library handle the SSL natively via the Vercel URL
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;