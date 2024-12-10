import React, { useState, useEffect } from 'react';
import "../App.css";

import Headerbar from "../UI/header.js";
import Shots from "../UI/shotsUI.js";
import Pass from "../UI/passUI.js";
import SingleAreaChart from "../UI/chart_line.js";
import "../compoAssets/news_background_style.css";
import Table_informUI from "../UI/table_informUI.js";
import Tackles from "../UI/tacklesUI.js";
import Assists from "../UI/assistsUI.js";

function Analysis2() {
  const [activeTab, setActiveTab] = useState(1);  // 默认激活第一个 tab

  // 处理 tab 切换
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div>
        <Headerbar />
      </div>

      

       <div class="divider divider-dotted"><p class="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent font-black text-4xl w-fit" > 
      The Team STATE
       </p></div>     
       
    <div>
      <nav className="tabs tabs-bordered" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
        <button
          type="button"
          className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(1)}
          aria-controls="tabs-basic-1"
          role="tab"
          aria-selected={activeTab === 1}
        >
          Shots
        </button>
        <button
          type="button"
          className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(2)}
          aria-controls="tabs-basic-2"
          role="tab"
          aria-selected={activeTab === 2}
        >
          Pass
        </button>
        <button
          type="button"
          className={`tab ${activeTab === 3 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(3)}
          aria-controls="tabs-basic-3"
          role="tab"
          aria-selected={activeTab === 3}
        >
          tackles
        </button>
        <button
          type="button"
          className={`tab ${activeTab === 4 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(4)}
          aria-controls="tabs-basic-4"
          role="tab"
          aria-selected={activeTab === 4}
        >
          Assists
        </button>
      </nav>

      <div className="mt-3">
        <div
          id="tabs-basic-1"
          role="tabpanel"
          aria-labelledby="tabs-basic-item-1"
          className={activeTab === 1 ? '' : 'hidden'}
        >
          <Shots />
        </div>
        <div
          id="tabs-basic-2"
          role="tabpanel"
          aria-labelledby="tabs-basic-item-2"
          className={activeTab === 2 ? '' : 'hidden'}
        >
         <Pass />
        </div>
        <div
          id="tabs-basic-3"
          role="tabpanel"
          aria-labelledby="tabs-basic-item-3"
          className={activeTab === 3 ? '' : 'hidden'}
        >
          <Tackles />
        
        </div>
        <div
          id="tabs-basic-4"
          role="tabpanel"
          aria-labelledby="tabs-basic-item-4"
          className={activeTab === 4 ? '' : 'hidden'}
        >
          <Assists />
        
        </div>
      </div>
    </div>

    
    <div class="divider"><span class="flex items-center justify-center"><span class="icon-[tabler--crown] size-5"></span></span></div>
    <p style={{ textAlign: 'center' }}>
    Detailed data information
    </p>
      <div style={{ padding: 40 }}><Table_informUI /></div>

      <footer class="footer footer-center bg-base-200/60 px-6 py-4">
        <aside>
          <p>Copyright © 2024-IntG_Team - All right reserved.</p>
        </aside>
      </footer>
    </div>
  );
}

export default Analysis2;
