import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import dummyData from "./dummy_data1.json";
import React from "react";

function Analysis_Chart() {

    return(
        <BarChart width={700} height={500} data={dummyData}>
            <Bar dataKey="확률" fill="#8884d8"></Bar>
            <XAxis dataKey="tag"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            
        </BarChart>
    );

}

export default Analysis_Chart;