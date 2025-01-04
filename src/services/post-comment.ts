import { CommentType } from "@/types/post";
import { post } from "@/utils/fetch";

export const postComment = async ({content, author_name, post_id}: CommentType) => {
  try {
    const posts = await post(
      `${process.env.API_URL ?? 'http://localhost:3030'}/comments` , {
        content, author_name, post_id
      }
    );
    return posts;
  } catch (error) {
    console.log(error);
    return Promise.resolve([]);
  }
};
