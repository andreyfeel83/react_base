import { Route, Routes } from "react-router-dom";
import Posts from '../pages/Posts'
import About from '../pages/About'
import PostPage from "../pages/PostPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path=".." element={<Posts />} />
      <Route path="about" element={<About />} />
      <Route path="posts/:id" element={<PostPage />} />
      <Route path="*" element={<Posts />} />
    </Routes>
  );
}

export default AppRouter