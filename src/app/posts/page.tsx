import PostsGrid from "./components/posts-grid";
import { Suspense } from "react";
import { HomeStyles } from "./styles";

export default function Home() {
  return (
    <HomeStyles>
      <div className="DataCard">
        <h1>All Posts</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <PostsGrid />
        </Suspense>
      </div>
    </HomeStyles>
  );
}
