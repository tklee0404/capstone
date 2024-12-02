import React, { useEffect, useState } from "react";
import "../compoAssets/predict_page_style.css";
import { useNavigate } from "react-router-dom";
import Headerbar from "../UI/header.js";
import K02 from "../logo_image/emblem_K02.png"; // 相对路径示例
import fetch_analysis from "../apiService/fetch_analysis.js";

function Predict1() {
 
  return (
    <div>
     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeBf8XQT6q8hxy9u5eqG-qXeveJE_maL9C1d2mLa79VuU1fWw/viewform?embedded=true" width="640" height="856" frameborder="0" marginheight="0" marginwidth="0">正在加载…</iframe>

    </div>
  );
}

export default Predict1;
