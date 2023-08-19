/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { commentReducer, initialState } from "../Reducers/commentReducer";

const CommentContext = createContext(initialState);

export const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, initialState);

  const addComment = (comment) => {
    const newComment = state.comments.concat(comment);

    dispatch({
      type: "CREATECOMMENT",

      payload: { comment: newComment },
    });
  };
  const updateComment = (comment) => {
    const commentIndex = state.comments.findIndex((c) => c.id === comment.id);
    const updatedComment = [...state.comments];

    if (commentIndex !== -1) {
      updatedComment[commentIndex] = comment;
    }

    dispatch({
      type: "EDITCOMMENT",
      payload: { comment: updatedComment },
    });
  };

  const deleteComment = (comment) => {
    const updatedComment = state.comments.filter((c) => c.id !== comment.id);

    dispatch({
      type: "DELETECOMMENT",
      payload: { comment: updatedComment },
    });
  };

  const values = {
    comments: state.comments,
    addComment,
    deleteComment,
    updateComment,
  };

  return (
    <CommentContext.Provider value={values}>{children}</CommentContext.Provider>
  );
};

const useComment = () => {
  const context = useContext(CommentContext);

  if (context === undefined) {
    throw new Error("usePost must be used within a CommentProvider");
  }

  return context;
};
export default useComment;
