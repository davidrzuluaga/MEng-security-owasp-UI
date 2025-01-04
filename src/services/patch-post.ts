import { PostType } from "@/types/post";
import { patch } from "@/utils/fetch";

export const patchPost = async ({ id, title, post, author_name }: PostType) => {
  try {
    const posts = await patch(
      `${process.env.API_URL ?? "http://localhost:3030"}/posts/${id}`,
      {
        title,
        post,
        author_name,
      }
    );
    return posts;
  } catch (error) {
    console.log(error);
    return Promise.resolve([]);
  }
};
