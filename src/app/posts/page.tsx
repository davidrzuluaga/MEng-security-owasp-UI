"use client"
import { PostsGrid } from "./components/posts/posts-grid";
import { Suspense } from "react";
import { HomeStyles } from "./styles";
import { PostsProvider } from "./components/contexts/posts-context";

export default function Home() {
  return (
    <PostsProvider>
      <HomeStyles>
        <div className="DataCard">
          <h1>All Posts</h1>
          <Suspense fallback={<p>Loading...</p>}>
            <PostsGrid />
          </Suspense>
        </div>
      </HomeStyles>
    </PostsProvider>
  );
}
