
import React from "react";
import "./App.css";
import Header from "./components/Header"
import Body from "./components/Body";
import Sidebar from "./components/SideBar";
function App() {
  return <div className="App"> 
  <Header />
  <Sidebar />
  <Body />

  </div>;
}
export default App;
