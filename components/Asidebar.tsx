import { useState } from "react";
import Hero from "./Hero"; // Assuming Hero.tsx is imported

const ActiveDashboard = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [fileList, setFileList] = useState(["file1", "file2", "file3", "file4", "file5"]);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar toggle state

  const filteredFiles = fileList.filter((file) =>
    file.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <div className="nav-bar flex bg-gray-800 rounded-md h-auto">
        <div className="nav-items">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "h-full" : "w-0"
        } bg-gray-200 h-10 w-full p-4 transition-all duration-300 ease-in-out overflow-hidden`}
      >
        {/* Chevron Toggle */}
        <div className="flex justify-end">
          <button onClick={toggleSidebar} className="text-gray-600">
            {sidebarOpen ? (
              <span className="flex flex-col align-middle mb-4 mt-4">&#9664; {/* Left Chevron */}</span>
            ) : (
              <span>&#9654; {/* Right Chevron */}</span>
            )}
          </button>
        </div>

        {/* Sidebar Content */}
        {sidebarOpen && (
          <>
            <h2 className="text-lg justify-between font-bold mb-2">Table Browser</h2>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-4 p-2 w-full"
            />

            {/* File List */}
            <div className="file-list">
              {filteredFiles.map((file, index) => (
                <div key={index} className="flex items-center cursor-pointer justify-between p-2 border-b">
                  <div className="file-name">{file}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Main Content */}
      <div
        className={`${
          sidebarOpen ? "w-full" : "w-0"
        } transition-all duration-300 ease-in-out`}
      >
      </div>
    </div>
    </div>
    </div>
  );
};

export default ActiveDashboard;
