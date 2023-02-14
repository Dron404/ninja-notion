import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import NoutionPage from "./pages/NoutionPage";
import {
  getLocalStorage,
  setLocalStorage,
} from "./utils/strorage/localStorage";

if (!getLocalStorage("lang")) setLocalStorage("lang", "en");
if (!getLocalStorage("theme")) setLocalStorage("theme", "light");

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/pages/:pageId" element={<NoutionPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
