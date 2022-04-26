import React from "react";
import { Link } from 'react-router-dom';


function Nav({logo}) {
    

  return (
    <div id='header'>
        <img  style={{height: "8rem"}}src={logo} alt='logo'/>
        <div id='right-header'>
            <Link to="/">
              <p>Play</p>
            </Link>
            <Link to="/scoreBoard">
              <p>Players Scores</p>
            </Link>
        </div>
    </div>
  );
}

export default Nav;