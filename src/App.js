//Libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./Components/auth"
import Navbar from "./Components/Navbar/Navbar";
import System from "./Components/System";
import RunScreen from "./Components/RunScreen";
import Module from "./Components/Module";
import Diagnostic from "./Components/Diagnostic";
import Profile from "./Components/Profile";
import Login from "./Components/Login"
import { RequireAuth } from "./Components/RequireAuth";


/////////////////
function App() {
  return (
    <AuthProvider>
      <Router>
      <Navbar />
      <Routes>
        <Route path="system" element={<System />} exact></Route>

        <Route path="runscreen" element={<RunScreen />} exact></Route>

        <Route path="module" element={<Module />} exact></Route>

        <Route path="diagnostic" element={<Diagnostic />} exact></Route>

        <Route path="profile" element={
          <RequireAuth> 
            <Profile/>
          </RequireAuth>} exact></Route>

        <Route path="login" element={<Login/>} exact></Route>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;