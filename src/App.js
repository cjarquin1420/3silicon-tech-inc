import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import System from "./Components/System.js";
import RunScreen from "./Components/RunScreen.js";
import Module from "./Components/Module.js";
import Diagnostic from "./Components/Diagnostic.js";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="" element={<System />} exact></Route>

        <Route path="/runscreen" element={<RunScreen />} exact></Route>

        <Route path="/module" element={<Module />} exact></Route>

        <Route path="/diagnostic" element={<Diagnostic />} exact></Route>
      </Routes>
    </Router>
  );
};

export default App;
