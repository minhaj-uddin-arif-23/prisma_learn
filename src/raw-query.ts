import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  const posts = await prisma.$queryRaw`SELECT * FROM "newPostTable"`;
  // console.log(posts);
  // DELETE TABLE
  await prisma.$queryRaw`TRUNCATE TABLE "categorys" CASCADE`;
  // console.log(object);
};

rawQuery();
