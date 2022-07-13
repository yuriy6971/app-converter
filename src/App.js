import React from 'react'
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Header from './components/Header/Header';
import NavBarContainer from './components/NavBar/Navbar';
import Content from './components/Content/Content.jsx'



const App = () => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <NavBarContainer />

        <div className="app_wrapper_content">
         <Content/>
        </div>

      </div>
      </BrowserRouter>
      );
}

      export default App;
