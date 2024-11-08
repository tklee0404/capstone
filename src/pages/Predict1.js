import React from "react";
import { useEffect, useState } from "react";
import "../compoAssets/analysis_page_style.css";
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
import Menu_Header from "../compoAssets/menu_header";
import "../App.css";

function Predict1() {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [otherTeams, setOtherTeams] = useState([]);

  const teams = [
    "울산", "포항", "제주", "전북", "서울", "대전", "대구",
    "인천", "강원", "광주", "수원FC", "김천"
  ];

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("teamSelect"));
    if (storedData && storedData.selectedTeam) {
      setSelectedTeam(storedData.selectedTeam);
      setOtherTeams(teams.filter(team => team !== storedData.selectedTeam)); // 선택된 팀을 제외한 나머지 팀만 설정
    }
  }, []);

  const handleTeamChange = (e) => {
    console.log("selected team : ", e.target.value);
  };
  

  return(
    
    <div>

      <Menu_Header></Menu_Header>
      <div className="analysis_intro_container">
        <h2 className="analysis_intro">-예측하고 싶은 팀을 선택하세요-</h2>
      </div>

      <div className="analysis_input_container">
        <div className="analysis_input_row">
          <select className="analysis_dropdown" onChange={handleTeamChange}>
              <option value="">팀을 선택하세요</option>
              {otherTeams.map((team, index) => (
                <option key={index} value={team}>{team}</option>
              ))}
          </select>
        </div>
      </div>
      
      <div className="analysis_button_container">
        <Link to="/Predict2">
          <button className="analysis_button">
            입력하기
          </button>
        </Link>
      </div>
    </div>
  );

}

export default Predict1;
