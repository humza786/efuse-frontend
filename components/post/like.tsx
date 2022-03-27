import { useState } from "react";
import { useQueryClient } from "react-query";
import { useLikePost } from "../../features/posts/mutations";
import { ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";

interface LikePostProps {
  post: string;
}

export default function LikePost({ post }: LikePostProps) {
  const queryClient = useQueryClient();
  const [action, setAction] = useState(true);

  const mutation = useLikePost(post, action ? "like" : "unlike", {
    onSuccess: () => {
      setAction(!action);
      queryClient.invalidateQueries("posts");
    },
  });

  return (
    <LoadingButton
      startIcon={action ? <ThumbUpOutlined /> : <ThumbUp />}
      color="inherit"
      loading={mutation.isLoading}
      onClick={() => mutation.mutate()}
    >
      {action ? "Like" : "Unlike"}
    </LoadingButton>
  );
}
