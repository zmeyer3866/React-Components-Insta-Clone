//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"
// import data 

const PostsPage = (props) => {
  // set up state for your data
  const [data, setData] = useState(dummyData)

  const UpdateLikes = (id) => {
    let prevData = [...data]
    prevData[id].likes += 1
    setData(prevData)
  }
  if (props.toSearch === '') {
    return (
      <div className="posts-container-wrapper">
        {
          /* map through data here to return a Post and pass data as props to Post */
          data.map((el, index) => {
            return <Post post={el} UpdateLikes={UpdateLikes} idPost={index} key={index} />
          })
        }
      </div>
    );
  } else {
    let dataFiltered = data.filter((el) => {
      return el.username === props.toSearch
    })
    return (
      <div className="posts-container-wrapper">
        {
          /* map through data here to return a Post and pass data as props to Post */
          dataFiltered.length > 0 ? dataFiltered.map((el, index) => {
            return <Post post={el} UpdateLikes={UpdateLikes} idPost={index} key={index} />
          }) :
            <p>No match with that Search</p>

        }
      </div>
    );
  }

};

export default PostsPage;