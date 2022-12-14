import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <Sidebar />
    </div>
  );
}

export default App;
