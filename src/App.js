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
        <NavBar state={props.state.navbarPage}/>
        <div className = "wrapper-content">
            <Routes>
              <Route path = "/profile" element={<Profile state = {props.state.profilePage} addPost = {props.addPost}/>}/>
              <Route path = "/dialogs/*" element={<Dialogs  state = {props.state.dialogsPage}/>}/> 
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
