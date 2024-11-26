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
import "../compoAssets/board_page_style.css";
import Headerbar from "../UI/header.js";

function Board2 () {


    return (
        <div>
            <Headerbar></Headerbar>
            <div></div>
        </div>
    );
}

export default Board2