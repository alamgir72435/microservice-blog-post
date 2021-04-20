import React, { useState, useEffect } from "react";
import axios from "axios";
const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  //   return <div></div>;

  const renderdComments = comments.map((comment) => {
    return (
      <li className="list-group-item" key={comment.id}>
        {comment.content}
      </li>
    );
  });

  return (
    <div className="list-group">
      {comments.length > 0 ? renderdComments : ""}
    </div>
  );
};

export default CommentList;
