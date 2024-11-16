import React, { useState } from "react";

const UploadNotes = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setUploadMessage(`File "${file.name}" is ready to be uploaded.`);
    } else {
      setUploadMessage("Please select a valid PDF file.");
    }
  };

  const handleUploadClick = () => {
    if (!selectedFile) {
      setUploadMessage("Please select a PDF file first.");
      return;
    }

    // Simulate uploading the file (replace with actual upload logic, e.g., to a server)
    setTimeout(() => {
      setUploadMessage(`File "${selectedFile.name}" uploaded successfully.`);
      setSelectedFile(null);
    }, 1500);
  };

  return (
    <div className="bg-[#ffe5f0] min-h-screen px-3 md:px-3">
      {/* Upload Notes Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1e1e2f]">Upload Notes</h2>
        <p className="text-gray-600 mt-4">
          Share your knowledge with the community. <br />
          Keep all your important notes in one place. <br />
          Access your uploaded notes anytime, anywhere.
        </p>

        {/* File Input and Upload Button */}
        <div className="mt-6">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="bg-[#7c4dff] text-white px-8 py-2 rounded-lg text-lg cursor-pointer hover:bg-[#693de4]"
          >
            Choose File
          </label>

          {selectedFile && (
            <button
              onClick={handleUploadClick}
              className="bg-green-500 text-white px-8 py-2 ml-4 rounded-lg text-lg hover:bg-green-600"
            >
              Upload
            </button>
          )}
        </div>

        {/* Upload Message */}
        {uploadMessage && (
          <p className="text-gray-700 mt-4 font-semibold">{uploadMessage}</p>
        )}
      </div>

      {/* Gap below Upload Notes Section */}
      <div className="mb-10"></div>

      {/* Image and Content Section */}
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Large Image */}
        <div className="h-[600px] bg-gray-300">
          <img
            src="https://images.unsplash.com/photo-1501159873713-dc65286617cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Upload Notes"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Video/Controls Overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Add controls or icons here if needed */}
        </div>
      </div>
    </div>
  );
};

export default UploadNotes;
