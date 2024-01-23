import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import './MainComp.css'; // Import the CSS file

export default function MainComp() {
  return (
    <>
      <BrowserRouter>

        <div className="navbar">
          <div className="logo">
            <img src='https://www.edf-feph.org/content/uploads/2019/09/SDG-logo.png' height={"80px"} alt="SDG Logo" />
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/Comp3">Who We Are</Link>
            <Link to="/Comp4">Our Value</Link>
            <Link to="/Comp2">Market</Link>
          </div>
        </div>

        <Routes>
          <Route path="/Comp3" element={<Comp3 />} />
          <Route path='/Comp4' element={<Comp4 />} />
          <Route path='/Comp2' element={<Comp2 />} />
          <Route path='/' element={<Comp1 />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}
