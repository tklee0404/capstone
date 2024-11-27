import React from "react";
import News_card from "../UI/News_card";
import Header from "../UI/header";

export default function CardExample() {
    return (
        <div>
            <div><Header /></div>

            <div><News_card /></div>


            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1, textAlign: "left" }}><News_card /></div>
                
                <div style={{ display: "flex", justifyContent: "center" }}>
                <div class="artboard artboard-demo artboard-horizontal phone-4">896 × 414</div>
                </div>

                <div style={{ flex: 1, textAlign: "right" }}><News_card /></div>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1, textAlign: "left" }}>Left Content</div>
                <div>adwaw</div>
                <div style={{ flex: 1, textAlign: "right" }}>Right Content</div>
            </div>

            <div>
                <div style={{ marginBottom: "10px" }}>Top Content</div>
                <div>Bottom Content</div>
            </div>

        
        </div>


    );
}
