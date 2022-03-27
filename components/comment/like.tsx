import { useState } from "react";
import { useQueryClient } from "react-query";
import { useLikeComment } from "../../features/comments/mutations";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";

interface LikeCommentProps {
  comment: string;
}

export default function LikeComment({ comment }: LikeCommentProps) {
  const queryClient = useQueryClient();
  const [action, setAction] = useState(true);

  const mutation = useLikeComment(comment, action ? "like" : "unlike", {
    onSuccess: () => {
      setAction(!action);
      queryClient.invalidateQueries("posts");
    },
  });

  return (
    <LoadingButton
      startIcon={action ? <FavoriteBorderOutlined /> : <Favorite />}
      color="inherit"
      loading={mutation.isLoading}
      onClick={() => mutation.mutate()}
    >
      {action ? "Like" : "Unlike"}
    </LoadingButton>
  );
}
