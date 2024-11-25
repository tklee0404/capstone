import React, { useEffect, useState } from "react";
import dummyData from "./dummy_data2.json";
import "./analysis_result_page_style.css";

import fetch_analysis from "../apiService/fetch_analysis";

function Analysis_Table() {
    const token = localStorage.getItem('token');
    const analysis_month =localStorage.getItem('analysis_month');
    const [analysisData,setanalysisData] = useState([]);

    useEffect(() => {
      const getInfo = async () => {
        if (token) { 
          const fetchedData = await fetch_analysis(token,analysis_month);
          setanalysisData(fetchedData);
        }
      };
      getInfo(); 
    }, [token]);

    const entries = Object.entries(analysisData);
    const itemsPerColumn = Math.ceil(entries.length / 3);
  
  
    return (
      <div className="analysis_result_table_wrapper">
      <table className="analysis_result_table_style">
      <thead  style={{ backgroundColor: "green" }}>
        <tr>
          <th style={{ padding: "20px", border: "1px solid black" }}>NAME</th>
          <th style={{ padding: "8px", border: "1px solid black" }}>NUM</th>
          <th style={{ padding: "10px", border: "1px solid black" }}>NAME</th>
          <th style={{ padding: "8px", border: "1px solid black" }}>NUM</th>
          <th style={{ padding: "10px", border: "1px solid black" }}>NAME</th>
          <th style={{ padding: "8px", border: "1px solid black" }}>NUM</th>
          
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: itemsPerColumn }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[0, 1, 2].map(columnIndex => {
              const dataIndex = rowIndex + columnIndex * itemsPerColumn;
              const [key, value] = entries[dataIndex] || [];
              return key ? (
                <React.Fragment key={columnIndex}>
                  <td style={{ padding: "20px", border: "1px solid black" }}>
                    {key.replace(/_/g, ' ').toUpperCase()}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid black" }}>
                    {value !== null ? value : 'N/A'}
                  </td>
                </React.Fragment>
              ) : (
                <React.Fragment key={columnIndex}>
                  <td style={{ padding: "20px", border: "1px solid black" }}></td>
                  <td style={{ padding: "8px", border: "1px solid black" }}></td>
                </React.Fragment>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    );

}

export default Analysis_Table;