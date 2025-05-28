import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  // const andFiltering = await prisma.post.findMany({
  //   where: {
  //     AND: [
  //       {
  //         title: {
  //           contains: "1",
  //         },
  //       },
  //       {
  //         published: true,
  //       },
  //     ],
  //   },
  // });
  // console.log(andFiltering);
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "Content",
          },
        },
        {
          published: false,
        },
      ],
    },
  });
  console.log(orFiltering);
};
filtering();
