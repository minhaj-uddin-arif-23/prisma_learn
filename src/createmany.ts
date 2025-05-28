import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const AddData = async () => {
  // const create = await prisma.user.create({
  //   data: {
  //     username: "minhaj-2",
  //     email: "minhaj2@gmail.com",
  //     role: UserRole.user,
  //   },
  // });
  // console.log(create);
  // const CreateProfile = await prisma.profile.create({
  //   data: {
  //     bio: "I am muslim",
  //     userId: 4,
  //   },
  // });
  // console.log(CreateProfile);

  // const CreateCategory = await prisma.category.create({
  //   data: {
  //     name: "Language",
  //   },
  // });
  // console.log(CreateCategory);

  const CreatePost = await prisma.post.create({
    data: {
      title: "Title 1",
      content: "Content 1",
      published: true,
      authorId: 4,
      postCategory: {
        create: {
          categoryId: 2,
          // category : {
          //   connect : {
          //     id : 4
          //   }
          // }
        },
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(CreatePost);
};
AddData();
