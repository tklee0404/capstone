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

      <footer class="footer footer-center bg-base-200/60 px-6 py-4">
        <aside>
          <p>Copyright © 2024-IntG_Team - All right reserved.</p>
        </aside>
      </footer>
    </div>

  );

}

export default Calendar;

