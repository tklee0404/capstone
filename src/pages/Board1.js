import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import fetch_board from "../apiService/fetch_board.js";
import Headerbar from "../UI/header.js";
import "../compoAssets/board_page_style.css";
import PostBoard from "../apiService/board1com_POST.js";

function Board1() {

  const token = localStorage.getItem("token");
  const [boardData, setboardData] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      if (token) {
        const fetchedData = await fetch_board(token);
        setboardData(fetchedData);
      }
    };
    getInfo();
  }, [token]);


  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const postsPerPage = 9; // 한 페이지에 표시되는 게시글 최대 개수
  const totalPages = Math.ceil(boardData.length / postsPerPage); // 전체 페이지 수 계산

  const currentData = boardData.slice(
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
                    <th scope="col" className="py-2 text-white border-l border-black border-t border-b">ID</th>
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
                        {data.id}
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


          <PostBoard />

        </div>
      </div>
      
    </div>
    
  );
}

export default Board1;
