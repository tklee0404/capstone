import "./main_header_style.css";
import icon from "../logo_image/ICON.png";
import "./menu_header_style.css";
import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";

import icon1 from "../logo_image/icon_news.png";


function Main_Header() {
  const [selectedTeam, setSelectedTeam] = useState();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("teamSelect"));
    if (storedData && storedData.selectedTeam) {
      setSelectedTeam(storedData.selectedTeam);
    }
  }, []);

  const location = useLocation();

  // 버튼의 색상을 동적으로 적용하는 함수
  const getButtonStyle = (path) => {
    return location.pathname === path
      ? { backgroundColor: "black", color: "white" }
      : { backgroundColor: "#72a126", color: "#000" };
  };

  return (
    <div className="HEADER">

      <div className="main_header">
        <img className="header_icon" src={icon} alt="header_icon"></img>
        <h4 className="service_name">SPORTS HOLIC</h4>  
      </div>

      <div className="menu_header">
      <div className="menu_button_container">
        <Link to="/News1">
          <button className="menu_button" style={getButtonStyle("/News1")}>뉴스</button>
        </Link>
      </div>
      <div className="menu_button_container">
        <Link to="/Calendar">
          <button className="menu_button" style={getButtonStyle("/Calendar")}>일정</button>
        </Link>
      </div>
      <div className="menu_button_container">
        <Link to="/Analysis1">
          <button className="menu_button" style={getButtonStyle("/Analysis1")}> 분석</button>
        </Link>
      </div>
      <div className="menu_button_container">
        <Link to="/Predict1">
          <button className="menu_button" style={getButtonStyle("/Predict1")}>예측</button>
        </Link>
      </div>
      <div className="menu_button_container">
        <Link to="/">
          <button className="menu_button" style={getButtonStyle("/")}>홈</button>
        </Link>
      </div>
    </div>
    </div>
  );
}
// <h4 className="header_intro">K리그의 모든 것</h4>
export default Main_Header;
