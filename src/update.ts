import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Update = async () => {
  // const result = await prisma.post.update({
  //   where : {
  //     id: 6
  //   },
  //   data: {
  //     title: "C++",

  //   },
  // });
  // update many
  //  const result2 = await prisma.post.updateMany({
  //   where : {
  //     id:10
  //   },
  //   data: {
  //    author:"John "

  //   },
  // });
  //
  // console.log(result2);
  // upsert
  const Upsert = await prisma.post.upsert({
    where: {
      id: 2,
    },
    update: {
      title: "Hello Title -1",
    },
    create: {
      title: "auto title 1",
      content: "auto content 1",
      authorId: 1,
      published: true,
    },
  });
  console.log(Upsert);
};
Update();
