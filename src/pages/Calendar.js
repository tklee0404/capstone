import React from "react";
import Headerbar from "../UI/header.js";
import "../App.css";
import "../compoAssets/calendar_page_style.css";

import Calendar_infor from "../UI/calendarUI.js"

function Calendar() {


  return (
    <div>
      <div><Headerbar /></div>

      <div><Calendar_infor /></div>

    </div>

  );

}

export default Calendar;

