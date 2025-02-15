import React, { useContext } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { PostType } from "@/types/post";
import FormModal from "./post-form";
import { patchPost } from "@/services/patch-post";
import { getAllPosts } from "@/services";
import { PostsContext } from "@/app/posts/components/contexts/posts-context";
import CreateCommentForm from "@/components/comments/create-comment";
import AllCommentsOfPost from "../comments/all-comments-post";

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 16px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

interface PostDetailsModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  post: PostType;
}

const PostDetailsModal: React.FC<PostDetailsModalProps> = ({
  open,
  setOpen,
  post,
}) => {
  const { setPosts } = useContext(PostsContext);

  const onClose = () => setOpen(false);

  const fetchAllPosts = async () => {
    const posts = await getAllPosts();
    setPosts(posts);
  };

  const onEditSubmit = async (newPost: PostType) => {
    await patchPost(newPost);
    fetchAllPosts();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledBox>
        <FormModal post={post} submit={onEditSubmit} />
        <Typography variant="h5" component="h2" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {post.content}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Author: {post.author_name}
        </Typography>

        <AllCommentsOfPost comments={post?.comments || []} />
        <CreateCommentForm post={post} />

        <ButtonContainer>
          <Button onClick={onClose} variant="outlined" color="secondary">
            Close
          </Button>
        </ButtonContainer>
      </StyledBox>
    </Modal>
  );
};

export default PostDetailsModal;
