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
        <div className="justify-center item-center  w-full">
            <Headerbar></Headerbar>

            <div className="justify-center item-center flex w-full h-full">
            <div className="flex flex-col items-center h-[1100px] bg-gray-200">
                <div class="card mt-3 w-4/5 bg-gray-400"> {/* ARTICLE */}
                    <div class="card-body">
                        <h5 class="card-title mb-2.5">Welcome to Our Service</h5>
                        <p class="mb-4">Discover the features and benefits that our service offers. Enhance your experience with our user-friendly platform designed to meet all your needs.</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div class="card mt-3 w-4/5 h-1/2 bg-gray-400"> {/* COMMENT */}
                    <div class="card-body">
                        <h5 class="card-title mb-2.5">Welcome to Our Service</h5>
                        <p class="mb-4">Discover the features and benefits that our service offers. Enhance your experience with our user-friendly platform designed to meet all your needs.</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div class="card mt-3 w-4/5  bg-gray-400"> {/* ADD COMMENT */}
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
            
            
            
        </div>
    );
}

export default Board2