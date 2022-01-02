import "./App.css";
import { Button, Container } from "@mui/material";

import LatestPosts from "./components/LatestPosts";

import Posts from "./components/GetAllPosts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import New from "./components/NewPost";
import EditPost from "./EditPost";
import SinglePost from "./SinglePost";

import SingleView from "./SingleView";
import LayOut from "./components/LayOut";

function App() {
  return (
    <>
    <div>
      <Container>
        <Router>
          <LayOut />

          <Routes>
            <Route exact path="/LatestPosts" element={<LatestPosts />} />
            <Route exact path="/Posts" element={<Posts />} />
            
            <Route exact path="/New" element={<New />} />
            <Route exact path="/editpost" element={<EditPost />} />
            <Route exact path="/view/:id" element={<SingleView />} />
            <Route exact path="/edit/:id" element={<SinglePost />} />
          </Routes>
        </Router>
      </Container>
    </div>
      <div>
      <h4> Copyright@2021</h4>
   </div>
   </>
  );
}

export default App;
