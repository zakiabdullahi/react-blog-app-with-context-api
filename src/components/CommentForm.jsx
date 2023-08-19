import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useParams } from "react-router-dom";
import useComment from "../Context/CommentContext";
// import { HiPencilAlt } from "react-icons/hi";
// import { AiFillDelete } from "react-icons/ai";

const CommentForm = () => {
  const { currentUser } = useContext(AuthContext);
  const { addComment } = useComment();

  const [postContent, setPostContent] = useState("");

  const id = "ComId" + Math.random().toString(16).slice(2);
  const data = useParams();
  console.log(data.id);
  const date = new Date().toString();
  const authorId = currentUser.id;
  const authorName = currentUser.username;
  // const postId = currentUser.id;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: id,
      date: date,
      postContent,
      authorId: authorId,
      authorName: authorName,
      postId: data.id,
    };
    addComment(newComment);
    setPostContent("");
  };

  return (
    <div className="w-full flex lg:space-x-4  space-x-2   h-20  py-2 ">
      <h1 className="">Comments</h1>
      <form className="w-full " onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setPostContent(e.target.value)}
          value={postContent}
          className="w-full h-28 border border-gray-400"
        ></textarea>
        <div className="flex space-x-2 items-center">
          <button className="w-24 bg-indigo-600 py-2 px-3 text-white rounded-lg text-center ">
            comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
