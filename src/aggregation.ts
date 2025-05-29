import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Aggregate = async () => {
  const aggregation = await prisma.user.aggregate({
    _avg: {
      salary: true,
    },
    where: {
      username: {
        contains: "minhaj-2",
      },
    },
    _count: {
      salary: true,
    },
    orderBy: {
      salary: "desc",
    },
  });
  // console.log("Average ", aggregation._avg.salary, aggregation._count.salary);
  // console.log(aggregation);
  const sum = await prisma.user.aggregate({
    _sum: {
      salary: true,
    },
  });
  // specific column field or row count
  const count = await prisma.user.aggregate({
    _count: {
      username: true,
    },
  });
  console.log("Count ->", count);
  // find numbr of records
  const countData = await prisma.user.count();
  // console.log(countData);
  const maximum = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  // console.log(maximum);
  const minimum = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  // console.log(minimum);
};
Aggregate();
