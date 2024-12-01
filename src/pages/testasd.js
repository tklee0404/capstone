import React, { useState } from "react";

function MODarticle({ id , comment_id}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // 打开编辑浮窗
  const handleOpenModal = () => setIsModalOpen(true);

  // 关闭编辑浮窗
  const handleCloseModal = () => setIsModalOpen(false);

  // 提交编辑请求
  const handleEdit = async () => {
    const payload = {
      title: title,
      contents: contents,
    };

    try {
      const response = await fetch(`http://220.88.39.23:5000/api/board/${id}/comment/${comment_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Post updated successfully!");
        setIsModalOpen(false); // 关闭浮窗
      } else {
        alert("Failed to update post. Please check your input.");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      alert("An error occurred while updating.");
    }
  };

  // 删除帖子请求
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://220.88.39.23:5000/api/board/${id}/comment/${comment_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Post deleted successfully!");
        // 可以在删除后执行其他操作，如跳转到列表页或更新父组件状态
      } else {
        alert("Failed to delete post. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("An error occurred while deleting.");
    }
  };

  return (
    <div className="flex mt-1">
      <div className="card-actions">
        <button
          className="btn btn-primary ml-2 bg-green-700"
          onClick={handleOpenModal}
        >
          MOD / 수정
        </button>
        <button
          className="btn btn-primary ml-2 bg-red-700"
          onClick={handleDelete} 
        >
          DEL / 삭제
        </button>
      </div>

      {/* 浮窗 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-4/5 max-w-lg p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Post</h2>
            <input
              className="px-2 w-full h-10 bg-gray-300 mb-4 border border-black rounded-md"
              placeholder="title 제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="px-2 w-full h-40 bg-gray-300 mb-4 border border-black rounded-md"
              placeholder="contents 내용"
              value={contents}
              onChange={(e) => setContents(e.target.value)}
            />
            
            <div className="flex justify-end">
              <button
                className="btn btn-secondary bg-gray-500 mr-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary bg-green-700"
                onClick={handleEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MODarticle;
