import React from "react";

const Google = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-8">Sign in with Google</h1>
        <p className="text-gray-400 mb-6">Choose an account</p>
        <p className="text-lg font-medium mb-8">to continue to <span className="text-blue-500">NoteHunterss</span></p>
        <ul className="space-y-4">
          {[
            { name: "Kanishka Pandey", email: "kanishkacodes@gmail.com" },
            { name: "Creative Writer", email: "writercreative786@gmail.com" },
            { name: "Mufaddal Ratlamwala", email: "mufaddalgenai@gmail.com" },
            { name: "Mufaddal Work", email: "mufaddalwork@gmail.com" },
          ].map((account, index) => (
            <li
              key={index}
              className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-xl font-bold">
                {account.name[0]}
              </div>
              <div className="ml-4">
                <p className="font-semibold">{account.name}</p>
                <p className="text-sm text-gray-400">{account.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Google;
