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
import { useState, useEffect } from "react";
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

function Predict2() {

    const [selectedTeam, setSelectedTeam] = useState("");
    const [opponentTeam, setOpponentTeam] = useState("");


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

    return(
        <div>
            <Menu_Header></Menu_Header>
            <div className="predict_page_container_outer">
                <div className="predict_page_container_big">
                    <div className="predict_page_logo_container">
                        <div><img src={teamImages[selectedTeam]} alt={`${selectedTeam} logo`}></img></div>
                        <div className="vs">VS</div>
                        <div><img src={teamImages[opponentTeam]} alt={`${opponentTeam} logo`}></img></div>
                    </div>
                    <div className="predict_page_result_container"></div>
                </div>
            </div>
        </div>
    );

}

export default Predict2;