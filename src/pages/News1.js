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
  


  const selectNewsType1 = () => {
    
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "부상" })
      //to yang_hang : Categry : Injury : 부상
    );
  };
  const selectNewsType2 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "구단 관련" })
      //to yang_hang : Categry : Club_internal : 구단 관련
    );
  };
  const selectNewsType3 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "선수" })
      //to yang_hang : Categry : Player_idv : 선수
    );
  };
  const selectNewsType4 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "경기 결과" })
      //to yang_hang : Categry : Match_result : 경기 결과
    );
  };
  const selectNewsType5 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "경기 전" })
      //to yang_hang : Categry : Match_plan : 경기 전
    );
  };
  const selectNewsType6 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "논란" })
      //to yang_hang : Categry : Issue : 논란
    );
  };
  const selectNewsType7 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "이적" })
      //to yang_hang : Categry : Trade : 이적
    );
  };
  const selectNewsType8 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "선발 라인업" })
      //to yang_hang : Categry : Squad : 선발 라인업
    );
  };
  const selectNewsType9 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "인터뷰" })
      //to yang_hang : Categry : Interview : 인터뷰
    );
  };


  return (
    <div>
      <Menu_Header></Menu_Header>
      <img src={teamImgSrc} alt={`${selectedTeam}_logo`}></img>

      <div className="news_container_big">
        <div className="news_container">
          <Link to='/News2' onClick={selectNewsType1} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
                부상
              </div>
              <div className="news_block_info">
                information
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType2} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
                구단 관련
              </div>
              <div className="news_block_info">
                information
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType3} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
                선수
              </div>
              <div className="news_block_info">
                information
              </div>
            </div>
          </Link>
          <Link to='/News2' onClick={selectNewsType4} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
                경기 결과
              </div>
              <div className="news_block_info">
                information
              </div>
            </div>
          </Link>
        </div>

        <div className="news_container">
          <Link to='/News2' onClick={selectNewsType5} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
                경기 전
              </div>
              <div className="news_block_info">
                information
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType6} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
                논란
              </div>
              <div className="news_block_info">
                information
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType7} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
                이슈
              </div>
              <div className="news_block_info">
                information
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType8} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
                선발 라인업
              </div>
              <div className="news_block_info">
                information
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType9} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
                인터뷰
              </div>
              <div className="news_block_info">
                information
              </div>
            </div>
          </Link>
        </div>
      </div>

      

      
      <div className="keyword_container">
        <h3 className="keyword_container_intro">-keyword-</h3>
      </div>
    </div>
  );

 
}

export default News;
