export type CommentType = {
  id: number;
  content: string;
  author_name: string;
  post_id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};