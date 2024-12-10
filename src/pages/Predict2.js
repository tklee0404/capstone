import React from "react";
import Headerbar from "../UI/header.js";
import { useState, useEffect, useRef } from "react";
import "../App.css";
import "../compoAssets/predict_result_page_style.css";

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

import Fetch_predict from "../apiService/fetch_predict.js";

function Predict2() {
  const token = localStorage.getItem("token");
  const [PredictData, setPredictData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [opponentTeam, setOpponentTeam] = useState("");
  const [isFlipped, setIsFlipped] = useState({
    win: false,
    lose: false,
    draw: false,
  });

  useEffect(() => {
    const getInfo = async () => {
      if (token) {
        const fetchedData = await Fetch_predict(token,selectedTeam,opponentTeam);
        setPredictData(fetchedData);
      }
    };
    getInfo();
  }, [token]);


  const teamImages = {
    울산: K01,
    포항: K02,
    제주: K03,
    전북: K04,
    서울: K05,
    대전: K06,
    대구: K07,
    인천: K08,
    강원: K09,
    광주: K10,
    수원FC: K11,
    김천: K12
  };

  useEffect(() => {
    const selectedTeamData = JSON.parse(localStorage.getItem("teamSelect"));
    const opponentTeamData = JSON.parse(localStorage.getItem("opponentTeamSelect"));
    if (selectedTeamData && selectedTeamData.selectedTeam) {
      setSelectedTeam(selectedTeamData.selectedTeam);
    }
    if (opponentTeamData && opponentTeamData.selectedOpponentTeam) {
      setOpponentTeam(opponentTeamData.selectedOpponentTeam);
    }
  }, []);

  const handleCardClick = (cardType) => {
    setIsFlipped((prev) => ({
      ...prev,
      [cardType]: !prev[cardType], // 해당 카드의 상태만 변경
    }));
  };


  return (
    <div>
      <Headerbar />
      {PredictData}
      <div className="predict_page_container_outer">
        <div className="predict_page_container_big">
          <div className="predict_page_logo_container">
            <div><img className="predict_result_logo" src={teamImages[selectedTeam]} alt={`${selectedTeam} logo`}></img></div>
            <div className="vs">VS</div>
            <div><img className="predict_result_logo" src={teamImages[opponentTeam]} alt={`${opponentTeam} logo`}></img></div>
          </div>
          <div className="predict_page_result_container">
            <div className="predict_result_value_container">
              <div className={`predict_card ${isFlipped.win ? "is-flipped" : ""}`}
                onClick={() => handleCardClick("win")}>
                <div className="predict_result_win_card_front">
                  ?
                </div>
                <div className="predict_result_win_card_back">
                  <div className="predict_result_win_card_back_title">
                    WIN
                  </div>
                  <div className="predict_result_win_card_back_value">
                    NN %
                  </div>
                </div>
              </div>
            </div>
            <div className="predict_result_value_container">
              <div className={`predict_card ${isFlipped.lose ? "is-flipped" : ""}`}
                onClick={() => handleCardClick("lose")}>
                <div className="predict_result_lose_card_front">
                  ?
                </div>
                <div className="predict_result_lose_card_back">
                  <div className="predict_result_lose_card_back_title">
                    LOSE
                  </div>
                  <div className="predict_result_lose_card_back_value">
                    NN %
                  </div>
                </div>
              </div>
            </div>
            <div className="predict_result_value_container">
              <div className={`predict_card ${isFlipped.draw ? "is-flipped" : ""}`}
                onClick={() => handleCardClick("draw")}>
                <div className="predict_result_draw_card_front">
                  ?
                </div>
                <div className="predict_result_draw_card_back">
                  <div className="predict_result_draw_card_back_title">
                    DRAW
                  </div>
                  <div className="predict_result_draw_card_back_value">
                    NN %
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Predict2;