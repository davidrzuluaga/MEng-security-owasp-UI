"use client";
import { getAllPosts } from "@/services";
import { PostsGridStyles } from "./styles";
import { Grid } from "@mui/material";
import { PostType } from "@/types/post";
import { PostCard } from "@/components/posts/post-card";
import { CreatePost } from "./create-post";
import { PostsContext } from "../contexts/posts-context";
import { useContext, useEffect, useCallback } from "react";

export function PostsGrid() {
  const { posts, setPosts } = useContext(PostsContext);

  const getPosts = useCallback(async () => {
    let posts = await getAllPosts();
    setPosts(posts);
  }, [setPosts]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <PostsGridStyles>
      <CreatePost />
      <Grid container spacing={1} columns={5}>
        {posts?.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </Grid>
    </PostsGridStyles>
  );
}
