import { useMutation } from "react-query";
import axiosClient from "../../config/api";

interface CommentCreate {
  post: string;
  content: string;
}

const createComment = (data: CommentCreate) => {
  return axiosClient.post(`comments`, data);
};
const updateComment = (comment: string, content: string) => {
  return axiosClient.patch(`comments/${comment}`, { content });
};
const deleteComment = (comment: string) => {
  return axiosClient.delete(`comments/${comment}`);
};
const likeComment = (comment: string, action: string) => {
  return axiosClient.post(`comments/${comment}/likes`, { action });
};

const useCreateComment = (data: CommentCreate, options: any) => {
  return useMutation(() => createComment(data), options);
};
const useUpdateComment = (comment: string, content: string, options: any) => {
  return useMutation(() => updateComment(comment, content), options);
};
const useDeleteComment = (comment: string, options: any) => {
  return useMutation(() => deleteComment(comment), options);
};
const useLikeComment = (comment: string, action: string, options: any) => {
  return useMutation(() => likeComment(comment, action), options);
};

export { useCreateComment, useUpdateComment, useDeleteComment, useLikeComment };
