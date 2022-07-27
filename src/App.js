import React from 'react'
import Header  from './components/header/header';
import NavBar  from './components/navbar/navbar';
import DialogsContainer from './components/dialogs/dialogsContainer';
import Profile  from './components/profile/profile';
import Settings from './components/settings/settings';
import Music from './components/music/music';
import News from './components/news/news';
import UsersContainer from './components/users/usersContainer'
import {Route,BrowserRouter, Routes} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className = "wrapper">
        <Header />
        <NavBar /> 
        <div className = "wrapper-content">
            <Routes>
              <Route path = "/profile" element={<Profile />}/>
              <Route path = "/dialogs/*" element={<DialogsContainer/>}/> 
              <Route path = "/news" element={<News />}/> 
              <Route path = "/music" element={<Music />}/>
              <Route path = "/users" element={<UsersContainer />}/>
              <Route path = "/settings" element={<Settings />}/> 
            </Routes>
        </div>    
      </div>
    </BrowserRouter>
  );
}

export default App;
