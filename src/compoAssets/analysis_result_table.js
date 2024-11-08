import React from "react";
import dummyData from "./dummy_data2.json";

function Analysis_Table() {

    return (
        <div>
            <table style={{ width: 700, height: 500, borderCollapse: "collapse" }}>
                <thead style={{backgroundColor: "green"}}>
                    <tr>
                        <th style={{ width: "30%", border: "1px solid black", padding: "8px" }}>이름</th>
                        <th style={{ width: "70%", border: "1px solid black", padding: "8px" }}>수</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((item, index) => (
                        <tr key={index}>
                            <td style={{ width: "30%", border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.이름}</td>
                            <td style={{ width: "70%", border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.수}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );


}

export default Analysis_Table;