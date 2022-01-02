import React from "react";
import { Link } from "react-router-dom";

export default function NewHeader() {
  return (
    <div>
      <Link to="/allposts">
        <button>All Posts</button>
      </Link>

      <Link to="/newpost">
        <button>New Post</button>
      </Link>
      <Link to="/editpost">
        <button>Edit Post</button>
      </Link>
    </div>
  );
}
