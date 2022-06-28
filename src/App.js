import React from 'react'
import Header  from './components/header/header';
import NavBar  from './components/navbar/navbar';
import Dialogs from './components/dialogs/dialogs';
import Profile  from './components/profile/profile';
import Settings from './components/settings/settings';
import Music from './components/music/music';
import News from './components/news/news';
import {Route,BrowserRouter, Routes} from 'react-router-dom';
import './App.css';



function App(props) {
  return (
    <BrowserRouter>
      <div className = "wrapper">
        <Header />
        <NavBar/>
        <div className = "wrapper-content">
            <Routes>
              <Route path = "/profile" element={<Profile postData = {props.postData}/>}/>
              <Route path = "/dialogs/*" element={<Dialogs  dialogs = {props.dialogs} messages = {props.messages}/>}/> 
              <Route path = "/news" element={<News />}/> 
              <Route path = "/music" element={<Music />}/> 
              <Route path = "/settings" element={<Settings />}/> 
            </Routes>
        </div>    
      </div>
    </BrowserRouter>
  );
}

export default App;
