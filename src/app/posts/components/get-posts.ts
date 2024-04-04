import { UserType } from "@/types";

export const getAllPosts = async () => {
  let posts = [] as UserType[];
  try {
    /*const allUsers = await allUsersService();
      posts = allUsers;*/
  } catch (error) {
    console.log(error);
    posts = [
      {
        id: 1,
        firstName: "juan",
        lastName: "velez",
        email: "juanvelez",
        dateOfBirth: "2000-02-12",
        userRole: "EMPLOYEE",
      },
      {
        id: 2,
        firstName: "juan",
        lastName: "velez",
        email: "juanvelezhola",
        dateOfBirth: "2000-02-12",
        userRole: "EMPLOYEE",
      },
    ];
  } finally {
    return posts;
  }
};
