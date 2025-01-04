import { PostType } from "@/types/post";
import { get } from "@/utils/fetch";

export const getAllPosts = async () => {
  try {
    const posts = await get<{ posts: PostType[] }>(
      `${process.env.API_URL ?? 'http://localhost:3030'}/posts`
    );
    return posts?.posts;
  } catch (error) {
    console.log(error);
    return Promise.resolve([]);
  }
};
