import React from "react";
import { useEffect, useState } from "react";
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
import "../App.css";

function Predict1() {
  const [month, setMonth] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const number = parseInt(value, 10);

      if ((number >= 1 && number <= 12) || value === "") {
        setMonth(value);
      }
    }
  };

  const handleSubmit = () => {
    console.log("입력 숫자 : ", month);
  };

  

  return(
    
    <div>

      <Menu_Header></Menu_Header>
      <div className="analysis_intro_container">
        <h2 className="analysis_intro">-예측하고 싶은 기간을 입력하세요-</h2>
      </div>

      <div className="analysis_input_container">
        <div className="analysis_input_row">
        <input
          className="analysis_input"
          type="text"
          value={month}
          onChange={handleChange}
          placeholder="숫자만 입력 (1~12)"
        />
        <h3>달</h3>
        </div>
      </div>
      
      <div className="analysis_button_container">
        <Link to="/Predict2">
          <button className="analysis_button" onClick={handleSubmit}>
            입력하기
          </button>
        </Link>
      </div>
    </div>
  );

}

export default Predict1;
