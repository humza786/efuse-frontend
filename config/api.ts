import axios from "axios";

// Temporary solution to get the token
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjNmNWVjNDVlNWY0ZDMzYjJlYTg4MmQiLCJpYXQiOjE2NDgzODc5NTAsImV4cCI6MTY3OTkyMzk1MCwidHlwZSI6ImFjY2VzcyJ9.QdyQ881g8QSWxMVnqsj7I4voGQwB1cMmg7fapEzDgnc";

const axiosClient = () => {
  const defaultOptions = {
    baseURL: `https://efuse-backend-hamza.herokuapp.com/api/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  // Create instance
  const instance = axios.create(defaultOptions);

  return instance;
};

export default axiosClient();
