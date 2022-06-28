import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Ilona' },
  { id: 3, name: 'Amelia' },
  { id: 4, name: 'Larisa' },
  { id: 5, name: 'Sergey' },
  { id: 6, name: 'Lida' },
]
let messages = [
  { list: 'Hi' },
  { list: 'How are you?' },
  { list: 'I want to become a doctor' },
  { list: 'Yo' },
  { list: 'Yo2' },
  { list: 'Yo3' },
  { list: 'Yo6' },
  { list: 'Yo55' },

]
let postData = [
  {message:'How are you?',likesCount:130},
  {message:'Iam Okey',likesCount:520}
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs = {dialogs} messages = {messages} postData = {postData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
