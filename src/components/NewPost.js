import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

import "./NewPostStyle.css";
import axios from "axios";

const New=()=> {
  const date = new Date();
  const createdAt = date.getTime();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitPost = (e) => {
    console.log({ [e.target.name]: e.target.value });
  };

  const onSubmitPost = (e) => {
    e.preventDefault();

    const postData = {
      title,
      content,
      createdAt,
    };

    axios
      .post(`https://hashtags-n-mentions.herokuapp.com/api/post`, postData)
      .then((response) => {
        console.log(response);
      });

    console.log(postData);
  };

  return (
    <div>
      <div>
        <h2>New Post</h2>
      </div>

      <form onSubmit={onSubmitPost}>
        <div className="postform">
          <TextField
            value={title}
            id="outlined-basic"
            label="Enter Title Here"
            variant="outlined"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <TextField
            value={content}
            id="outlined-multiline-static"
            label="Enter post content"
            multiline
            rows={4}
            name="content"
            onChange={(e) => setContent(e.target.value)}
          />
          <br />
          <Button variant="contained" type="submit">
            Post
          </Button>
        </div>
      </form>
    </div>
  );
}

export default New;
