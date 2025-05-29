import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DeleteData = async () => {
  // const DeleteResult = await prisma.post.delete({
  //  where:{
  //   id:6
  //  }
  // });
  // console.log(DeleteResult);
  const DeleteResultMany = await prisma.post.deleteMany({
    where: {
      // author : "Arif"
    },
  });
  console.log(DeleteResultMany);
};
DeleteData();
