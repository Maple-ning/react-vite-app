import App from "@/App";
import Home from "@/pages/Dashboard";
import About from "@/pages/Config";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default baseRouter;
