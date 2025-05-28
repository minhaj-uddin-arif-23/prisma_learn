import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationQuery = async () => {
  const findUserToPost = await prisma.user
    .findUniqueOrThrow({
      where: {
        id: 4,
      },
    })
    .post();
  console.log("user data->", findUserToPost);
};
relationQuery();
