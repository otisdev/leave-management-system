import React from 'react'
import "./navbar.scss"
import styled from 'styled-components'
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
       <div className="wrapper">

    
       <Link to="/request">Admin</Link>
    
        </div> 
    </div>
  )
}

export default Navbar