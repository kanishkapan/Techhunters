import React from "react";

const Lessons = () => {
  const lessons = [
    { id: 1, title: "SEM 1", description: "Standard 1 is a foundation Standard that reflects 7 important concepts and organise eveything" },
    { id: 2, title: "SEM 2", description: "Standard 2 builds on the foundations of Standard 1 and includes requirements." },
    { id: 3, title: "SEM 3", description: "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal." },
    { id: 4, title: "SEM 4", description: "Standard 4 of the Aged Care Quality Standards focuses on services and supports." },
    { id: 5, title: "SEM 5", description: "Standard 5 Learning Resources. Learning Resources ensure that the school has the." },
    { id: 6, title: "SEM 6", description: "Standard 6 requires an organisation to have a system to resolve complaints." },
    { id: 7, title: "SEM 7", description: "Standard 7 Blood Management mandates that leaders of health service organisations." },
    { id: 8, title: "SEM 8", description: "Standard 8 Course from NCERT Solutions help students to understand." },
  ];

  return (
    <div className="bg-[#ffe5f0]  min-h-screen py-10 px-5">
      <h2 className="text-3xl font-bold text-center text-gray-800">Qualified lessons for students</h2>
      <p className="text-center text-gray-600 mt-2">
        A lesson or class is a structured period of time where learning is intended to occur. It involves one or more
        students being taught by a teacher or instructor.
      </p>
      <div className="text-center my-6">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          SELECT BRANCH
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="relative bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition duration-500 ease-in-out"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-orange-400 text-white flex items-center justify-center font-bold mb-4">
              {lesson.id}
            </div>
            <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
            <p className="text-sm">{lesson.description}</p>
            <div className="mt-4">
              <button className="border border-purple-500 text-white-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition duration-300">
                {lesson.id < 5 ? "Sem Details" : "Sem Details"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition duration-300">
          Visit More Classes
        </button>
      </div>
    </div>
  );
};

export default Lessons;
