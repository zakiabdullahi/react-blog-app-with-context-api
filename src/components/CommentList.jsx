import { useParams } from "react-router-dom";
import useComment from "../Context/CommentContext";
import usePost from "../Context/PostContext";
import Comment from "../components/Comment";

const CommentList = () => {
  // const { posts } = usePost();
  const data = useParams();

  const { comments } = useComment();
  console.log(comments);
  return (
    comments.length > 0 && (
      <div>
        <div className="grid  md:grid-cols-1 gap-4">
          {comments.map(
            (comment) =>
              data.id === comment.postId && (
                <Comment key={comment.id} comment={comment} />
              )
          )}
        </div>
      </div>
    )
  );
};

export default CommentList;
