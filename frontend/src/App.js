import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ChannelPage from './views/ChannelPage/ChannelPage';
import UserPage from './views/UserPage/UserPage';
import SearchPage from './views/SearchPage/SearchPage';
import LandingPage from './views/Landing Page/LandingPage';




const App = () => {
  return (
      <div>
          <BrowserRouter>
              <div>
                  <Header />
                  <Routes>
                  <Route path="/" exact component={LandingPage} />
                        <Route path="/ChannelPage" exact component={ChannelPage} />
                        <Route path="/UserPage" exact component={UserPage} />
                        <Route path="/SearchPage" exact component={SearchPage} />
                        </Routes>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;


