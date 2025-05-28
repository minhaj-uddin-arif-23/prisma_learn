import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// * [Note select query use anywhere]
const main = async () => {
  // find all data in offset based pagination
  // const findAll = await prisma.post.findMany({
  //   skip :4,
  //   take : 3
  // });
  // console.log("Off set based Pagination-> ", findAll);
  // find all data in cursor based pagination // * fast pagination
  // const findAllCursor = await prisma.post.findMany({
    // skip: 4,
  //   take: 1,
  //   cursor: {
  //     id: 35,
  //   },
  // });
  // console.log("Cursor based Pagination-> ", findAllCursor);


  // sorting

    const sortedData = await prisma.post.findMany({
      orderBy:{
        author : 'asc'
      },
      where:{
       published:false
      }
    })
  
  console.log(sortedData);



  // first value return if 2 two field is same other wise
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });
 




  // findUnique can only show data which key value is unique
  const FindUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 22,
    },
    select: {
      title: true,
      // description:true,
      author: true,
    },
  });
  // console.log(FindUnique);
  // console.log(findFirst);
};
main();
