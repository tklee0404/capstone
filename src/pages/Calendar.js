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
import { useLocation } from "react-router-dom";
import Menu_Header from "../compoAssets/menu_header";
import { useState, useEffect } from "react";
import "../App.css";
import "../compoAssets/calendar_page_style.css";
import CALENDAR from "../compoAssets/calendar_page_calendar";

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

function Calendar() {
  const [selectedTeam, setSelectedTeam] = useState();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("teamSelect"));
    if (storedData && storedData.selectedTeam) {
      setSelectedTeam(storedData.selectedTeam);
    }
  }, []);

  const [dateValue, onChange] = useState(new Date());

  if (selectedTeam == "team1") {
    return (
      <div>
        <Menu_Header></Menu_Header>
        <div className="calendar_container">
          <img src={K01} alt="ULSAN"></img>

          <div className="calendar">
            <CALENDAR></CALENDAR>
          </div>

          <div className="match_information">
            <h1>match_information</h1>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Calendar;
