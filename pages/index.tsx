import { useState } from "react";
import { Container, Grid, Stack, Pagination } from "@mui/material";
import { usePosts } from "../features/posts/queries";
import Post from "../components/post/item";
import CreatePost from "../components/post/create";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isFetched } = usePosts(page);
  console.log(data?.data);

  return (
    <Container sx={{ py: 8, backgroundColor: "lavender" }} maxWidth="md">
      <CreatePost />
      <Grid container direction="column" spacing={4}>
        {data?.data?.results.map((post: any) => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>
      {isFetched ? (
        <Pagination
          sx={{ py: 2 }}
          count={data?.data.totalPages}
          page={page}
          onChange={(e, page) => setPage(page)}
        />
      ) : null}
    </Container>
  );
}
