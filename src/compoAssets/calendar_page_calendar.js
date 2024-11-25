import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar_style.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Game_Calendar() {

    const [value, onChange] = useState(new Date());

    return(
        <div>
            <Calendar onChange={onChange} value={value}
            formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
            >

            </Calendar>
        </div>
    );
}

export default Game_Calendar;