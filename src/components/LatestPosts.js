import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import { Grid, Row } from "@mui/material";

const LatestPosts=()=> {
  const [allPosts, setAllPosts] = useState([]);
  
  const API_URL = "https://hashtags-n-mentions.herokuapp.com/api/posts";
  

  const fetchData = async () => {
    const { data } = await axios.get(API_URL,{
      params: {
        _limit: 10
       }
    });
    console.log(data.posts);
    setAllPosts(data.posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="latesttitles">
        <h2>Latest Posts</h2>
      </div>

      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {allPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div key={index}>
              <PostCard title={post.title} content={post.content} id={index} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default LatestPosts;
