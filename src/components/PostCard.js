import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import "./CPostCard.css";

const LINES_TO_SHOW = 2;

const useStyles = makeStyles({
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": LINES_TO_SHOW,
    "-webkit-box-orient": "vertical",
  },
});

const PostCard=({ title, content, id })=> {
  const classes = useStyles();
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          className={classes.multiLineEllipsis}
        >
          {title}
        </Typography>

        <Box className="contentlines">
          <Typography
            className={classes.multiLineEllipsis}
            variant="body2"
            align="center"
          >
            {content}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Link to={{ pathname: `/view/${id}`, state: { posts: { id } } }}>
          <Button variant="contained" size="small">
            View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default PostCard;
