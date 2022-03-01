import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Sidebar from "./components/SideBar";

function App() {
  return (
    
    <div className="App">
      <Header />
      <div className="app__main">
        <Sidebar />
        <Body />
        {/* <routes>
        <Route path="/" element={<home/>}/>
        <Route path="/channel/{id}" element={<channel/>}/>
        <Route path="/user/{id}" element={<user/>}/>
        </routes> */}
      </div>
    </div>
    
  );
}
export default App;
