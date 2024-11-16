import React from "react";

const UploadNotes = () => {
  return (
    <div className="bg-[#ffe5f0] min-h-screen  px-3 md:px-3">
      {/* Upload Notes Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1e1e2f]">Upload Notes</h2>
        <p className="text-gray-600 mt-4">
          Share your knowledge with the community. <br />
          Keep all your important notes in one place. <br />
          Access your uploaded notes anytime, anywhere.
        </p>
        <button className="bg-[#7c4dff] text-white px-8 py-2 mt-6 rounded-lg text-lg hover:bg-[#693de4]">
          UPLOAD
        </button>
      </div>

      {/* Gap below Upload Notes Section */}
      <div className="mb-10"></div>

      {/* Image and Content Section */}
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Large Image */}
        <div className="h-[600px] bg-gray-300">
          <img
            src="https://images.unsplash.com/photo-1501159873713-dc65286617cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
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
