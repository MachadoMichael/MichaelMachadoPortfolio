import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Header } from "./components/Header";
import './App.css'
import { AboutMe } from "./components/AboutMe";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
        <Route path="/AboutMe" element={<AboutMe />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
