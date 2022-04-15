import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Requests from '../../components/requests/Requests'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
//import Sidebar from '../../components/sidebar/Sidebar'
import { publicRequest } from '../../request';
import { useEffect, useState } from 'react';

import "./admin.scss"
import Sidebar from '../../components/sidebar/Sidebar'
const Admin = () => {

  
const [leave, setLeave] = useState([])

useEffect(() => {

  const getLeave = async () => {
    try{
      const rows = await publicRequest.get("/request")
      setLeave(rows.data)
    }catch(e){
      console.log(e);
    }
  }
  getLeave();

},[] )

  return (
    <div>
      <div className="home">
      
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
    
      <div className="charts">
        <Featured leave = {leave} />
        <Chart leave = {leave} />
      </div> 
        <div className="listContainer"> 
          <Requests leave ={leave} />
        </div>
        </div>
    </div>
    </div>
  )
}

export default Admin