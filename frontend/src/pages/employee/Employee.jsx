import React from 'react'
import styled from "styled-components";
import {useState} from "react";
import { publicRequest } from '../../request';
import Navbar from '../../components/navbar/Navbar';
import { useEffect } from 'react';

const Container = styled.div`
        height: 100vh;
        width: auto;
        display:flex;
        flex:2;
        text-align: center;
        background-color: white;
        display:flex;
        justify-content: center;
        align-items: center;
`
const Wrapper = styled.div`
        min-height: 30vh;
        min-width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;       
        background-color: #ffffff;
        border-radius: 5%;
        margin-right: 30px;
        -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const Form = styled.form`
      display: flex;
      flex-direction: column;
      margin: 10px 0px 0px 10px;
      padding: 10px; 
`
const Reg = styled.div`
      display: flex;
      flex-direction: column;
      align-items: left;
      margin: 10px 0px 0px 10px;
      padding: 10px; 
`
const Input = styled.input`
  flex:1;
  min-width: 40%;
  flex: 1;
  margin: 10px 0px 0px;
  padding:15px;
`
const InputA = styled.textarea`
        flex:1;
        min-width: 40%;
        flex: 1;
        margin: 10px 0px;
        padding:15px; 
`
const Options = styled.select`
        flex:1;
        min-width: 40%;
        margin: 10px 0px;
        padding:15px;
`
const Option = styled.option`
      flex:1;
      `

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color: teal;
color:white;
cursor: pointer;
margin-b10tom:10px;
`
const Label = styled.p`
  margin-bottom: 3px;
  color: grey;
  font-weight: 200;
`

const Error = styled.span`
color : red;
`

const Employee = () => {


  const [name,setName] = useState("");
  const [lastname,setLastname] = useState("");
  const [type,setType] = useState("paid");
  const [days, setDays] = useState(0);
  const [error,setError] = useState(false);
  const [reason, setReason] = useState("");
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const daysLeft = 100;
  let daysTaken;
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
  
  
  
let result = [];
leave.forEach(function (a) {
    if (!this[a.employee_name && a.employee_lastname]) {
        this[a.employee_name && a.employee_lastname] = { name: a.employee_name, lastname: a.employee_lastname, totalLeave: 0 };
        result.push(this[a.employee_name && a.employee_lastname]);
    }
    this[a.employee_name && a.employee_lastname].totalLeave =+ a.leave_days;
}, Object.create(null));

  const  handleClick = async(e) => {
   
    const currentDate = new Date(start);
    const numberOfDaysToAdd = days;
    const results = currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd);
    const end  = new Date(results);
    

      

      e.preventDefault();
      try{
          const res = await publicRequest.post("/request",{
            employee_name: name, 
            employee_lastname:lastname,
            leave_type: type,
            leave_days: days,
            leave_start: start,
            leave_end: end,
            reason: reason },
           )
            
          
          daysTaken = result.find( element => element.name === name && element.lastname === lastname) 
          console.log(daysTaken.totalLeave)

            
      }catch(e){
        console.log(e);
        setError(true);
      }
    }
    
  




  return (
    <div>
       <Navbar />
       <Container>
     
     <Wrapper>
     <Form>
     <Input placeholder="Employee Name" onChange={(e) => setName(e.target.value)} />
     <Input placeholder="Employee Lastname" onChange={(e) => setLastname(e.target.value)} />
     <Input placeholder="Leave Days" type="number" min="1" max="5" onChange={(e) => setDays(parseInt(e.target.value))} />
     <Input type="datetime-local" onChange={(e) => setStart(e.target.value)} />
     
     <Options placeholder="Type of leave" onChange={(e) => setType(e.target.value)}>
       <Option value="Paid" >Paid</Option>
       <Option value="Unpaid" >Unpaid</Option>
     </Options>
     <InputA placeholder="reason for leave" onChange={(e) => setReason(e.target.value)}/>
     <Button onClick={handleClick} >Submit</Button>
      {error && <Error>Opps, something isnt quite right...</Error>}    
       </Form>
     </Wrapper>
     <Wrapper>
       <Reg>
          <Label>EMPLOYEE:{name + ' ' + lastname}</Label>
          <Label>Latest Leave: {start}</Label>
          <Label>Leave Days Taken:{daysTaken.totalLeave === undefined ? "no leave days taken yet" : daysTaken.totalLeave}</Label>
          <Label>Leave Days Left:{daysLeft}</Label>
       </Reg>
  

     </Wrapper>
    </Container>
    </div>
    
  )
}

export default Employee