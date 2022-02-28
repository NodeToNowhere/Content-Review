
import './App.css';
import React from 'react';
import ChannelComponent from './components/ChannelComponent';
import ReviewComponent from './components/ReviewComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      <ReviewComponent />
      <ChannelComponent />
      <UserComponent />
    </div>
  );
}



export default App;
