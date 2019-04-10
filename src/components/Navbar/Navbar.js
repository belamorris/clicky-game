import React from "react";
import "./Navbar.css";

const Navbar = props => (
	<nav className="navbar fixed-top navbar-dark navbar-custom p-3">
		<span className="navbar-text text-white bold animated bounceIn">{props.message}</span>
	</nav>
);

export default Navbar;