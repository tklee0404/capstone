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
import { useLocation } from "react-router-dom";
import Menu_Header from "../compoAssets/menu_header";
import { useState, useEffect, useRef } from "react";
import "../App.css";
import "../compoAssets/calendar_page_style.css";
import CALENDAR from "../compoAssets/calendar_page_calendar";
import html2canvas from "html2canvas";

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

  const calendarRef = useRef(null);

  const handleScreenShot = async () => {
    if (calendarRef.current) {
      try {
        const canvas = await html2canvas(calendarRef.current, {
          useCORS: true
        });
        const screenShot = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = screenShot;
        link.download = "calendar_screenshot.png";
        link.click();
      } catch (error) {
        console.error("스크린샷 캡쳐 오류", error);
      }
    } else {
      console.error("calendarRef is EMPTY");
    }
  };


  return(
    <div>
      <Menu_Header></Menu_Header>
      <div className="calendar_page_container_outer" >
        <div className="calendar_page_container_big" ref={calendarRef}>

          <div className="calendar_page_calendar_container">
            <CALENDAR></CALENDAR>
          </div>
          <div className="calendar_page_schedule_container">
            <div className="calendar_match_logo_container">
              <img src={K01}></img>
              <img src={K02}></img>
            </div>
            <div className="calendar_match_result_container">
              <div className="team1_score">
                1
              </div>
              <div className="team2_score">
                2
              </div>
            </div>
            <div className="calendar_match_option_container">
              <button className="calendar_screen_shot" onClick={handleScreenShot}>
                스크린샷으로 저장
              </button>
              <button className="calendar_google">
                구글 캘린더 연동
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  );

}

export default Calendar;

/*
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
*/