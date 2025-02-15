import { CommentType } from "@/types/post";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

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

interface AllCommentsOfPostProps {
  comments: CommentType[];
}

const AllCommentsOfPost: React.FC<AllCommentsOfPostProps> = ({ comments }) => {
  return (
    <CommentList>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      {comments?.map?.((comment) => (
        <CommentItem key={comment.id}>
          <Typography variant="body1">{comment.content}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            - {comment.author_name}
          </Typography>
        </CommentItem>
      ))}
    </CommentList>
  );
};

export default AllCommentsOfPost;
