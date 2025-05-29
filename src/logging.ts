import { PrismaClient } from "@prisma/client";

// it can help dubbuging and error in prisma

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});
prisma.$on("query", (e) => {
  console.log("Query -->", e.query);
  console.log("Duration -->", e.duration, "ms");
  console.log("Date & Time -->", e.timestamp);
  console.log("Query Params --> ", e.params);
  console.log("Query Target -->", e.target);
});

const main = async () => {
  const getAllFromDb = await prisma.user.findMany();
};
main();
