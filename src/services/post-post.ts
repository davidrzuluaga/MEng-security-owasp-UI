import { PostType } from "@/types/post";
import { post as postAPI } from "@/utils/fetch";

export const postAPost = async ({title, content, author_name}: PostType) => {
  try {
    const posts = await postAPI(
      `${process.env.API_URL ?? 'http://localhost:3030'}/posts` , {
        title, content, author_name
      }
    );
    return posts;
  } catch (error) {
    console.log(error);
    return Promise.resolve([]);
  }
};
