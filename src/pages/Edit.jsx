/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import usePost from "../Context/PostContext";
import { AuthContext } from "../Context/AuthContext";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [postImage, setPostImage] = useState("");
  const { currentUser, users } = useContext(AuthContext);
  const { updatePost, posts } = usePost();

  const { id } = useParams();
  const post = posts.find((post) => post.id === id);
  const [title, setTitle] = useState(post.title || "");
  const [postContent, setPostContent] = useState(post.postContent || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const id = "PostId" + Math.random().toString(16).slice(2);
    const date = new Date();
    const authorId = currentUser.id;
    const updatedPost = {
      id: id,
      date: date,
      title,
      postContent,
      authorId: authorId,
      postImage: postImage,
    };
    updatePost(updatedPost);
    setTitle("");
    setPostContent("");
    setPostImage("");
  };

  return (
    <div className="w-full h-screen  py-16">
      <h1 className="text-center ">Create Post</h1>
      <div className=" flex justify-center items-center">
        <form className="w-1/2 flex flex-col space-y-2" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-gray-300"
            type="text"
            placeholder="Title"
          />
          <textarea
            onChange={(e) => setPostContent(e.target.value)}
            value={postContent}
            className="border border-gray-300"
            cols="30"
            rows="10"
          ></textarea>
          <input
            onChange={(e) => setPostImage(e.target.value)}
            value={postImage}
            className="border border-gray-300"
            type="text"
            placeholder="imageUrl"
          />
          <button className="w-28 py-2 px-3 bg-indigo-600 text-white rounded-lg">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
