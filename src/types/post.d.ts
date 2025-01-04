export type PostType = {
  id?: number;
  title: string;
  post: string;
  author_name: string;
  comments?: CommentType[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export type CommentType = {
  id?: number;
  content: string;
  author_name: string;
  post_id: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

