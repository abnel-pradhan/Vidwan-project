const { PrismaClient } = require('./src/generated/client');
const prisma = new PrismaClient();

async function main() {
  console.log("⏳ Starting database population...");

  // 1. Create University (Added required location fields!)
  const university = await prisma.university.create({
    data: { 
        name: "Sikkim University", 
        code: "SU01",
        city: "Gangtok",
        state: "Sikkim",
        country: "India"
    }
  });
  console.log("✅ University created");

  // 2. Create Department
  const department = await prisma.department.create({
    data: { name: "Computer Science", universityId: university.id }
  });
  console.log("✅ Department created");

  // 3. Create User Account
  const user = await prisma.user.create({
    data: { email: "abnel@example.com", role: "FACULTY" }
  });
  console.log("✅ User created");

  // 4. Create Faculty Profile
  const faculty = await prisma.facultyProfile.create({
    data: {
      fullName: "Abnel Pradhan",
      designation: "Faculty",
      departmentId: department.id,
      userId: user.id,
      orcid: "0000-0002-1825-0097" // Testing ORCID
    }
  });
  
  console.log("✅ Faculty Profile created successfully!");
  console.log("--------------------------------------------------");
  console.log("🚀 COPY THIS FACULTY ID FOR YOUR URL:", faculty.id);
  console.log("--------------------------------------------------");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });