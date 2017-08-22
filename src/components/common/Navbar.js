import React from 'react';
import { Route, Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <Link to="/" className="navbar">Home</Link>
    );
};

export default Navbar