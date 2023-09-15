import "./App.css";
import React from 'react'
import SideBar from './components/SideBar'
import Home from './components/Home';
import Search from './components/Search';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

  function App(){

    return (
        <>
        <Router>
        <SideBar />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        </Routes>
        </Router>
        </>
    )
}

export default App

