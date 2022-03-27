import { useQueryClient } from "react-query";
import { useDeleteComment } from "../../features/comments/mutations";
import { Delete } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";

interface DeleteCommentProps {
  comment: string;
}

export default function DeleteComment({ comment }: DeleteCommentProps) {
  const queryClient = useQueryClient();

  const mutation = useDeleteComment(comment, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  return (
    <LoadingButton
      startIcon={<Delete />}
      color="inherit"
      loading={mutation.isLoading}
      onClick={() => mutation.mutate()}
    >
      Delete
    </LoadingButton>
  );
}
