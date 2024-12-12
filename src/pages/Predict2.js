import React, { useState, useEffect } from "react";
import Headerbar from "../UI/header.js";
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
  const [PredictData, setPredictData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [opponentTeam, setOpponentTeam] = useState("");
  const [isFlipped, setIsFlipped] = useState({
    win: false,
    lose: false,
    draw: false,
  });

  useEffect(() => {
    const getInfo = async () => {
      if (token && selectedTeam && opponentTeam) {
        setLoading(true);
        try {
          const fetchedData = await Fetch_predict(token, selectedTeam, opponentTeam);
          if (
            fetchedData &&
            !isNaN(fetchedData.win) &&
            !isNaN(fetchedData.lose) &&
            !isNaN(fetchedData.draw)
          ) {
            setPredictData(fetchedData);
          } else {
            console.warn("Invalid prediction data:", fetchedData);
            setPredictData(null);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setPredictData(null);
        } finally {
          setLoading(false);
        }
      }
    };

    getInfo();
  }, [token, selectedTeam, opponentTeam]);

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
    김천: K12,
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
      [cardType]: !prev[cardType],
    }));
  };

  const renderPredictionContent = () => {
    if (loading) {
      return <div className="loading-container">加载中...</div>;
    }

    if (!PredictData) {
      return <div className="loading-container">无法获取预测数据</div>;
    }

    return (
      <>
        <div className="predict_page_logo_container">
          <div>
            <img
              className="predict_result_logo"
              src={teamImages[selectedTeam]}
              alt={`${selectedTeam} logo`}
            />
          </div>
          <div className="vs">VS</div>
          <div>
            <img
              className="predict_result_logo"
              src={teamImages[opponentTeam]}
              alt={`${opponentTeam} logo`}
            />
          </div>
        </div>

        <div className="predict_page_result_container">
          <div className="predict_result_value_container">
            <div
              className={`predict_card ${isFlipped.win ? "is-flipped" : ""}`}
              onClick={() => handleCardClick("win")}
            >
              <div className="predict_result_win_card_front">?</div>
              <div className="predict_result_win_card_back">
                <div className="predict_result_win_card_back_title">WIN</div>
                <div className="predict_result_win_card_back_value">
                  {(PredictData.win * 100).toFixed(2)}%
                </div>
              </div>
            </div>
          </div>

          <div className="predict_result_value_container">
            <div
              className={`predict_card ${isFlipped.lose ? "is-flipped" : ""}`}
              onClick={() => handleCardClick("lose")}
            >
              <div className="predict_result_lose_card_front">?</div>
              <div className="predict_result_lose_card_back">
                <div className="predict_result_lose_card_back_title">LOSE</div>
                <div className="predict_result_lose_card_back_value">
                  {(PredictData.lose * 100).toFixed(2)}%
                </div>
              </div>
            </div>
          </div>

          <div className="predict_result_value_container">
            <div
              className={`predict_card ${isFlipped.draw ? "is-flipped" : ""}`}
              onClick={() => handleCardClick("draw")}
            >
              <div className="predict_result_draw_card_front">?</div>
              <div className="predict_result_draw_card_back">
                <div className="predict_result_draw_card_back_title">DRAW</div>
                <div className="predict_result_draw_card_back_value">
                  {(PredictData.draw * 100).toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <Headerbar />

      <div className="predict_page_container_outer">
        <div className="predict_page_container_big">
          {renderPredictionContent()}
        </div>
      </div>

      <footer
        className="footer footer-center bg-base-200/60 px-6 py-4"
        style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}
      >
        <aside>
          <p>Copyright © 2024-IntG_Team - All right reserved.</p>
        </aside>
      </footer>
    </div>
  );
}

export default Predict2;