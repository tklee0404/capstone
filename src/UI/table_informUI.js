import React, { useState, useEffect } from "react";
import fetch_analysis from "../apiService/fetch_analysis";

export default function CardExample() {
  const token = localStorage.getItem("token");
  const [analysisData, setAnalysisData] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      if (token) {
        const fetchedData = await fetch_analysis(token);
        setAnalysisData(fetchedData);
      }
    };
    getInfo();
  }, [token]);

  // 动态生成表头
  const tableHeaders = analysisData.length > 0 ? Object.keys(analysisData[0]) : [];

  return (
    <div className="w-full h-96 overflow-auto">
      <table className="table-auto w-full border-collapse border border-gray-0">
        <thead className="bg-gray-0 sticky top-0">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Round Number</th>
            {tableHeaders.map((header) => (
              <th key={header} className="border border-gray-300 px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {analysisData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-nowrap">{index + 1}</td>
              {tableHeaders.map((header) => (
                <td key={header} className="border border-gray-300 px-4 py-2 text-nowrap">
                  {typeof item[header] === "object" && item[header] !== null
                    ? JSON.stringify(item[header])
                    : item[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
