import React from 'react'
import './Navfoo.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Dashboard</div>
      <ul className="navbar-nav">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        &copy; 2023 Dashboard App. All rights reserved.
      </div>
    </footer>
  )
}

export { Navbar, Footer }
