/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import useComment from "../Context/CommentContext";
import { useNavigate, useParams } from "react-router-dom";

const EditComment = () => {
  const { currentUser } = useContext(AuthContext);
  const { updateComment, comments } = useComment();

  //   const id = "ComId" + Math.random().toString(16).slice(2);
  const data = useParams();
  const comment = comments.find((post) => post.id === data.id);
  const [postContent, setPostContent] = useState(comment.postContent || "");
  const navigate = useNavigate();
  //   console.log("editid", comment);
  const date = new Date().toString();
  //   const authorId = currentUser.id;
  //   const authorName = currentUser.username;

  const handleSubmit = (e) => {
    e.preventDefault();

    const UpdatedComment = {
      id: comment.id,
      date: date,
      postContent,
      authorId: comment.authorId,
      authorName: comment.authorName,
      postId: comment.postId,
    };
    updateComment(UpdatedComment);
    setPostContent("");
    navigate(`/post/${comment.postId}`);
  };

  return (
    <div className="w-full  flex flex-col lg:items-center  lg:space-x-4  space-y-2     p-4 ">
      <h1>Edit Comment</h1>
      <form className="w-full " onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setPostContent(e.target.value)}
          value={postContent}
          className="w-full h-48 border border-gray-400"
        ></textarea>
        <div className="flex space-x-2 items-center">
          <button className="w-24 bg-indigo-600 py-2 px-3 text-white rounded-lg text-center ">
            edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditComment;
