import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Sidebar from "./components/SideBar";
import ChannelsService from "./services/ChannelService";
import UsersService from "./services/UserService";

function App() {
  
  const [channels, setChannels] = useState([])
  const [users, setUsers] = useState([])
  
  useEffect(()=> {
    retrieveChannels()
    retrieveUsers()
  },[])
 

  const retrieveChannels = () => {
    ChannelsService.getAll()
    .then(response => {
      setChannels(response.data);
      console.log(response.data)
    })
  }
  const retrieveUsers = () => {
    UsersService.getAll()
    .then(response => {
      setUsers(response.data);
      console.log(response.data)
    })
  }


  return (
    <div className="App">
      <Header />
      <div className="app__main">
        <Sidebar />
        <Body />
      </div>
    </div>
    
  );
}
export default App;
