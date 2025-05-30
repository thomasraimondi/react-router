import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./assets/layouts/DefaultLayout";
import HomePage from "./assets/pages/HomePage";
import About from "./assets/pages/About";
import Posts from "./assets/pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
