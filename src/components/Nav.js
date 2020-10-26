import React from 'react';
import { NavLink } from 'react-router-dom'; // type version is there too
import './styles/Nav.scss';

function Nav() {

    

	return (
		<nav className="Nav">
      		<h1>Order of Time</h1>
            <span className="nav-links">
				<NavLink to="/zelda-timeline/home">Home</NavLink>
				<NavLink to="/zelda-timeline/about">About</NavLink>
            </span>
   		</nav>
  	);
}

export default Nav;
