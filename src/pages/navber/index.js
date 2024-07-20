import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import './index.css';
import BootcampDrawer from '../../components/drawer';

function CustomNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div style={{backgroundColor: "#ffa500", padding: "40px"}}>
    <div style={{ backgroundColor: "#ffa500", padding: "40px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img
        src="https://www.lejhro.com/lejhro_logo_white.png"
        alt="Lejhro Logo"
        className="logo"
        style={{ color: "blue", height: "40px", width: "300px", backgroundColor: "#ffa500" }}
      />
      <div style={{ display: 'flex', gap: '20px' }}>
      <div className="d-none d-md-flex"  style={{ display: 'flex', gap: '20px' }}>
            <a href='#' style={{ color: "white", textDecoration: "none" }}>Innovations</a>
            <a href='#' style={{ color: "white", textDecoration: "none" }}>Business Services</a>
            <a href='#' style={{ color: "white", textDecoration: "none" }}>Financial Services</a>
            <a href='#' style={{ color: "white", textDecoration: "none" }}>Bootcamp</a>
          </div>
        
        <button onClick={handleOpenDrawer} className="hamburger-button">
      <i className="fas fa-bars"></i>
    </button>
      </div>
      <BootcampDrawer />
    </div>


    <BootcampDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />

    <div style={{paddingTop:"100px"}}>
       <h1 style={{color:"white"}}>Blogs</h1>
    </div>

    </div>
  );
}

export default CustomNavbar;
