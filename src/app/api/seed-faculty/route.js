import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// 1. Set up the Driver Adapter exactly as Prisma demanded
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export async function GET() {
  try {
    // 2. Upsert University
    const university = await prisma.university.upsert({
      where: { id: '11111111-1111-1111-1111-111111111111' },
      update: {},
      create: {
        id: '11111111-1111-1111-1111-111111111111',
        name: 'Sikkim University',
        code: 'SU01',
        city: 'Gangtok',
        state: 'Sikkim',
        country: 'India',
      },
    });

    // 3. Upsert Department
    const department = await prisma.department.upsert({
      where: { id: '22222222-2222-2222-2222-222222222222' },
      update: {},
      create: {
        id: '22222222-2222-2222-2222-222222222222',
        name: 'Computer Science',
        universityId: university.id,
      },
    });

    // 4. Upsert User
    const user = await prisma.user.upsert({
      where: { id: '33333333-3333-3333-3333-333333333333' },
      update: {},
      create: {
        id: '33333333-3333-3333-3333-333333333333',
        email: 'faculty_test@vidyawan.com',
        role: 'FACULTY',
      },
    });

    // 5. Upsert Faculty Profile
    const profile = await prisma.facultyProfile.upsert({
      where: { id: '44444444-4444-4444-4444-444444444444' },
      update: {},
      create: {
        id: '44444444-4444-4444-4444-444444444444',
        fullName: 'Utam Pradhan',
        designation: 'Assistant Professor',
        orcid: '0000-0002-1825-0097',
        departmentId: department.id,
        userId: user.id,
      },
    });

    return NextResponse.json({ success: true, profileId: profile.id });
  } catch (error) {
    return NextResponse.json({ WE_FOUND_THE_BUG: true, errorMessage: error.message }, { status: 200 });
  }
}