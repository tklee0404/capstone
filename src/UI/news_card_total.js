import React from "react";
import News_card from "./News_card.js";

export default function CardExample({data,num}) {
    const cards = Array.from({ length: num }, (_, index) => (
        <News_card key={index} {...data[index]} />
      ));
      
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
            <News_card />
            <News_card />
            <News_card />
            <News_card />
            <News_card />
        </div>





    );
}
