/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { initialState, postReducer } from "../Reducers/postReducer";

const PostContext = createContext(initialState);

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  const createPost = (post) => {
    const newPost = state.posts.concat(post);

    dispatch({
      type: "CREATEPOST",

      payload: { post: newPost },
    });
  };
  const updatePost = (post) => {
    const postIndex = state.posts.findIndex((p) => p.id === post.id);
    const updatedPost = [...state.posts];

    if (postIndex !== -1) {
      updatedPost[postIndex] = post;
    }

    dispatch({
      type: "EDITPOST",
      payload: { post: updatedPost },
    });
  };

  const deletePost = (post) => {
    const updatedPost = state.posts.filter((p) => p.id !== post.id);

    dispatch({
      type: "DELETEPOST",
      payload: { post: updatedPost },
    });
  };

  const values = {
    posts: state.posts,
    createPost,
    deletePost,
    updatePost,
  };

  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

const usePost = () => {
  const context = useContext(PostContext);

  if (context === undefined) {
    throw new Error("usePost must be used within a PostProvider");
  }

  return context;
};
export default usePost;
