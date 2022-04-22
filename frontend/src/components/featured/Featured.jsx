import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material';
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import "../featured/featured.scss"



const Featured = ({leave}) => {


      const today = new Date();
      const dayOne = new Date(today.getFullYear(), 0,0)
      const fullYear = 365;
      const oneDay = 1000*60*60*24;
      const daysUsed = today - dayOne;
      const daysLeft = Math.floor(daysUsed / oneDay);
      
      const percent = Math.round((daysLeft / fullYear)*100);
      
    const leaveTotal = [...leave]
        

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title"></h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={percent} text={daysLeft + "Days"} strokeWidth={5} />
        </div>
        <p className="title">Total Leave Requests</p>
        <p className="amount">{leaveTotal.length }</p>
      </div>
    </div>
    )
}

export default Featured