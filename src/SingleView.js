import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import axios from "axios";
import { useParams } from "react-router-dom";

function SingleView({ title, content, id }) {
  const param = useParams();
  console.log(param);

  const [post, setPost] = useState([
    {
      title: "",
      content: "",
    },
  ]);

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

  return (
    <div className="centerdiv">
      <div>
        <h4> EDIT POST</h4>
        <div>
          <Card sx={{ width: 450 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>

              <Box className="contentlines">
                <Typography variant="body2" align="center">
                  {post.content}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Link
                to={{ pathname: `/edit/${param.id}`, state: { posts: { id } } }}
              >
                <Button variant="contained" size="small">
                  View
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SingleView;
