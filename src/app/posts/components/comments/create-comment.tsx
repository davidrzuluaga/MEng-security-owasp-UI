import React, { useContext, useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { PostType, CommentType } from "@/types/post";
import { getAllPosts } from "@/services";
import { PostsContext } from "@/app/posts/components/contexts/posts-context";
import { postComment } from "@/services/post-comment";

const CommentSection = styled.div`
  margin-top: 24px;
`;

const CommentList = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CommentItem = styled.div`
  padding: 12px;
  border-radius: 8px;
  background: #f5f5f5;
`;

interface PostDetailsModalProps {
  post: PostType;
}

const CreateCommentForm: React.FC<PostDetailsModalProps> = ({ post }) => {
  const [newComment, setNewComment] = useState<string>("");
  const { setPosts } = useContext(PostsContext);

  const fetchAllPosts = async () => {
    const posts = await getAllPosts();
    setPosts(posts);
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    if (post.id)
      await postComment({
        post_id: post.id,
        content: newComment,
        author_name: "Current User",
      });

    setNewComment("");
    fetchAllPosts();
  };

  return (
    <CommentSection>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      <TextField
        label="Add a Comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        fullWidth
        multiline
        rows={2}
        variant="outlined"
      />
      <Button
        onClick={handleAddComment}
        variant="contained"
        color="primary"
        style={{ marginTop: 12 }}
      >
        Submit
      </Button>

      <CommentList>
        {post?.comments?.map?.((comment) => (
          <CommentItem key={comment.id}>
            <Typography variant="body1">{comment.content}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              - {comment.author_name}
            </Typography>
          </CommentItem>
        ))}
      </CommentList>
    </CommentSection>
  );
};

export default CreateCommentForm;
