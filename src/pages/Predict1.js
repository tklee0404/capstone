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
import Main_Header from '../compoAssets/main_header.js';
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
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `SportsHolic 예측`;
  }, []);

  const [selectedOpponentTeam, setSelectedOpponentTeam] = useState(""); // 상대 팀 상태
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate

  const teams = [
    "울산",
    "포항",
    "제주",
    "전북",
    "서울",
    "대전",
    "대구",
    "인천",
    "강원",
    "광주",
    "수원FC",
    "김천",
  ];

  const [otherTeams, setOtherTeams] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("teamSelect"));
    if (storedData && storedData.selectedTeam) {
      setOtherTeams(teams.filter((team) => team !== storedData.selectedTeam)); // 선택된 팀 제외
    }
  }, []);

  const handleTeamChange = (e) => {
    const team = e.target.value;
    setSelectedOpponentTeam(team);
    setErrorMessage(""); // 선택 시 에러 메시지 초기화
  };

  const handleButtonClick = () => {
    if (!selectedOpponentTeam) {
      setErrorMessage("팀을 선택해야 합니다."); // 에러 메시지 출력
      return;
    }
    localStorage.setItem(
      "opponentTeamSelect",
      JSON.stringify({ selectedOpponentTeam })
    ); // 선택값 저장
    navigate("/Predict2"); // 정상적으로 이동
  };

  return (
    <div>
      <Main_Header />
      <div className="predict_intro_container">
        <h2 className="predict_intro">-예측하고 싶은 팀을 선택하세요-</h2>
      </div>

      <div className="predict_input_container">
        <div className="predict_input_row">
          <select
            className="predict_dropdown"
            value={selectedOpponentTeam}
            onChange={handleTeamChange}
          >
            <option value="">팀을 선택하세요</option>
            {otherTeams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
          <button className="predict_button" onClick={handleButtonClick}>
            입력하기
          </button>
        </div>
        {errorMessage && <p className="error_message">{errorMessage}</p>} {/* 에러 메시지 */}
      </div>

      <h1>-가장 최근 경기 예측 결과-</h1>

      <div className="nearest_game_container">
        <div className="nearest_game_result_team">
          <img src={K01} alt="Team 1" />
          <img src={K02} alt="Team 2" />
        </div>

        <div className="nearest_game_result_score">
          <div className="team1_container">
            <div className="team1_score">1</div>
          </div>
            :
          <div className="team2_container">
            <div className="team2_score">2</div>
          </div>
        </div>
      </div>

      <div className="predict_button_container"></div>
    </div>
  );
}

export default Predict1;

