import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import { PostType } from "@/types/post";

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 16px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface FormModalProps {
  post?: PostType;
  submit: (post: PostType) => void;
}

const defaultPost = {
  title: "",
  content: "",
  author_name: "",
};

const FormModal = (props: FormModalProps) => {
  const { post = {} as PostType, submit } = props;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<PostType>(defaultPost);

  useEffect(() => {
    if (post?.id) {
      setFormValues(post);
    }
  }, [post]);

  const handleClose = (): void => setOpen(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    await submit(formValues);
    setLoading(false);
    setFormValues(defaultPost);
    handleClose();
  };

  const modalName = !!post?.id ? "Edit Post" : "Create Post";

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained" color="primary">
        {modalName}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <StyledBox>
          <h2>{modalName}</h2>
          <StyledForm onSubmit={handleSubmit}>
            <TextField
              label="Title"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              required
              fullWidth
              disabled={loading}
            />
            <TextField
              label="Post"
              name="content"
              value={formValues.content}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={4}
              disabled={loading}
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
              disabled={loading}
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
            <Button onClick={handleClose} variant="outlined" color="secondary">
              Cancel
            </Button>
          </StyledForm>
        </StyledBox>
      </Modal>
    </>
  );
};

export default FormModal;
