import { useQuery } from "react-query";
import axiosClient from "../../config/api";

const fetchPosts = (page = 1) => {
  const posts = axiosClient.get(`posts?page=${page}`);
  return posts;
};

const usePosts = (page: number) => {
  return useQuery(["posts", page], () => fetchPosts(page));
};

export { usePosts };
