
import { Component } from "react";
import {useState} from 'react';
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, useNavigate, BrowserRouter, Routes, NavLink} from "react-router-dom";
import "./App.css";
import Main_Header from './compoAssets/main_header.js';
import Home from './pages/Home.js';
import NewsPage from './pages/NewsPage.js';
import Calendar from './pages/Calendar.js';
import Analysis1 from './pages/Analysis1.js';
import Predict1 from './pages/Predict1.js';




function App() {

  return(
    <main className="main-container">

      <BrowserRouter>

      <Main_Header></Main_Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/NewsPage" element={<NewsPage />}></Route>
        <Route path="/Calendar" element={<Calendar />}></Route>
        <Route path="/Analysis1" element={<Analysis1 />}></Route>
        <Route path="/Predict1" element={<Predict1 />}></Route>
      </Routes>

      </BrowserRouter>
    </main>
  );
}

export default App;

/*
class App extends Component {
  const navigate = useNavigate();

  render() {
    return(
      <main className="main-container">
        <img src={emblem_K01} alt="team1_img" onClick={()=> {
          navigate("./pages/News/");
        }}
        ></img>
      </main>
    )
  }
}
*/

/*
export default App;
*/



/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/