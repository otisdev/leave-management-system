import React from 'react'
import "./navbar.scss"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Navbar = () => {
  return (
    <div className="navbar">
       <div className="wrapper">

    <div className="login">
        <form>
            <input  placeholder="username"  />
            <input placeholder="password" />
            <CheckCircleOutlineIcon />
        </form>
    </div>
        </div> 
    </div>
  )
}

export default Navbar