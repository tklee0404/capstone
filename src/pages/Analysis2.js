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
import Menu_Header from "../compoAssets/menu_header";
import Analysis_Graph from "../compoAssets/analysis_result_graph.js";
import Analysis_Table from "../compoAssets/analysis_result_table.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
import "../App.css";
import "../compoAssets/analysis_result_page_style.css";

function Analysis2() {
  return (
    <div>
      <Menu_Header></Menu_Header>
      <div className="analysis_result_container">
        
        <div className="analysis_result_table_container">
          <div className="analysis_result_table">
            <Analysis_Table></Analysis_Table>
          </div>
        </div>
        <div className="analysis_result_graph_container">
          <div className="analysis_result_graph">
            <Analysis_Graph></Analysis_Graph>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis2;
