import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PostItem = ({ post, users }) => {
  return (
    <Link
      to={`/post/${post.id}`}
      key={post.id}
      className="w-full  h-72 flex flex-col  lg:flex-col-1    border border-gray-300   "
    >
      <img className="w-full h-48  bg-cover" src={post.postImage} alt="" />
      <div className="p-2">
        <h1 className="font-semibold text-2xl">{post.title}</h1>

        <div className="text-gray-700 space-x-3 ">
          <span className="font-semibold">
            Author: {users.filter((u) => u.id === post.authorId)[0].username}
          </span>
          <span>Published: 10/10/2022</span>
        </div>
        <p>
          {post.postContent.length > 25
            ? post.postContent.slice(0, 25) + "..."
            : post.postContent}
        </p>
      </div>
    </Link>
  );
};

export default PostItem;
