import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CenteredContent from './components/CenteredContent';
import SimpleForm from './components/SimpleForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
function x(){
  return "TRY";
}
root.render(
  <React.StrictMode>
    
    <App /> 
    <h2>My React App</h2>
    <CenteredContent />
    {x} MUST TRY
    <App />
    <SimpleForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: r
// 
// eportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
