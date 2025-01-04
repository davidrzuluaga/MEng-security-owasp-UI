"use client"
import { PostType } from "@/types/post";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

const PostsContext = createContext({} as PostsState);

type PostsState = {
  posts: PostType[];
  setPosts: Dispatch<SetStateAction<PostType[]>>;
};

const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState([] as PostType[]);

  const PostsState: PostsState = {
    setPosts,
    posts,
  };

  return (
    <PostsContext.Provider value={PostsState}>{children}</PostsContext.Provider>
  );
};

export { PostsProvider, PostsContext };
