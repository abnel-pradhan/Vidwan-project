import { PrismaClient } from '../../generated/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// We use the standard PrismaClient but explicitly pass the URL 
// to prevent the Vercel build crash while letting Prisma natively handle PgBouncer!
export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;