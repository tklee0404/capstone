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
import Main_Header from '../compoAssets/main_header.js';
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

import icon1 from "../logo_image/icon_injury.png";
import icon2 from "../logo_image/icon_club.png";
import icon3 from "../logo_image/icon_player.png";
import icon4 from "../logo_image/icon_result.png";
import icon5 from "../logo_image/icon_before.png";
import icon6 from "../logo_image/icon_issue.png";
import icon7 from "../logo_image/icon_trade.png";
import icon8 from "../logo_image/icon_lineup.png";
import icon9 from "../logo_image/icon_interview.png";


//Link the API Part
import fetch_token from "../apiService/fetch_token";
import fetch_injury from "../apiService/news-injury";
import fetch_trade from "../apiService/news-trade";
import fetch_clubinternal from "../apiService/news-Club_internal";
import fetch_Player_idv from "../apiService/news-player_idv";
import fetch_Match_result from "../apiService/news-match_result";
import fetch_match_plan from "../apiService/news-match_plan";
import fetch_Issue from "../apiService/news-Issue";
import fetch_Squad from "../apiService/news-Squad"
import fetch_Interview from "../apiService/news-Interview";


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

  // Set API information
  const username = "test"; 
  //const team = selectedTeam; // When ALL api information already done .change team to this one
  const team = "울산";
  const [token, setToken] = useState('');  //token
  const [Local_token, setLocalToken] = useState(localStorage.getItem('token') || '');
  const [Local_name, setLocalName] = useState(localStorage.getItem('username') || '');
  const [Local_team, setLocalTeam] = useState(localStorage.getItem('team') || '');

  const [tradeData,settradeData] = useState([]); 
  const [injuryData,setinjuryData] = useState([]);
  const [club_internal,setclubinternal] = useState([]);
  const [player_idv,setPlayer_idv] = useState([]);
  const [match_result,setmatch_result] = useState([]);
  const [match_plan,setMatch_plan] = useState([]);
  const [Issue,setIssue] =useState([]);
  const [Squad,setSquad] = useState([]);
  const [Interview,setInterview] =useState([]);
  
//Get token
  useEffect(() => {
    const getTokenInfo = async () => {
      if (username !== Local_name || team !== Local_team) {
        const fetchedToken = await fetch_token(username, team);
        setToken(fetchedToken);
        setLocalToken(fetchedToken);
        setLocalName(username);
        setLocalTeam(team);
        
        localStorage.setItem('token', fetchedToken);
        localStorage.setItem('username', username);
        localStorage.setItem('team', team);
      } else {
        setToken(Local_token);   //token value
      }
    };
    getTokenInfo(); 
  }, [username, selectedTeam, Local_name, Local_team, Local_token]);

//------------------------------------------------------------------------------------------------------------------------------------------------------
//to yang_hang : Categry : Injury : 부상  
  useEffect(() => {
    const getInfo = async () => {
      if (token) { 
        const fetchedData = await fetch_injury(token);
        setinjuryData(fetchedData);
      }
    };
    getInfo(); 
  }, [token]);
  const selectNewsType1 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "부상" })
    );

    localStorage.setItem('news_data',JSON.stringify(injuryData));
  };

//to yang_hang : Categry : Club_internal : 구단 관련
  useEffect(() => {
    const getInfo = async () => {
      if (token) { 
        const fetchedData = await fetch_clubinternal(token);
        setclubinternal(fetchedData);
      }
    };
    getInfo(); 
  }, [token]);
  const selectNewsType2 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "구단 관련" })
    );

    localStorage.setItem('news_data',JSON.stringify(club_internal));
  };

  //to yang_hang : Categry : Player_idv : 선수
  useEffect(() => {
    const getInfo = async () => {
      if (token) { 
        const fetchedData = await fetch_Player_idv(token);
        setPlayer_idv(fetchedData);
      }
    };
    getInfo(); 
  }, [token]);
  const selectNewsType3 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "선수" })

    );
    localStorage.setItem('news_data',JSON.stringify(player_idv));
  };

  //to yang_hang : Categry : Match_result : 경기 결과
  useEffect(() => {
    const getInfo = async () => {
      if (token) { 
        const fetchedData = await fetch_Match_result(token);
        setmatch_result(fetchedData);
      }
    };
    getInfo(); 
  }, [token]);
  const selectNewsType4 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "경기 결과" })
    
    );
    localStorage.setItem('news_data',JSON.stringify(match_result));
  };

  //to yang_hang : Categry : Match_plan : 경기 전
  useEffect(() => {
    const getInfo = async () => {
      if (token) { 
        const fetchedData = await fetch_match_plan(token);
        setMatch_plan(fetchedData);
      }
    };
    getInfo(); 
  }, [token]);
  const selectNewsType5 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "경기 전" })
    
    );
    localStorage.setItem('news_data',JSON.stringify(match_plan));
  };

