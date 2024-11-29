import React from "react";
import { useLocation } from "react-router-dom";
import "../compoAssets/board_page_style.css";
import Headerbar from "../UI/header.js";

function Board2() {
    const location = useLocation();
    const post = location.state; // Board1에서 전달된 데이터

    return (
        <div className="justify-center item-center w-full">
            <Headerbar></Headerbar>
    
            <div className="justify-center item-center flex w-full h-full">
                <div className="flex flex-col items-center w-4/5 h-[1100px] bg-gray-200">
                    <div className="card mt-3 w-full h-1/4 bg-gray-400 text-black p-1"> {/* 내부 카드 */}
                        <div className="card-body flex flex-col h-full">
                            <div className="flex justify-between items-center mb-1">
                                <h5 className="card-title text-black">{post?.title || "TITLE / 제목"}</h5>
                            </div>
                            <div className="content border border-black rounded-md overflow-y-auto flex-1 p-1">
                                <p className="mb-4 break-words">{post?.content || "Content goes here..."}</p>
                                <p className="text-gray-600 ml-4">{post?.nickname || "writer's nickname / 글쓴이"}</p>
                            </div>
                            <div className="flex mt-1">
                                <div className="card-actions">
                                    <button className="btn btn-primary bg-green-700">MOD / 수정</button>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-primary ml-2 bg-green-700">DEL / 삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="card mt-3 w-full h-1/2 bg-gray-400 text-black"> {/* COMMENT */}
                        <div className="card-body">
                            <h5 className="card-title mb-2.5 text-black">COMMENT / 댓글</h5>
                            <div>
                                <div className="w-full overflow-x-auto">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td className="text-nowrap">
                                                    Comment content goes here.
                                                    <button class="btn btn-circle btn-text btn-sm text-black" aria-label="Action button"><span class="icon-[tabler--pencil]"></span></button>
                                                    <button class="btn btn-circle btn-text btn-sm text-black" aria-label="Action button"><span class="icon-[tabler--trash]"></span></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="card mt-3 w-full bg-gray-400 text-black"> {/* ADD COMMENT */}
                        <div className="card-body">
                            <h5 className="card-title mb-2.5 text-black">ADD C / 댓글 달기</h5>
                            <textarea
                                className="textarea mb-2 max-w-sm text-black"
                                aria-label="Textarea"
                            ></textarea>
                            <div className="card-actions">
                                <button className="btn btn-primary bg-green-700">POST / 댓글달기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board2;

/*
<button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--pencil]"></span></button>
<button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--trash]"></span></button>

*/