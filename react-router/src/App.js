import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/posts/new" element={<>new component</>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
