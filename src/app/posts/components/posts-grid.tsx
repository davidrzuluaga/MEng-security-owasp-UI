import { getAllPosts } from "@/services";
import { PostsGridStyles } from "./styles";
import { Grid, Card } from "@mui/material";

export default async function PostsGrid() {
  const posts = await getAllPosts();
  console.log(posts)
  return (
    <PostsGridStyles>
      <Grid container spacing={1} columns={5}>
        {posts.map((post) => (
          <Grid item xs={6} sm={2} md={1} key={post.id}>
            <Card>
              <h2>{post.title}</h2>
              <p className="content">{post.post}</p>
              <p className="author">{post.author_name}</p>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PostsGridStyles>
  );
}
