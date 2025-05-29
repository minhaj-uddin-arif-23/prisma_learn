import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const batch = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "Sakil-3 ",
      email: "sakil222@gmail.com",
    },
  });
  const updatedUser = prisma.user.update({
    where: {
      id: 5,
    },
    data: {
      username: "Sakil ph2",
      age: 29,
    },
  });
  const [dataCreatede, updateUser] = await prisma.$transaction([
    createUser,
    updatedUser,
  ]);
  console.log(dataCreatede, updateUser);
};
batch();
