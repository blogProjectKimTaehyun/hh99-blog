import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Write from "../pages/Write";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
