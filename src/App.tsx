import Typescript from "./playground/Typescript";
import { Routes, Route } from "react-router-dom";
import Home from "./modules/Home/pages/Home";
import Header from "./components/header/Header";
import Mainlayout from "./components/Mainlayout/Mainlayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        {/* index: path của child route khớp 100% với path của parent route */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
