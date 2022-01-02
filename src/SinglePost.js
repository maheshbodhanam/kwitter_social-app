import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";

import axios from "axios";
import { useParams } from "react-router-dom";
function SinglePost({ props }) {
  const date = new Date();
  const createdAt = date.getTime();

  const param = useParams();

  const [post, setPost] = useState([
    {
      title: "",
      content: "",
      createdAt: "",
    },
  ]);

  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const SingleProductByID = async () => {
    const { data } = await axios.get(
      `https://hashtags-n-mentions.herokuapp.com/api/post/${param.id}/`
    );

    console.log(data.post);
    setPost(data.post);
  };

  useEffect(() => {
    SingleProductByID();
  }, []);

  const onUpdatePost = (e) => {
    e.preventDefault();

    const postData = {
      title,
      content,
      createdAt,
    };

    axios
      .put(
        `https://hashtags-n-mentions.herokuapp.com/api/post/${param.id}/`,
        postData
      )
      .then((response) => {
        console.log(response);
      });

    console.log(postData);
  };

  return (
    <div className="centerdiv">
      <div>
        <h4> EDIT POST</h4>
        <div>
          <form onSubmit={onUpdatePost}>
            <div className="postformedit">
              <TextField
                value={post.title}
                id="outlined-basic"
                variant="outlined"
                name="title"
                onChange={(e) => setPost(e.target.value)}
              />
              <br />
              <TextField
                value={post.content}
                id="outlined-multiline-static"
                multiline
                rows={4}
                name="content"
                onChange={(e) => setPost(e.target.value)}
              />
              <br />
              <Button variant="contained" type="submit">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
