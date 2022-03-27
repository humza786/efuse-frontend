import { useState } from "react";
import { IconButton, OutlinedInput, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useQueryClient } from "react-query";
import { useCreateComment } from "../../features/comments/mutations";
import CircularProgress from "@mui/material/CircularProgress";

interface PostProps {
  post: string;
}

export default function CreateComment({ post }: PostProps) {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");

  const mutation = useCreateComment(
    { post, content },
    {
      onSuccess: () => {
        setContent("");
        queryClient.invalidateQueries("posts");
      },
    }
  );

  return (
    <OutlinedInput
      placeholder="Please enter text"
      size="small"
      multiline
      fullWidth
      sx={{ borderRadius: "50px" }}
      value={content}
      onChange={(event) => setContent(event.target.value)}
      endAdornment={
        <InputAdornment position="end">
          {mutation.isLoading ? (
            <CircularProgress size={16} color="success" />
          ) : (
            <IconButton
              aria-label="save comment"
              onClick={() => {
                mutation.mutate();
              }}
            >
              <Send />
            </IconButton>
          )}
        </InputAdornment>
      }
    />
  );
}
