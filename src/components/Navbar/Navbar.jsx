import { useState } from "react";
import "./navbar.scss";
import logo from '../img/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <span className="nav-logo">Panaewa Zoo</span>
        <img src={logo} alt="" className="logo" />
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Animals</a>
        <a href="/service">Your Visit</a>
        <a href="/service">Support us</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;

