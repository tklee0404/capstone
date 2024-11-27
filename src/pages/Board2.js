import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../compoAssets/board_page_style.css";
import Headerbar from "../UI/header.js";

function Board2 () {


    return (
        <div>
            <Headerbar></Headerbar>
            <div className="flex flex-col items-center w-full h-[700px] bg-black">
                <div class="card mt-10 sm:max-w-xl h-3/4 bg-gray-400">
                    <div class="card-body">
                        <h5 class="card-title mb-2.5">Welcome to Our Service</h5>
                        <p class="mb-4">Discover the features and benefits that our service offers. Enhance your experience with our user-friendly platform designed to meet all your needs.</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Board2