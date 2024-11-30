import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
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

import Headerbar from "../UI/header.js";
import News_card from "../UI/News_card.js";
import ImageCard from "../UI/image_card.js";
import Tab from "../UI/tab_pill.js";


function News() {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `SportsHolic 뉴스`;
  }, []);

  const [selectedTeam, setSelectedTeam] = useState();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("teamSelect"));
    if (storedData && storedData.selectedTeam) {
      setSelectedTeam(storedData.selectedTeam);
    }
  }, []);

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

  const teamImgSrc = teamImages[selectedTeam];


  //------------------------------------------------------------------------------------------------------------------------------------------------------


  return (
    <div>
      <div><Headerbar /></div>

      <div class="container">
        <div class="item">
          <ImageCard image={teamImgSrc} alt={`${selectedTeam}_logo`} ></ImageCard>
        </div>
        {/* <div class="item"><News_card /></div> */}
      </div>

      <div><Tab /></div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>


      </div>
      <footer class="footer footer-center bg-base-200/60 px-6 py-4">
        <aside>
          <p>Copyright © 2024 - All right reserved.</p>
        </aside>
      </footer>


    </div>


  );


}


export default News;



