import { AiFillDelete } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import useComment from "../Context/CommentContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

/* eslint-disable react/prop-types */
const Comment = ({ comment }) => {
  const { deleteComment } = useComment();
  const { currentUser } = useContext(AuthContext);

  const handleClick = () => {
    deleteComment(comment);
  };
  return (
    <div
      key={comment.id}
      className="flex items-center space-x-4 border border-gray-400 p-4"
    >
      <div className="bg-indigo-400 w-12 h-12 rounded-full flex justify-center items-center">
        <span className="text-white text-2xl">{comment.authorName}</span>
      </div>
      <div className="">
        <h2>{comment.authorName}</h2>
        <span>
          {`${comment.date.split(" ")[0]}
        ${comment.date.split(" ")[1]}
        ${comment.date.split(" ")[2]}
        ${comment.date.split(" ")[3]}
        
        `}
        </span>
        <p>{comment.postContent}</p>

        <div className="flex space-x-2 mt-4">
          {currentUser.id === comment.authorId && (
            <Link
              to={`/comment/edit/${comment.id}`}
              className="w-10 bg-indigo-600 py-2 px-3 text-white rounded-lg  "
            >
              <HiPencilAlt className="text-xl cursor-pointer" />
            </Link>
          )}

          {currentUser.id === comment.authorId && (
            <button
              onClick={handleClick}
              className="w-10 bg-indigo-600 py-2 px-3 text-white rounded-lg  "
            >
              <AiFillDelete className="text-xl cursor-pointer " />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
