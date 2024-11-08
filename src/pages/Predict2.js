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
import Main_Header from "../compoAssets/main_header";
import { useLocation } from "react-router-dom";
import Menu_Header from "../compoAssets/menu_header";
import { useState, useEffect } from "react";
import "../App.css";

function Predict2() {

    return(
        <div>
            <Menu_Header></Menu_Header>
            <div className="predict_result_container">
                predict2 page
            </div>
        </div>
    );

}

export default Predict2;