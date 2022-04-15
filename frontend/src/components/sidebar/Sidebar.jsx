import React from 'react';
import "./sidebar.scss";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Lion Software Development</span>
        </div>
        <div className='center'>
            <ul>
            <div className="ulWrapper">
                  <p className="title">LISTS</p>
                <li>
                  <PersonOutlineIcon className="icon"/>
                  <span>Employees</span>
                  </li>
                  </div>

                
                <div className="ulWrapper">
                  <p className="title">Statistics</p>
                <li>
                  <InsertChartIcon className="icon"/>
                  <span>Stats</span>
                  </li>
                <li>
                  <NotificationsNoneIcon className="icon"/>
                  <span>New Requests</span>
                  </li>
                  </div>
                  

                 <div className="ulWrapper">
                    <p className="title">SERVICE</p>
                <li>
                  <PsychologyOutlinedIcon className="icon"/>
                  <span>Logs</span>
                  </li>
                <li>
                  <SettingsApplicationsIcon className="icon"/>
                  <span>Settings</span>
                  </li>
                  <li>
                  <AccountCircleOutlinedIcon className="icon"/>
                  <span>Profile</span>
                  </li>
                  </div>
                  <div className="ulWrapper">
                    <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                  </li>
                  </div>   
            </ul>
            
        </div>
        
    </div>
  )
}

export default Sidebar