import React, { useState } from "react";

function PostBoard() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handlePost = async () => {
    const payload = {
      title: title,
      contents: contents,
    };

    try {
      const response = await fetch("http://220.88.39.23:5000/api/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Post submitted successfully!");
        console.log(data);
      } else {
        alert("Failed to post. Please check your input.");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("An error occurred while posting.");
    }
  };

  return (
    <div className="flex flex-col items-center flex w-4/5 h-[400px]">
      <div className="flex flex-col items-center w-full bg-white h-full border border-black rounded-2xl">
        <input
          className="px-2 w-10/12 h-1/12 bg-gray-300 mt-2 border border-black rounded-md"
          placeholder="title 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="px-2 w-10/12 h-3/5 bg-gray-300 mt-2 border border-black rounded-md"
          placeholder="contents 내용"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <button
          className="w-10/12 h-1/6 bg-green-700 mt-2 border border-black rounded-md"
          onClick={handlePost}
        >
          POST / 올리기
        </button>
      </div>
    </div>
  );
}

export default PostBoard;
