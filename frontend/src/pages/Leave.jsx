import React from 'react'
import styled from "styled-components";
import {useState} from "react";
import { publicRequest } from '../request';

const Container = styled.div`
        height: 100vh;
        width: auto;
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
        -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const Form = styled.form`
      display: flex;
      flex-direction: column;
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
const Error = styled.span`
color : red;
`

const Leave = () => {


  const [name,setName] = useState("");
  const [lastname,setLastname] = useState("");
  const [type,setType] = useState("paid");
  const [days, setDays] = useState(0);
  const [error,setError] = useState(false);
  const [reason, setReason] = useState("");
  const [start, setStart] = useState("")
 // const [end, setEnd] = useState("")



  
  
  const  handleClick = async(e) => {

        
    

      e.preventDefault();
      try{
          const res = await publicRequest.post("/request",{
            employee_name: name, 
            employee_lastname:lastname,
            leave_type: type,
            leave_days: days,
           
            reason: reason },
           )
      }catch(e){
        console.log(e);
        setError(true);
      }
    }



  return (
    <Container>
     <Wrapper>
     <Form>
     <Input placeholder="Employee Name" onChange={(e) => setName(e.target.value)} />
     <Input placeholder="Employee Lastname" onChange={(e) => setLastname(e.target.value)} />
     <Input placeholder="Leave Days" type="number" min="1" max="5" onChange={(e) => setDays(e.target.value)} />
     <Input type="datetime-local" id="start date" placeholder="start time" onChange={(e) => setStart(e.target.value)} />     
     <Options placeholder="Type of leave" onChange={(e) => setType(e.target.value)}>
       <Option value="Paid" >Paid</Option>
       <Option value="Unpaid" >Unpaid</Option>
     </Options>
     <InputA placeholder="reason for leave" onChange={(e) => setReason(e.target.value)}/>
     <Button onClick={handleClick} >Submit</Button>
      {error && <Error>Opps, something isnt quite right...</Error>}    
       </Form>
     </Wrapper>
    </Container>
  )
}

export default Leave