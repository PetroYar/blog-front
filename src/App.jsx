import { Route, Routes } from "react-router-dom";
import Loyout from "./components/loyout/Loyout";
import "./style.scss";
import Home from "./pages/home/Home";
import Posts from "./pages/posts/Posts";
import Post from "./pages/post/Post";
import AddPost from "./pages/addPost/AddPost";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";


function App() {
  return (
    <Loyout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path=":id" element={<Post />} />
        <Route path="new" element={<AddPost />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Loyout>
  );
}

export default App;
