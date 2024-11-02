import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import Menu_Header from "../compoAssets/menu_header";
import { useLocation } from "react-router-dom";
import "../compoAssets/news_background_style.css";
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

function News() {
  const [selectedTeam, setSelectedTeam] = useState();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("teamSelect"));
    if (storedData && storedData.selectedTeam) {
      setSelectedTeam(storedData.selectedTeam);
    }
  }, []);

  if (selectedTeam == "team1") {
    console.log("team1");
    return (
      <div>
        <Menu_Header></Menu_Header>
        <img src={K01} alt="team1"></img>
        <div className="news_background">
          <h3 className="news_background_intro"> -news block- </h3>
        </div>
        <div className="keyword_background">
          <h3 className="keyword_background_intro">-keyword-</h3>
        </div>
      </div>
    );
  } else if (selectedTeam == "team2") {
    console.log("team2");
    return (
      <div>
        <Menu_Header></Menu_Header>
        <img src={K02} alt="team2"></img>
      </div>
    );
  }
  /*
    return(
        
            <div>    
                <img src={K01} alt="aaa"></img>
            </div>
        
    )
            */
}

export default News;
