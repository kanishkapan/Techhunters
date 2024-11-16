import React from "react";
import { Link } from "react-router-dom";

const SkillDevelopmentSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-purple-50 p-8 lg:p-16 rounded-lg">
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-6">
        <div>
          <span className="text-purple-600 bg-purple-100 py-1 px-3 rounded-full text-sm font-medium">
            College Level
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Don’t waste time in <br />
          Social Media. <br />
          Develop your skills.
        </h1>
        <ul className="space-y-2 text-gray-600">
          <li>“Invest in yourself. It pays the best interest.”</li>
          <li>“The expert in anything was once a beginner.”</li>
          <li>“Skill is only developed by hours and hours of work.”</li>
          <li>“Don’t limit your challenges. Challenge your limits.”</li>
        </ul>
        <Link to="/signup">
          <button className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300">
            SIGN UP NOW
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center relative">
        {/* Larger space for the image */}
        <div className="w-full lg:w-[100%] h-96 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Skill Development"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Icons (as decoration) */}
        <div className="absolute top-8 right-8 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shadow">
          <span className="text-orange-600 text-xl font-bold">HTML</span>
        </div>
        <div className="absolute bottom-12 right-20 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow">
          <span className="text-blue-600 text-xl font-bold">PHP</span>
        </div>
        <div className="absolute top-16 left-12 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shadow">
          <span className="text-red-600 text-xl font-bold">Java</span>
        </div>
      </div>
    </section>
  );
};

export default SkillDevelopmentSection;
