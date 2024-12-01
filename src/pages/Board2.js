import React, { useState ,useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../compoAssets/board_page_style.css";
import Headerbar from "../UI/header.js";
import MODarticle from "../apiService/board2_mod_art.js";
import Fetch_borad2com from "../apiService/fetch_bord2com.js";


function Board2() {
    const location = useLocation();
    const post = location.state; // Board1에서 전달된 데이터

    return (
        <div className="justify-center item-center w-full">
            <Headerbar></Headerbar>

            <div className="justify-center item-center flex w-full h-auto bg-gray-200"> {/* 전체 height 자동 조정 */}
                <div className="flex flex-col items-center w-4/5 bg-gray-200 h-auto"> {/* 내부 height 자동 조정 */}
                    <div className="card mt-3 w-full bg-gray-400 text-black p-1"> {/* 제목 카드 */}
                        <div className="card-body flex flex-col h-auto"> {/* 제목 카드 내용 */}
                            <div className="flex justify-between items-center mb-1">
                                <h5 className="card-title text-black break-words whitespace-normal break-all">
                                    {post?.title || "TITLE / 제목"}
                                </h5>
                            </div>
                            <div className="content border border-black rounded-md bg-gray-300 overflow-y-auto p-1" style={{ height: "50%" }}> {/* 내용 고정 높이 */}
                                <p className="mb-4 break-words">{post?.contents || "Content goes here..."}</p>
                                <p className="text-gray-600 ml-4">ID:{post?.id || "writer's ID"}</p>
                            </div>
                            <div className="flex mt-1">

                                    <MODarticle id={post?.id} />
                                    {/* Delete and Mod function */}

                            </div>
                        </div>
                    </div>

                       <Fetch_borad2com id={post?.id}/>
                        {/* THE COM COMPOMENT */}

                </div>
            </div>
        </div>
    );
}

export default Board2;

