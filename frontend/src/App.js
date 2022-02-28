import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ChannelPage from './views/ChannelPage';
import UserPage from './views/UserPage';
import SearchPage from './views/SearchPage';
import LandingPage from './views/LandingPage';




const App = () => {
  return (
      <div>
          <BrowserRouter>
              <div>
                  <Header />
                  <Routes>
                  <Route path="/" exact component={LandingPage} />
                        <Route path="/channels" exact component={ChannelPage} />
                        <Route path="/users" exact component={UserPage} />
                        <Route path="/search" exact component={SearchPage} />
                        </Routes>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;


