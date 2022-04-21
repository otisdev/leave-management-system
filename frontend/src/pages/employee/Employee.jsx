import React from 'react'
import {useState} from "react";
import { publicRequest } from '../../request';
import { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import "../employee/employee.scss"
import Widget from '../../components/widget/Widget';
import Leave from '../../components/leave/Leave';
import Chart from '../../components/chart/Chart';
import { useSelector, useDispatch} from "react-redux"



const Employee = () => {

const user = useSelector(state=>state.employee.currentEmployee)
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
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget  type={"paid"}  />
          <Widget  type={"unpaid"}  />
        </div>
        <Leave leave={leave}/>
        <Chart leave={leave}/>
      </div>   
    </div>
    
  )
}

export default Employee