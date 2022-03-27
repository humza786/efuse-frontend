import moment from "moment";
import { useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { LocationOn, Comment, MoreHoriz } from "@mui/icons-material";
import CommentItem from "../comment/item";
import CreateComment from "../comment/create";
import LikePost from "./like";

interface PostProps {
  post: {
    id: string;
    content: string;
    createdAt: string;
    user: {
      firstName: string;
      lastName: string;
    };
    likes: number;
    comments: {
      id: string;
      content: string;
      createdAt: string;
      user: {
        firstName: string;
        lastName: string;
      };
      likes: number;
    }[];
  };
}

export default function Post({ post }: PostProps) {
  const [showCommentInput, setShowCommentInput] = useState(false);
  return (
    <Grid item xs={12}>
      <Paper elevation={3}>
        <Grid container direction="column" sx={{ pt: 1, px: 2 }}>
          <Grid container>
            <Avatar
              alt="User Avatar"
              src="https://source.unsplash.com/random"
              sx={{ width: 56, height: 56 }}
            />
            <Grid item xs sx={{ pl: 2 }}>
              <Typography
                sx={{ fontWeight: 800 }}
              >{`${post.user?.firstName} ${post.user?.lastName}`}</Typography>
              <Grid container sx={{ color: "blue" }}>
                <LocationOn sx={{ fontSize: "1rem" }} />
                <Typography sx={{ fontSize: "0.80rem", fontWeight: 600 }}>
                  OH, USA
                </Typography>
              </Grid>

              <Typography
                sx={{
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  color: "gray",
                }}
              >
                {moment(post.createdAt).fromNow()}
              </Typography>
            </Grid>
            <MoreHoriz />
          </Grid>
          <Typography sx={{ py: 2 }}>{post.content}</Typography>
          <Typography sx={{ color: "gray", py: 2 }}>
            {`${post.likes} Likes . ${post.comments.length} Comments`}
          </Typography>
        </Grid>
        <Divider />
        <Grid
          container
          direction="column"
          sx={{ p: 1, color: "gray", backgroundColor: "ghostwhite" }}
        >
          <Grid>
            <LikePost post={post.id} />
            <Button
              startIcon={<Comment />}
              color="inherit"
              onClick={() => setShowCommentInput(!showCommentInput)}
            >
              Comment
            </Button>
          </Grid>
          {showCommentInput ? (
            <Grid container sx={{ p: 2 }}>
              <Avatar
                alt="User Avatar"
                src="https://source.unsplash.com/random"
              />
              <Grid item xs sx={{ ml: 2 }}>
                <CreateComment post={post.id} />
              </Grid>
            </Grid>
          ) : null}

          {post.comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
}
