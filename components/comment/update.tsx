import { useState } from "react";
import { useQueryClient } from "react-query";
import { useUpdateComment } from "../../features/comments/mutations";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";

interface UpdateCommentProps {
  comment: string;
}

export default function UpdateComment({ comment }: UpdateCommentProps) {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mutation = useUpdateComment(comment, content, {
    onSuccess: () => {
      setContent("");
      handleClose();
      queryClient.invalidateQueries("posts");
    },
  });

  return (
    <>
      <Button startIcon={<Edit />} color="inherit" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Comment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="edit-comment"
            type="text"
            fullWidth
            variant="standard"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <LoadingButton
            loading={mutation.isLoading}
            onClick={() => mutation.mutate()}
            disabled={!content}
          >
            Update
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
