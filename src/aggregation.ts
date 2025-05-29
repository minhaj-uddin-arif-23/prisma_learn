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
  console.log("Average ", aggregation._avg.salary, aggregation._count.salary);
  console.log(aggregation);
};
Aggregate();
