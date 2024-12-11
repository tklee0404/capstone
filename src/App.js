
import { Component } from "react";
import {useState} from 'react';
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, useNavigate, BrowserRouter, Routes, NavLink} from "react-router-dom";
import "./App.css";
import Main_Header from './compoAssets/main_header.js';
import Home from './pages/Home.js';
import News1 from './pages/News1.js';

import Calendar from './pages/Calendar.js';

import Analysis2 from './pages/Analysis2.js';
import Predict1 from './pages/Predict1.js';
import Predict2 from './pages/Predict2.js';
import Testasd from "./pages/testasd.js";

import Board1 from './pages/Board1.js';
import Board2 from './pages/Board2.js';



function App() {
  return(
    <main className="main-container">

      <BrowserRouter>

      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/News1" element={<News1 />}></Route>
        <Route path="/Calendar" element={<Calendar />}></Route>
        <Route path="/Predict1" element={<Predict1 />}></Route>
        <Route path="/Analysis2" element={<Analysis2 />}></Route>
        <Route path="/Predict2" element={<Predict2 />}></Route>
        <Route path="/test" element={<Testasd />}></Route>
        <Route path="/Board1" element={<Board1 />}></Route>
        <Route path="/Board2" element={<Board2 />}></Route>
      </Routes>

      </BrowserRouter>
    </main>
  );
}

export default App;
