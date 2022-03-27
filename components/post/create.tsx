import { useState } from "react";
import { useQueryClient } from "react-query";
import { useCreatePost } from "../../features/posts/mutations";
import { Grid, Paper, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export default function CreatePost() {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");

  const mutation = useCreatePost(
    { title: "post title", content },
    {
      onSuccess: () => {
        setContent("");
        queryClient.invalidateQueries("posts");
      },
    }
  );

  return (
    <Paper
      elevation={3}
      component="form"
      onSubmit={(e: { preventDefault: () => void }) => {
        e.preventDefault();
        mutation.mutate();
      }}
      noValidate
      sx={{ backgroundColor: "white", mb: 4, p: 2 }}
    >
      <TextField
        fullWidth
        multiline
        minRows={4}
        id="create-post"
        name="create-post"
        placeholder="What is on your mind?"
        autoFocus
        disabled={mutation.isLoading}
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <Grid container justifyContent="flex-end">
        <LoadingButton
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={content === ""}
          loading={mutation.isLoading}
        >
          Post it
        </LoadingButton>
      </Grid>
    </Paper>
  );
}
