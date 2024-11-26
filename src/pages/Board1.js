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

import Headerbar from "../UI/header.js";
import "../compoAssets/board_page_style.css";


function Board1() {

    const dummyData = [
      { nickname: "이", title: "탁경" },
      { nickname: "avbac", title: "aaaaaadddddddddddddddaddddddddddddddddddddddaaaaaaaaaaaaaaa" },
      { nickname: "이", title: "탁경" },
      { nickname: "이", title: "탁경" },
      { nickname: "이", title: "탁경" },
      { nickname: "이", title: "탁경" },
      { nickname: "이", title: "탁경" },
      { nickname: "이", title: "탁경" },
      { nickname: "이", title: "탁경" },
      
    ];

    return(
        <div>
            <Headerbar> </Headerbar>
            <div className="justify-center item-center flex h-screen">
              <div className="flex flex-col justify-center items-center bg-gray-300 w-1/2 h-[900px] ">
                <div className="justify-center item-center flex bg-white w-4/5 h-[500px]">
                  <div className="w-full overflow-x-auto pt-2">
                    <table className="w-full border border-black table-fixed">
                      <colgroup>
                        <col style={{ width: "30%" }} />
                        <col style={{ width: "70%" }} />
                      </colgroup>
                      <thead className="border-b border-black bg-green-700 h-fit">
                        <tr>
                          <th scope="col" className="py-2 text-white border-l border-black border-t border-b">글쓴이</th>
                          <th scope="col" className="py-2 text-white border-r border-black border-t border-b-0">제목</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dummyData.map((data, index) => (
                          <tr key={index} className="border-b border-black">
                            <td className="border border-black px-2 py-2 whitespace-nowrap overflow-hidden text-ellipsis">
                              {data.nickname}
                            </td>
                            <td className="border border-black px-2 py-2 whitespace-nowrap overflow-hidden text-ellipsis">
                              {data.title}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="w-full bg-green-700 h-fit border border-black rounded-b-2xl mt-2 py-2 text-center text-white">
                      1 2 3
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  items-center flex bg-yellow-500 w-4/5 h-[400px]">
                  <div className="flex flex-col items-center w-full bg-white h-full border border-black rounded-2xl">
                    <input className="px-2 w-10/12 h-1/12 bg-gray-300 mt-2 border border-black rounded-md" placeholder="nickname 닉네임"></input>
                    <input className="px-2 w-10/12 h-1/12 bg-gray-300 mt-2 border border-black rounded-md" placeholder="title 제목"></input>
                    <textarea className="px-2 w-10/12 h-4/6 bg-gray-300 mt-2 border border-black rounded-md"></textarea>
                    <button className="w-10/12 h-1/6 bg-gray-300 mt-2 border border-black rounded-md">POST / 올리기</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}

export default Board1

/*
return(
        <div>
            <Headerbar> </Headerbar>
            <div className="board_page_biggest">
                <div className="board_page_outer_container">    
                    <div className="board_page_board_container">
                        <div className="board_page_board">
                            <div class="w-full overflow-x-auto">
                                <table className="board_page_board_itself">
                                    <colgroup>
                                        <col style={{ width: "30%" }}></col>
                                        <col style={{ width: "70%" }}></col>
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col">글쓴이</th>
                                            <th scope="col">제목</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="article_nickname text-nowrap">이</td>
                                            <td className="article_title">탁경</td>
                                        </tr>
                                        <tr>
                                            <td className="article_nickname">avbac</td>
                                            <td className="article_title">aaaaaadddddddddddddddaddddddddddddddddddddddaaaaaaaaaaaaaaa</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="board_page_paging_container">
                                1
                                2
                                3
                            </div>
                        </div>
                    </div>
                    
                    <div className="board_page_write_container">
                        글쓰기
                    </div>
                </div>
            </div>
        </div>
    );
*/