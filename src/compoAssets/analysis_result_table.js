import React from "react";
import dummyData from "./dummy_data2.json";
import "./analysis_result_page_style.css";

function Analysis_Table() {
    const divSize = Math.ceil(dummyData.length / 3);
    const tableData = [
      dummyData.slice(0, divSize),
      dummyData.slice(divSize, divSize * 2),
      dummyData.slice(divSize * 2)
    ];
  
    return (
      <div className="analysis_result_table_wrapper">
        {tableData.map((dataChunk, index) => (
          <table key={index} className="analysis_result_table_style">
            <thead style={{ backgroundColor: "green" }}> 
              <tr>
                <th style={{ width: "30%", border: "1px solid black", padding: "8px" }}>이름</th>
                <th style={{ width: "70%", border: "1px solid black", padding: "8px" }}>수</th>
              </tr>
            </thead>
            <tbody>
              {dataChunk.map((item, idx) => (
                <tr key={idx}>
                  <td style={{ width: "30%", border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.이름}</td>
                  <td style={{ width: "70%", border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.수}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    );

}

export default Analysis_Table;