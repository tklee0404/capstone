import React from "react";
import { useEffect, useState } from "react";
import "../compoAssets/predict_page_style.css";
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
    const selectedOpponentTeam = e.target.value;
    localStorage.setItem("opponentTeamSelect", JSON.stringify({ selectedOpponentTeam }));
  };

  return(
    
    <div>

      <Menu_Header></Menu_Header>
      <div className="predict_intro_container">
        <h2 className="predict_intro">-예측하고 싶은 팀을 선택하세요-</h2>
      </div>

      <div className="predict_input_container">
        <div className="predict_input_row">
          <select className="predict_dropdown" onChange={handleTeamChange}>
              <option value="">팀을 선택하세요</option>
              {otherTeams.map((team, index) => (
                <option key={index} value={team}>{team}</option>
              ))}
          </select>
        </div>
      </div>

      <h1>-가장 최근 경기 예측 결과-</h1>

      <div className="nearest_game_container">
          <div className="nearest_game_result_team">
              <img src={K01}></img>
              <img src={K02}></img>
          </div>

          <div className="nearest_game_result_score"> 
              <div className="team1_container">
                <div className="team1_score">
                  1 
                </div>
              </div>
              
              <div className="team2_container">
                <div className="team2_score">
                  2
                </div>
              </div>
          </div>
      </div>
      <div className="predict_button_container">
        <Link to="/Predict2">
          <button className="predict_button">
            입력하기
          </button>
        </Link>
      </div>
    </div>
  );

}

export default Predict1;

