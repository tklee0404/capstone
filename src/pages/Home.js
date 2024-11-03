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

import 울산 from "../logo_image/emblem_K01.png";
import 포항 from "../logo_image/emblem_K02.png";
import 제주 from "../logo_image/emblem_K03.png";
import 전북 from "../logo_image/emblem_K04.png";
import 서울 from "../logo_image/emblem_K05.png";
import 대전 from "../logo_image/emblem_K06.png";
import 대구 from "../logo_image/emblem_K07.png";
import 인천 from "../logo_image/emblem_K08.png";
import 강원 from "../logo_image/emblem_K09.png";
import 광주 from "../logo_image/emblem_K10.png";
import 수원FC from "../logo_image/emblem_K11.png";
import 김천 from "../logo_image/emblem_K12.png";

function Home() {
  const selectTeam1 = () => {
    localStorage.setItem(
      "teamSelect",
      JSON.stringify({ selectedTeam: "울산" })
    );
  };
  const selectTeam2 = () => {
    localStorage.setItem(
      "teamSelect",
      JSON.stringify({ selectedTeam: "포항" })
    );
  };

  return (
    <div className="main_wrap">
      <Link to="/News1">
        <img
          className="main_logo"
          src={울산}
          alt="team1_logo"
          onClick={selectTeam1}
        ></img>
      </Link>
      <Link to="/News1">
        <img
          className="main_logo"
          src={포항}
          alt="team2_logo"
          onClick={selectTeam2}
        ></img>
      </Link>
      <Link to="/News1" state={{ teamSelect: "team3" }}>
        <img className="main_logo" src={제주} alt="team3_logo"></img>
      </Link>
      <img className="main_logo" src={전북} alt="team4_logo"></img>
      <img className="main_logo" src={서울} alt="team5_logo"></img>
      <img className="main_logo" src={대전} alt="team6_logo"></img>
      <img className="main_logo" src={대구} alt="team7_logo"></img>
      <img className="main_logo" src={인천} alt="team8_logo"></img>
      <img className="main_logo" src={강원} alt="team9_logo"></img>
      <img className="main_logo" src={광주} alt="team10_logo"></img>
      <img className="main_logo" src={수원FC} alt="team11_logo"></img>
      <img className="main_logo" src={김천} alt="team12_logo"></img>
    </div>
  );
}

export default Home;
