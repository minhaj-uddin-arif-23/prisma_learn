import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// * [Note select query use anywhere]
const main = async () => {
  // find all data
  // const findAll = await prisma.post.findMany();
  // first value return if 2 two field is same other wise
  // const findFirst = await prisma.post.findFirstOrThrow({
  //   where: {
  //     published:false,
  //   },
  // });
  // console.log(findFirst);
  // findUnique can only show data which key value is unique
  const FindUnique = await prisma.post.findUniqueOrThrow({
    where: { 
      id: 22,
    },
    select:{
      title:true,
      // description:true,
      author:true
    }
  });
  console.log(FindUnique);
  // console.log(findFirst);
  // console.log("All data", result);
};
main();
