import { useMutation } from "react-query";
import axiosClient from "../../config/api";

interface PostCreate {
  title: string;
  content: string;
}

const createPost = (data: PostCreate) => {
  return axiosClient.post(`posts`, data);
};
const likePost = (post: string, action: string) => {
  return axiosClient.post(`posts/${post}/likes`, { action });
};

const useCreatePost = (data: PostCreate, options: any) => {
  return useMutation(() => createPost(data), options);
};
const useLikePost = (post: string, action: string, options: any) => {
  return useMutation(() => likePost(post, action), options);
};

export { useCreatePost, useLikePost };
