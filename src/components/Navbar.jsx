import { NavLink } from "react-router-dom";
import React from "react";
const Navbar=()=>{
    return(
        <div className="border-2 py-2">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    );
};
export default Navbar;