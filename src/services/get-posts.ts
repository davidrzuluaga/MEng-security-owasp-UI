import { PostType } from "@/types/post";
import { get } from "@/utils/fetch";

export const getAllPosts = async () => {
  try {
    return get(`${process.env.API_URL}/posts`);
  } catch (error) {
    console.log(error);
  }
};
