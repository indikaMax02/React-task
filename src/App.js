import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/screens/home/Home";
import ViewDetails from "./components/screens/viewDetails/ViewDetails";
import Login from "./components/screens/login/Login";
import SignUp from "./components/screens/signUp/SignUp";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/viewDetailsPage" element={<ViewDetails/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
