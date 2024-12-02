import React, { useEffect, useState } from "react";
import "../compoAssets/predict_page_style.css";
import { useNavigate } from "react-router-dom";
import Headerbar from "../UI/header.js";
import K02 from "../logo_image/emblem_K02.png"; // 相对路径示例
import fetch_analysis from "../apiService/fetch_analysis.js";

function Predict1() {
  const token = localStorage.getItem("token");
  const [analysisData, setAnalysisData] = useState([]);
  
  useEffect(() => {
    const getInfo = async () => {
      if (token) {
        const fetchedData = await fetch_analysis(token);
        setAnalysisData(fetchedData);
      }
    };
    getInfo();
  }, [token]);

  const [selectedTeam, setSelectedTeam] = useState();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("teamSelect"));
    if (storedData && storedData.selectedTeam) {
      setSelectedTeam(storedData.selectedTeam);
    }
  }, []);

  const teamImages = {
    울산: K02, // 示例图标
    // 添加其他团队图标
  };

  const [selectedOpponentTeam, setSelectedOpponentTeam] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();

  const teams = [
    "울산", "포항", "제주", "전북", "서울", "대전", "대구", "인천", "강원", "광주", "수원FC", "김천",
  ];

  const teamImgSrc = teamImages[selectedTeam];

  const handleTeamChange = (e) => {
    const team = e.target.value;
    setSelectedOpponentTeam(team);
    setErrorMessage(""); 
  };

  const handleButtonClick = () => {
    if (!selectedOpponentTeam) {
      setErrorMessage("팀을 선택해야 합니다.");
      return;
    }
    localStorage.setItem("opponentTeamSelect", JSON.stringify({ selectedOpponentTeam }));
    navigate("/Predict2");
  };

  return (
    <div>
      <Headerbar />
      <div className="justify-center flex w-full h-screen ">
        <div className="w-full flex flex-col">
          <div className="justify-center items-center flex mt-5 w-full h-1/6 ">
            <div className="text-3xl">예측하고 싶은 팀을 선택하세요</div>
          </div>

          <div className="justify-center items-center flex mt-5 w-full h-1/6 ">
            <div className="predict_input_container">
              <div className="predict_input_row">
                <select
                  className="predict_dropdown"
                  value={selectedOpponentTeam}
                  onChange={handleTeamChange}
                >
                  <option value="">팀을 선택하세요</option>
                  {teams.map((team, index) => (
                    <option key={index} value={team}>
                      {team}
                    </option>
                  ))}
                </select>
                <button className="predict_button" onClick={handleButtonClick}>
                  입력하기
                </button>
              </div>
              {errorMessage && <p className="error_message">{errorMessage}</p>}
            </div>
          </div>

          <h1>-가장 최근 경기 예측 결과-</h1>

          <div className="justify-center items-center flex mt-5 w-full h-1/3 ">
            <div className="items-center flex flex-col w-11/12 h-5/6 border border-y-green-600 border-4 bg-gray-500">
              <div className="justify-around items-center flex w-full h-1/2 ">
                <img className="predict_image" src={teamImgSrc} alt="Team 1" />
                <img className="predict_image" src={K02} alt="Team 2" />
              </div>
              <div className="justify-evenly items-center flex w-full border border-t-green-600 h-1/2 ">
                  <div className="text-4xl">
                    {/* 确保 analysisData 和 goals 存在再渲染 */}
                    {analysisData && analysisData.goals ? analysisData.goals : "Loading..."}
                  </div>
                  <div className="text-4xl">:</div>
                  <div className="text-4xl">2</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Predict1;
