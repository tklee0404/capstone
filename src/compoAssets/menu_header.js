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

function Menu_Header() {
  const [selectedTeam, setSelectedTeam] = useState();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("teamSelect"));
    if (storedData && storedData.selectedTeam) {
      setSelectedTeam(storedData.selectedTeam);
    }
  }, []);

  return (
    <div className="menu_header">
      <div className="menu_button">
        <Link to="/NewsPage">
          <button className="menu_button">뉴스</button>
        </Link>
      </div>
      <div className="menu_button">
        <Link to="/Calendar">
          <button className="menu_button">일정</button>
        </Link>
      </div>
      <div className="menu_button">
        <Link to="/Analysis1">
          <button className="menu_button"> 분석</button>
        </Link>
      </div>
      <div className="menu_button">
        <Link to="/Predict1">
          <button className="menu_button">예측</button>
        </Link>
      </div>
      <div className="menu_button">
        <Link to="/">
          <button className="menu_button">홈</button>
        </Link>
      </div>
    </div>
  );
}

export default Menu_Header;
