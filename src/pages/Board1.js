import React, { useState } from "react";
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
      { nickname: "이", title: "탁경", content: "이것은 게시글 내용입니다." },
      { nickname: "avbac", title: "길고 긴 제목", content: "길고 긴 내용이 여기에 적혀 있습니다." },
      { nickname: "이", title: "탁경", content: "다른 게시글의 내용입니다." },
      { nickname: "두번째", title: "다른 제목", content: "다른 내용입니다." },
      { nickname: "이", title: "탁경", content: "이것은 게시글 내용입니다." },
      { nickname: "avbac", title: "길고 긴 제목", content: "길고 긴 내용이 여기에 적혀 있습니다." },
      { nickname: "이", title: "탁경", content: "다른 게시글의 내용입니다." },
      { nickname: "두번째", title: "다른 제목", content: "다른 내용입니다." },
      { nickname: "이", title: "탁경", content: "이것은 게시글 내용입니다." },
      { nickname: "avbac", title: "길고 긴 제목", content: "길고 긴 내용이 여기에 적혀 있습니다." },
      { nickname: "이", title: "탁경", content: "다른 게시글의 내용입니다." },
      { nickname: "두번째", title: "다른 제목", content: "다른 내용입니다." }
    ];

    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const postsPerPage = 9; // 한 페이지에 표시되는 게시글 최대 개수
    const totalPages = Math.ceil(dummyData.length / postsPerPage); // 전체 페이지 수 계산

    const currentData = dummyData.slice(
      (currentPage - 1) * postsPerPage,
      currentPage * postsPerPage
    );

    const navigate = useNavigate();

    // 게시글 클릭 핸들러
    const handleRowClick = (post) => {
      navigate("/Board2", { state: post }); // 게시글 데이터를 state로 전달
    };

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    return (
        <div>
            <Headerbar> </Headerbar>
            <div className="justify-center item-center flex h-screen">
              <div className="flex flex-col justify-center items-center bg-gray-300 w-full h-[900px] ">
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
                        {currentData.map((data, index) => (
                          <tr
                            key={index}
                            className="border-b border-black cursor-pointer"
                            onClick={() => handleRowClick(data)}
                          >
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
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index}
                          className={`px-2 ${currentPage === index + 1 ? "font-bold underline" : ""}`}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  items-center flex bg-yellow-500 w-4/5 h-[400px]">
                  <div className="flex flex-col items-center w-full bg-white h-full border border-black rounded-2xl">
                    <input className="px-2 w-10/12 h-1/12 bg-gray-300 mt-2 border border-black rounded-md" placeholder="nickname 닉네임"></input>
                    <input className="px-2 w-10/12 h-1/12 bg-gray-300 mt-2 border border-black rounded-md" placeholder="title 제목"></input>
                    <textarea className="px-2 w-10/12 h-3/5 bg-gray-300 mt-2 border border-black rounded-md"></textarea>
                    <button className="w-10/12 h-1/6 bg-green-700 mt-2 border border-black rounded-md">POST / 올리기</button>
                  </div>
                </div>
                <Link to="/Board2" className="text-blue-500 underline">
                  Go to Board2
                </Link>
              </div>
            </div>
        </div>
    );
}

export default Board1;

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