//to yang_hang : Categry : Issue : 논란
  useEffect(() => {
    const getInfo = async () => {
      if (token) { 
        const fetchedData = await fetch_Issue(token);
        setIssue(fetchedData);
      }
    };
    getInfo(); 
  }, [token]);
  const selectNewsType6 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "논란" })
      
    );
    localStorage.setItem('news_data',JSON.stringify(Issue));
  };
  
   //to yang_hang : Categry : Trade : 이적
   useEffect(() => {
    const getInfo = async () => {
      if (token) { 
        const fetchedtradeData = await fetch_trade(token);
        settradeData(fetchedtradeData);
      }
    };
    getInfo(); 
  }, [token]);
  const selectNewsType7 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({  
        selectedNewsType: "이적" ,
      })
    );
    localStorage.setItem('news_data',JSON.stringify(tradeData));
  };

//to yang_hang : Categry : Squad : 선발 라인업
  useEffect(() => {
    const getInfo = async () => {
      if (token) { 
        const fetchedData = await fetch_Squad(token);
        setSquad(fetchedData);
      }
    };
    getInfo(); 
  }, [token]);
  const selectNewsType8 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "선발 라인업" })
      
    );
    localStorage.setItem('news_data',JSON.stringify(Squad));
  };


 //to yang_hang : Categry : Interview : 인터뷰
  useEffect(() => {
    const getInfo = async () => {
      if (token) { 
        const fetchedData = await fetch_Interview(token);
        setInterview(fetchedData);
      }
    };
    getInfo(); 
  }, [token]);
  const selectNewsType9 = () => {
    localStorage.setItem(
      "newsTypeSelect",
      JSON.stringify({ selectedNewsType: "인터뷰" })
     
    );
    localStorage.setItem('news_data',JSON.stringify(Interview));
  };

//------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <Main_Header></Main_Header>
      <div className="selected_team_logo">
        <img src={teamImgSrc} alt={`${selectedTeam}_logo`}></img>
      </div>

      <div className="news_container_big">
        <div className="news_container">
          <Link to='/News2' onClick={selectNewsType1} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
                <img src={icon1} width="15%" height="15%"></img>
                <h4>부상</h4>
              </div>
              <div className="news_block_info">
              {/* {injuryData.map((item, index) => ( <p key={index}><h3 className="inline">{index+1}.</h3> {item.headline} </p> ))} */} 
                {<p> {injuryData ? JSON.stringify(injuryData) : 'Loading...'} </p>}
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType2} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
              <img src={icon2} width="15%" height="15%"></img>
              <h4>구단 관련</h4>
                
              </div>
              <div className="news_block_info">
                  {club_internal.map((item, index) => ( <p key={index}><h3 className="inline">{index+1}.</h3> {item.headline} </p> ))}
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType3} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
              <img src={icon3} width="15%" height="15%"></img>
              <h4>선수</h4> 
              </div>
              <div className="news_block_info">
                  {player_idv.map((item, index) => ( <p key={index}> <h3 className="inline">{index+1}.</h3>{item.headline} </p> ))}
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType4} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
              <img src={icon4} width="15%" height="15%"></img>
                <h4>경기 결과</h4>
              </div>
              <div className="news_block_info">
                 {match_result.map((item, index) => ( <p key={index}> <h3 className="inline">{index+1}.</h3> {item.headline} </p> ))}
              </div>
            </div>
          </Link>
        </div>

        <div className="news_container">
          <Link to='/News2' onClick={selectNewsType5} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
              <img src={icon5} width="15%" height="15%"></img>
                경기 전 
              </div>
              <div className="news_block_info">
               {match_plan.map((item, index) => ( <p key={index}> <h3 className="inline">{index+1}.</h3> {item.headline} </p> ))}
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType6} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
              <img src={icon6} width="15%" height="15%"></img>
              <h4>논란</h4>
              </div>
              <div className="news_block_info">
                 {Issue.map((item, index) => ( <p key={index}> <h3 className="inline">{index+1}.</h3> {item.headline} </p> ))}
                  {/* {<p> {Issue ? JSON.stringify(Issue) : 'Loading...'} </p>} */}
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType7} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
              <img src={icon7} width="15%" height="15%"></img>
              <h4>이적</h4>
              </div>
              <div className="news_block_info">
              {tradeData.map((item, index) => ( <p key={index}> <h3 className="inline">{index+1}.</h3> {item.headline} </p> ))}
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType8} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
                <img src={icon8} width="15%" height="15%"></img>
                <h4>선발 라인업</h4>
                          
              </div>
              <div className="news_block_info">
                {Squad.map((item, index) => ( <p key={index}> <h3 className="inline">{index+1}.</h3> {item.headline} </p> ))}
              </div>
            </div>
          </Link>

          <Link to='/News2' onClick={selectNewsType9} className="link_reset">
            <div className="news_block">
              <div className="news_block_intro">
              <img src={icon9} width="15%" height="15%"></img>
              <h4>인터뷰</h4> 
      
              </div>
              <div className="news_block_info">
                 {Interview.map((item, index) => ( <p key={index}> <h3 className="inline">{index+1}.</h3> {item.headline} </p> ))}
              </div>
            </div>
          </Link>
        </div>

       
      </div>







    </div>

     
  );

 
}

/*
<div className="keyword_container">
        <h3 className="keyword_container_intro">-keyword-</h3>
      </div>
*/

export default News;



