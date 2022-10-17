import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Routes/Home";
import { Portfolio } from "./Routes/Portfolio";
import { Header } from "./components/Header";
import "./App.css";
import { AboutMe } from "./Routes/AboutMe";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
        <Route path="/AboutMe" element={<AboutMe />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
