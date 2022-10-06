import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'
import {Home} from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AuthProvider from "./context/auth";
import Profile from "./pages/profile/Profile";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  return (
      <AuthProvider>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route exact path={'/'} element={<PrivateRoute/>}/>
              <Route exact path={'/'} element={<Home/>}/>
              <Route exact path={'/profile'} element={<Profile/>}/>
              <Route exact path={'/register'} element={<Register/>}/>
              <Route exact path={'/login'} element={<Login/>}/>
          </Routes>
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
