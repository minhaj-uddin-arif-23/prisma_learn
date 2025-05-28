import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationQuery = async () => {
  //  fluent api
  const findUserToPost = await prisma.user
    .findUniqueOrThrow({
      where: {
        id: 4,
      },
    })
    .post();
  // console.log("user data->", findUserToPost);

  //  relational filter

  const userToPostSpecific = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(userToPostSpecific, { depth: Infinity });
};
relationQuery();
