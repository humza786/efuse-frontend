import { Avatar, Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import LikeComment from "./like";
import UpdateComment from "./update";
import DeleteComment from "./delete";

interface CommentProps {
  comment: {
    id: string;
    content: string;
    createdAt: string;
    user: {
      firstName: string;
      lastName: string;
    };
    likes: number;
  };
}

export default function Comment({ comment }: CommentProps) {
  return (
    <Grid key={comment.id} container sx={{ p: 2 }}>
      <Avatar alt="User Avatar" src="https://source.unsplash.com/random" />
      <Grid item xs sx={{ ml: 2 }}>
        <Paper elevation={0} sx={{ backgroundColor: "lavender", p: 2 }}>
          <Grid container>
            <Grid item xs sx={{ pl: 2 }}>
              <Typography sx={{ fontWeight: 800 }}>
                {`${comment.user?.firstName} ${comment.user?.lastName}`}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.80rem",
                  color: "blue",
                  fontWeight: 600,
                }}
              >
                Professional-Student
              </Typography>
              <Typography>{comment.content}</Typography>
              <Grid container sx={{ color: "gray" }}>
                <Typography
                  sx={{ py: 2 }}
                >{`${comment.likes} Likes |`}</Typography>
                <LikeComment comment={comment.id} />
                <Typography sx={{ py: 2 }}>|</Typography>
                <UpdateComment comment={comment.id} />
                <Typography sx={{ py: 2 }}>|</Typography>
                <DeleteComment comment={comment.id} />
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontSize: "0.65rem",
                fontWeight: 500,
                color: "gray",
              }}
            >
              {moment(comment.createdAt).fromNow()}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
