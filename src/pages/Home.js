import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useNavigate,
  BrowserRouter,
  Routes,
  NavLink,
} from "react-router-dom";
import Main_Header from "../compoAssets/main_header";
import { useState } from "react";
import "../App.css";

import K01 from "../logo_image/emblem_K01.png";
import K02 from "../logo_image/emblem_K02.png";
import K03 from "../logo_image/emblem_K03.png";
import K04 from "../logo_image/emblem_K04.png";
import K05 from "../logo_image/emblem_K05.png";
import K06 from "../logo_image/emblem_K06.png";
import K07 from "../logo_image/emblem_K07.png";
import K08 from "../logo_image/emblem_K08.png";
import K09 from "../logo_image/emblem_K09.png";
import K10 from "../logo_image/emblem_K10.png";
import K11 from "../logo_image/emblem_K11.png";
import K12 from "../logo_image/emblem_K12.png";

function Home() {
  const selectTeam1 = () => {
    localStorage.setItem(
      "teamSelect",
      JSON.stringify({ selectedTeam: "team1" })
    );
  };
  const selectTeam2 = () => {
    localStorage.setItem(
      "teamSelect",
      JSON.stringify({ selectedTeam: "team2" })
    );
  };

  return (
    <div className="main_wrap">
      <Link to="/NewsPage">
        <img
          className="main_logo"
          src={K01}
          alt="team1_logo"
          onClick={selectTeam1}
        ></img>
      </Link>
      <Link to="/NewsPage">
        <img
          className="main_logo"
          src={K02}
          alt="team2_logo"
          onClick={selectTeam2}
        ></img>
      </Link>
      <Link to="/NewsPage" state={{ teamSelect: "team3" }}>
        <img className="main_logo" src={K03} alt="team3_logo"></img>
      </Link>
      <img className="main_logo" src={K04} alt="team4_logo"></img>
      <img className="main_logo" src={K05} alt="team5_logo"></img>
      <img className="main_logo" src={K06} alt="team6_logo"></img>
      <img className="main_logo" src={K07} alt="team7_logo"></img>
      <img className="main_logo" src={K08} alt="team8_logo"></img>
      <img className="main_logo" src={K09} alt="team9_logo"></img>
      <img className="main_logo" src={K10} alt="team10_logo"></img>
      <img className="main_logo" src={K11} alt="team11_logo"></img>
      <img className="main_logo" src={K12} alt="team12_logo"></img>
    </div>
  );
}

export default Home;
