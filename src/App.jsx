import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { LogIn } from "./Pages/LogIn";
import VotingPage from "./Pages/VotingPage/VotingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/VotingPage" element={<VotingPage />} />
        </Routes>
      </Router>{" "}
    </>
  );
}

export default App;
