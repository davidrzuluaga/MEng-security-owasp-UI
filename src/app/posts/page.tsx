import styled from "@emotion/styled";
import PostsTable from "./components/posts-table";
import { Suspense } from "react";

const HomeStyles = styled.div`
  color: #fff;
  .DataCard {
    min-height: 80vh;
    min-width: 700px;
    background-color: black;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    padding: 20px;
  }
`;

export default function Home() {
  return (
    <HomeStyles>
      <div className="DataCard">
        <h1>All Posts</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <PostsTable />
        </Suspense>
      </div>
    </HomeStyles>
  );
}
