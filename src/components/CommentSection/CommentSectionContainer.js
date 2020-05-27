// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)

  const [comment, changeComment] = useState('')

  const addComment = (user, text) => {
    let oldComments = [...comments]
    oldComments.push({ text: text, username: user })
    setComments(oldComments)
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */
        comments.map((el) => {


          return <Comment comment={el} />
        })
      }
      <CommentInput submitComment={addComment} comment={comment} changeComment={changeComment} />
    </div>
  );
};

export default CommentSection;