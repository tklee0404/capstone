import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../compoAssets/board_page_style.css";
import Headerbar from "../UI/header.js";

function Board2() {
    const location = useLocation();
    const post = location.state; // Board1에서 전달된 데이터

    // 댓글 데이터 상태 관리
    const [comments, setComments] = useState([]);
    const [nickname, setNickname] = useState("");
    const [commentText, setCommentText] = useState("");

    // 댓글 수정 상태 관리
    const [editIndex, setEditIndex] = useState(null); // 현재 수정 중인 댓글의 인덱스
    const [editComment, setEditComment] = useState(""); // 수정 중인 댓글 내용

    // 댓글 추가 핸들러
    const handleAddComment = () => {
        if (!nickname.trim() || !commentText.trim()) {
            alert("닉네임과 댓글을 모두 입력해주세요.");
            return;
        }

        // 새로운 댓글 추가
        setComments([...comments, { nickname, commentText }]);
        
        // 입력 필드 초기화
        setNickname("");
        setCommentText("");
    };

    // 댓글 삭제 핸들러
    const handleDeleteComment = (index) => {
        // 해당 댓글을 삭제
        setComments(comments.filter((_, i) => i !== index));
    };

    // 댓글 수정 모드 활성화
    const handleEditComment = (index, commentText) => {
        setEditIndex(index); // 수정 중인 댓글의 인덱스를 설정
        setEditComment(commentText); // 수정 중인 댓글 내용을 상태에 저장
    };

    // 댓글 수정 완료 핸들러
    const handleUpdateComment = (index) => {
        if (!editComment.trim()) {
            alert("댓글 내용을 입력해주세요.");
            return;
        }

        const updatedComments = comments.map((comment, i) =>
            i === index ? { ...comment, commentText: editComment } : comment
        );
        setComments(updatedComments); // 댓글 상태 업데이트
        setEditIndex(null); // 수정 모드 종료
        setEditComment(""); // 수정 중인 내용 초기화
    };

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

                    <div className="card mt-3 w-full h-[500px] bg-gray-400 text-black"> {/* COMMENT */}
                        <div className="card-body h-full overflow-y-auto"> {/* 부모 높이 고정, 스크롤 추가 */}
                            <h5 className="card-title mb-2.5 text-black">COMMENT / 댓글</h5>
                            <div className="w-full"> {/* 테이블을 감싸는 영역 */}
                                <table className="table bg-gray-300 w-full">
                                    <tbody>
                                        {comments.map((comment, index) => (
                                            <tr key={index}>
                                                <td className="text-nowrap">
                                                    <p className="text-gray-600">-{comment.nickname}-</p>
                                                    {/* 줄바꿈을 <br>로 변환하여 출력 */}
                                                    <div>
                                                        {editIndex === index ? (
                                                            <textarea
                                                                className="w-full h-16 px-2 border border-black rounded-md"
                                                                value={editComment}
                                                                onChange={(e) => setEditComment(e.target.value)}
                                                            ></textarea>
                                                        ) : (
                                                            comment.commentText.split('\n').map((line, i) => (
                                                                <React.Fragment key={i}>
                                                                    {line}
                                                                    <br />
                                                                </React.Fragment>
                                                            ))
                                                        )}
                                                    </div>
                                                    <div className="flex space-x-2 mt-2"> {/* 버튼 간격 조정 */}
                                                        {editIndex === index ? ( // 수정 상태
                                                            <button
                                                                className="btn btn-primary bg-green-700 text-white"
                                                                onClick={() => handleUpdateComment(index)} // 수정 완료
                                                            >
                                                                POST / 수정 완료
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className="btn btn-primary bg-green-700 text-white"
                                                                onClick={() => handleEditComment(index, comment.commentText)} // 수정 모드 활성화
                                                            >
                                                                수정
                                                            </button>
                                                        )}
                                                        <button
                                                            className="btn btn-primary bg-red-700 text-white"
                                                            aria-label="Delete comment"
                                                            onClick={() => handleDeleteComment(index)} // 삭제 핸들러 호출
                                                        >
                                                            삭제
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-3 w-full bg-gray-400 text-black"> {/* ADD COMMENT */}
                        <div className="card-body">
                            <h5 className="card-title mb-2.5 text-black">ADD C / 댓글 달기</h5>
                            <textarea
                                className="px-2 w-full h-1/4 bg-gray-300 mt-2 mb-1 border border-black rounded-md"
                                placeholder="nickname"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)} // 닉네임 상태 업데이트
                            ></textarea>
                            <textarea
                                className="px-2 w-full h-3/5 bg-gray-300 mt-2 mb-1 border border-black rounded-md"
                                placeholder="comment"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)} // 댓글 내용 상태 업데이트
                            ></textarea>
                            <div className="card-actions">
                                <button className="btn btn-primary bg-green-700" onClick={handleAddComment}>
                                    POST / 댓글달기
                                </button>
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

/* */