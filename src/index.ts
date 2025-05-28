import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const InsertData = async () => {
  const result = await prisma.post.create({
    data: {
      title: "This is title",
      description: "how to resolve this error",
      author: "Arif",
      userName: "Minhaj uddin arif",
    },
  });
  console.log(result);
};
InsertData();
