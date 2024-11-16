import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp";
import NoteHunters from "./components/Notehunters";
import UploadNotes from "./components/UploadNotes";
import Lessons from "./components/Lessons";
import SkillDevelopmentSection from "./components/SkillDevelopmentSection";
import Google from "./components/Google";

const HomePage = () => {
  return (
    <>
   
      <NoteHunters />
      <UploadNotes />
      <Lessons />
      <SkillDevelopmentSection />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page renders all components except Signup */}
        <Route path="/" element={<HomePage />} />
        {/* Signup route */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
