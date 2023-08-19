/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import usePost from "../Context/PostContext";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { AiFillDelete } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import useComment from "../Context/CommentContext";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

const PostDetails = () => {
  const { posts, deletePost } = usePost();
  const { currentUser, users } = useContext(AuthContext);
  const data = useComment();
  console.log(data);

  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  const carrAuth = posts.filter((p) => p.authorId === currentUser.id);
  // console.log("carr", carrAuth);

  const handleDelete = () => {
    deletePost(post);
  };

  return (
    post && (
      <div className="p-4  ">
        <div key={post.id} className="  flex flex-col  lg:flex-col-1        ">
          <div className="text-center">
            <h1 className="font-semibold text-2xl">{post.title}</h1>

            <div className="flex  flex-col items-center  text-gray-700 space-y-3 ">
              <span className="font-semibold">
                Author:
                {users.filter((u) => u.id === post.authorId)[0].username}
              </span>
              <span>Published: 10/10/2022</span>
              <div className="flex space-x-2">
                <span onClick={handleDelete}>
                  {post.authorId === currentUser.id && (
                    <AiFillDelete className="text-2xl cursor-pointer" />
                  )}
                </span>
                <Link to={`/edit/${post.id}`}>
                  {post.authorId === currentUser.id && (
                    <HiPencilAlt className="text-2xl cursor-pointer" />
                  )}
                </Link>
              </div>
            </div>
          </div>
          <img
            className="w-full h-72 mt-4 object-cover"
            src={post.postImage}
            alt=""
          />
          <p>{post.postContent}</p>
        </div>

        <CommentList />
        <CommentForm />
      </div>
    )
  );
};

export default PostDetails;
