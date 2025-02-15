import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { PostType, CommentType } from "@/types/post";
import { getAllPosts } from "@/services";
import { PostsContext } from "@/app/posts/components/contexts/posts-context";
import { postComment } from "@/services/post-comment";

const CommentSection = styled.form`
  margin-top: 24px;
`;

interface PostDetailsModalProps {
  post: PostType;
}

const defaultComment = {
  content: "",
  author_name: "",
};

const CreateCommentForm: React.FC<PostDetailsModalProps> = ({ post }) => {
  const [formValues, setFormValues] = useState<CommentType>(defaultComment);
  const [loading, setLoading] = useState(false);
  const { setPosts } = useContext(PostsContext);

  const fetchAllPosts = async () => {
    const posts = await getAllPosts();
    setPosts(posts);
  };

  const handleAddComment = async (e: FormEvent) => {
    e.preventDefault();
    const comment: CommentType = {
      content: formValues.content,
      author_name: formValues.author_name,
    };
    if (!comment?.content?.trim()) return;

    setLoading(true);
    if (post.id) {
      await postComment({
        post_id: post.id,
        content: comment.content,
        author_name: comment.author_name,
      });
    }
    await fetchAllPosts();
    setFormValues(defaultComment);
    setLoading(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        New Comment
      </Typography>
      <CommentSection onSubmit={handleAddComment}>
        <TextField
          label="Add a Comment"
          value={formValues.content}
          onChange={handleChange}
          name="content"
          fullWidth
          required
          multiline
          rows={2}
          disabled={loading}
          variant="outlined"
        />
        <TextField
          label="Author Name"
          name="author_name"
          value={formValues.author_name}
          onChange={handleChange}
          required
          fullWidth
          disabled={loading}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          type="submit"
          style={{ marginTop: 12 }}
        >
          Submit
        </Button>
      </CommentSection>
    </>
  );
};

export default CreateCommentForm;
