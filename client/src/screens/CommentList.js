import React, { useState, useEffect } from "react";
const CommentList = ({ comments }) => {
  // console.log(comments);

  // return <div />;
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
