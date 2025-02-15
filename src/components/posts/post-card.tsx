"use client";
import { PostType } from "@/types/post";
import { Grid, Card } from "@mui/material";
import { useContext, useState } from "react";
import FormModal from "./post-form";
import PostDetailsModal from "./post-details";
import { patchPost } from "@/services/patch-post";
import { PostsContext } from "@/app/posts/components/contexts/posts-context";
import { getAllPosts } from "@/services";

export const PostCard = ({ post }: { post: PostType }) => {
  const [open, setOpen] = useState(false);
  const { setPosts } = useContext(PostsContext);

  const onEditSubmit = async (newPost: PostType) => {
    await patchPost(newPost);
    let posts = await getAllPosts();
    setPosts(posts);
    setOpen(false);
  };

  return (
    <Grid item xs={6} sm={2} md={1} key={post.id}>
      <PostDetailsModal open={open} setOpen={setOpen} post={post} />
      <Card>
        <div className="tools">
          <FormModal post={post} submit={onEditSubmit} />
        </div>
        <h2>{post.title}</h2>
        <p className="content">{post.content}</p>
        <p className="author">{post.author_name}</p>
        <div className="readme" onClick={() => setOpen(true)}>
          <p>Read More</p>
        </div>
      </Card>
    </Grid>
  );
};
