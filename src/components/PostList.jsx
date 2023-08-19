/* eslint-disable no-unused-vars */
import { useContext } from "react";
import usePost from "../Context/PostContext";
import { AuthContext } from "../Context/AuthContext";
import PostItem from "./PostItem";

const PostList = () => {
  const { posts } = usePost();
  const { currentUser, users } = useContext(AuthContext);
  // console.log(currentUser);

  return (
    <div className="w-full h-screen p-6 grid  md:grid-col-2 lg:grid-cols-3">
      {posts.length > 0 &&
        posts.map((post) => (
          <PostItem key={post.id} post={post} users={users} />
        ))}
    </div>
  );
};

export default PostList;
