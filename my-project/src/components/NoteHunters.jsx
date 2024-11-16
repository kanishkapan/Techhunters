import React from "react";

const NoteHunters = () => {
  return (
    <div className="bg-[#ffe5f0] min-h-screen px-6 md:px-20 py-10">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-12">
        <div className="text-2xl font-bold text-[#ff6b6b]">NoteHunterss</div>
        <div className="space-x-6 text-lg text-gray-600">
          <a href="#" className="hover:text-[#ff6b6b]">Signup</a>
          <a href="#" className="hover:text-[#ff6b6b]">Login</a>
          <a href="#" className="hover:text-[#ff6b6b]">Upload</a>
          <a href="#" className="hover:text-[#ff6b6b]">Chat</a>
          <a href="#" className="hover:text-[#ff6b6b]">Resources</a>
          <a href="#" className="hover:text-[#ff6b6b]">My Account</a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="bg-[#ffe5f0] text-[#ff6b6b] inline-block px-4 py-2 rounded-full mb-4 text-sm font-medium">
            Never Stop Learning
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Grow up your knowledge <br />
            and grades by <span className="text-[#ff6b6b]">NoteHunterss</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Eduvi is a Global training provider based across the UK that specializes in accredited and bespoke training courses. We crush the barriers to getting a degree.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] text-gray-600">
              <option>Computer Science</option>
              <option>Mechanical</option>
              <option>Electrical</option>
              <option>Civil</option>
              <option>Electronics and telecommunication</option>
              <option>Information Technology </option>
            </select>
            <input
              type="text"
              placeholder="Enter Subject"
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] text-gray-600"
            />
            <button className="bg-[#ff6b6b] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#e55d5d]">
              Search
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
          <div className="bg-gray-200 h-96 w-full rounded-lg shadow-lg flex justify-center items-center">
            {/* Placeholder for Main Image */}
            <img
              src="https://plus.unsplash.com/premium_photo-1683141506839-c8a751f227b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Main Content"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteHunters;
