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
import "../compoAssets/news_info.css";

import ExampleImage from '../logo_image/emblem_K01.png';


function News2() {

    const [selectedNewsType, setSelectedNewsTeam] = useState();
    const news_data = JSON.parse(localStorage.getItem("news_data"));
    
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("newsTypeSelect"));

    if (storedData && storedData.selectedNewsType) {
        setSelectedNewsTeam(storedData.selectedNewsType);
    }
  }, []);
  
  return(
    <div>
      <Main_Header></Main_Header>
        <div className="news_info_container">

            <div className="news_info_catalog">
                <div className="news_info_catalog_info">{selectedNewsType}</div>
            </div>
            <div className="news_info">
                <ul>
                {news_data.map((item, index) => ( <p key={index}><div className="inline_title"><h3 className="inline">{index+1}.</h3> {item.headline}</div><p className="inline_info"><a href={item.url}>URL:{item.url}</a></p></p> ))}
                </ul>
            </div>
        </div>
    </div>
);

    
    
}

export default News2;