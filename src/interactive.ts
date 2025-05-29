// if need multiple query run at a same time and that are interconnect then transaction query

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (tc) => {
    // run multiple query
    const getAllPost = await tc.post.findMany({
      where: {
        published: true,
      },
    });
    // query 2
    const countUser = await tc.user.count();

    // query 3
    const updateUser = await tc.user.update({
      where: {
        id: 5,
      },
      data: {
        username: "Mizanur Rahman bgc",
      },
    });

    // console.log(result);
    return {
      getAllPost,
      countUser,
      updateUser,
    };
  });
  console.log(result);
};

interactiveTransaction();
