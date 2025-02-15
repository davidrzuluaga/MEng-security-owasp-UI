"use client";
import FormModal from "@/components/posts/post-form";
import { postAPost } from "@/services/post-post";
import { PostType } from "@/types/post";
import { useContext } from "react";
import { PostsContext } from "../contexts/posts-context";
import { getAllPosts } from "@/services";

export const CreatePost = () => {
  const { setPosts } = useContext(PostsContext);

  const onSubmit = async (newPost: PostType) => {
    await postAPost(newPost);
    let posts = await getAllPosts();
    setPosts(posts);
  };
  return <FormModal submit={onSubmit} />;
};
