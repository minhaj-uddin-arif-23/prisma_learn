import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "1",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
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
  // console.log(orFiltering);
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          published: true,
        },
      ],
    },
  });
  // console.log("Not Filtering", notFiltering);
  const startwith = await prisma.user.findMany({
    where: {
      email: {
        contains: "2",
      },
    },
  });
  // console.log(startwith);

  const userNameArray = ["minhaj", "minhaj2"];
  const userNameByarray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });
  // console.log(userNameByarray);

  const inDepthRelationData = await prisma.user.findMany({
    where: {
      id: 4,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: {
                include: {
                  postCategory: true,
                },
              },
            },
          },
        },
      },
    },
  });

  console.dir(inDepthRelationData, { depth: Infinity });
};
filtering();
