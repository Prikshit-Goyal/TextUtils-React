import React from "react"
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";


// let a = "React";

function Navbar(props){
    return(
        <>
            <nav className="nav1">
            <b id="tag11">React Website</b>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li> */}
            <li><a href="/">Home</a></li>
            <div className="form-check form-switch">
            <input className="form-check-input mx-3 mode1" onClick={props.Mode} type="checkbox"  id="flexSwitchCheckDefault"/> {/*role="switch" */}
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Light Mode</label>
            </div>
            <input className="search1" placeholder="Search Here"></input>
            </nav>
            <div className="div1">
            <h1>{props.heading}</h1>
            </div>
        </>
    )
}

export default Navbar;

Navbar.prototype = {           // props types 
    heading: PropTypes.string
}

Navbar.defaultProps = {           // it will use this value if we do nat pass the value 
    heading: "HELLO"
}
