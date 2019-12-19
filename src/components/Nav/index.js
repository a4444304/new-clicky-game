import React from 'react';
import './nav.css';

function Nav(props) {
    return (
        <nav className="navbar navbar-light bg-light">
        <h2 className="nav-item" href="#">Vegetable Clicky Game</h2>
        <h3 className="nav-item">Top Score: {props.topscore} Current Score: {props.currentscore}</h3>
        </nav>
    );
}
  
export default Nav;