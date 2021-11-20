import react from "react";

//fetch
import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <>
      <h1>PostS</h1>
      <Post></Post>
      <Post></Post>
    </>
  );
};

export default Posts;
