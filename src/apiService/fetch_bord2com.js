import React, { useState, useEffect } from "react";
import Com_Mod from "../apiService/board2_com_mod.js";

function MODarticle({ id }) {
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);

    //API fetch GET
    const fetchComments = async () => {
        try {
            const response = await fetch(`http://220.88.39.23:5000/api/board/${id}/comment`);
            if (response.ok) {
                const data = await response.json();
                setComments(data);
                console.error("Failed to fetch comments.");
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

//API fetch POST
    const handleAddComment = async () => {
        if (!commentText) {
            alert("Please enter a comment before posting.");
            return;
        }

        const payload = {
            contents: commentText,
        };

        try {
            const response = await fetch(`http://220.88.39.23:5000/api/board/${id}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const result = await response.json();
                const newComment = {
                    id: result.comment_id, // return comment_id
                    contents: commentText,
                    written_date: new Date().toLocaleString(),
                };
                setComments([newComment, ...comments]);
                setCommentText("");
                alert("Comment posted successfully!");
            } else {
                alert("Failed to post comment.");
            }
        } catch (error) {
            console.error("Error posting comment:", error);
            alert("An error occurred while posting the comment.");
        }
    };


    useEffect(() => {
        fetchComments(); 
    }, [id]);
    return (
        <div className="card mt-3 w-full bg-gray-400 text-black">
            
            {/* COMMENT SECTION */}
            <div className="card-body h-full overflow-y-auto">
                <h5 className="card-title mb-2.5 text-black">COMMENT / 댓글</h5>
                
                <div className="w-full">
                    <table className="table bg-gray-300 w-full">
                        <tbody>
                            {comments.map((comment) => (
                                <tr key={comment.id}>
                                    <td className="text-nowrap">
                                        <p className="text-gray-500 text-sm">ID:{comment.comment_id}</p>
                                        <p className="text-gray-600">- {comment.contents} -</p>
                                        <p className="text-gray-500 text-sm">{comment.written_date}</p>
                                        <Com_Mod id={id} comment_id={comment.comment_id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            {/* ADD COMMENT SECTION */}
            <div className="card-body">
                <h5 className="card-title mb-2.5 text-black">ADD C / 댓글 달기</h5>
                <textarea
                    className="px-2 w-full h-16 bg-gray-300 mt-2 mb-1 border border-black rounded-md"
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)} 
                />
                <div className="card-actions mt-2">
                    <button
                        className="btn btn-primary bg-green-700"
                        onClick={handleAddComment} 
                    >
                        POST / 댓글달기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MODarticle;
