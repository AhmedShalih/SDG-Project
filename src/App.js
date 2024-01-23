import React from "react"
import ReactDOM from 'react-dom/client';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter,Router, } from 'react-router-dom';
import MainComp from './Components/MainComp';
import Comp1 from "./Components/Comp1";
function App() {
  return (
   <>
   
   <MainComp/>
   </>
  );
}

export default App;
