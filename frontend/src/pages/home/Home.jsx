import React from 'react'
import styled from "styled-components";
import admin from "../../assets/admin.png";
import employee from "../../assets/employee.png";
import loginimg from "../../assets/login.png"
import { Link, Navigate, useNavigate } from "react-router-dom";
import {useState} from "react";
import Modal from "../../components/modal/Modal";
import { useSelector, useDispatch} from "react-redux"
import { login } from '../../redux/apiCalls';

const Container = styled.div`
        height: 100vh;
        width: 100%;
        text-align: center;
        background-color: white;
        display:flex;
        flex-direction:row;
        flex: 1;
        justify-content: center;
        align-items: center;
`
const Wrapper = styled.div`
        min-height: 60vh;
        min-width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;       
        margin-right: 30px;
        background-color: #ffffff;
        border-radius: 5%;
        -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const LayerWrapper = styled.div`
        min-height: 60vh;
        min-width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;       
        margin-right: 30px;
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
  text-align:center;
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

const Img = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
`

const ImgL = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

const Button = styled.button`
display:flex;
flex:1;
width:40%;
border:none;
padding:15px 20px;
background-color: teal;
color:white;
cursor: pointer;
margin-top:3px;
margin-left: 30%;
align-items: center;
justify-content: center;
`
const ButtonPop = styled.button`
display:flex;
flex:1;
width:40%;
border:none;
padding:15px 20px;
background-color: teal;
color:white;
cursor: pointer;
margin-top:3px;
margin-left: 5%;
align-items: center;
justify-content: center;
`

const ButtonStyle = styled.div`
 display:flex;
 flex-direction: row;
 align-items center;
 justify-content: center;
 ` 

 const Error = styled.span`
 color : red;
 `

const Label = styled.p`
  margin-bottom: 3px;
  color: grey;
  font-weight: 200;
`

const Home = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [open,setOpen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector(state=>state.employee.currentEmployee)

  const {isFetching, error } = useSelector((state) => state.employee);
  const handleClick = (e) => {
    e.preventDefault();

    setOpen(true)
  }
  const handleLogin =  async (e) =>{
    e.preventDefault();
    try{ 
    login(dispatch, {username, password})
  }catch(e){
    console.log(e);
  }
  }
  
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false)
  }
  return (
   
    <Container>
   
    { !open
      ?  <>
    <Wrapper>
     <Form>
       <Label>EMPLOYEE</Label>
     <Img src={employee} />
     
       <Button onClick={handleClick}>Enter</Button>
     
     </Form>
     </Wrapper>

     <Wrapper>
     <Form>
       <Label>ADMIN</Label>
     <Img src ={admin} />
     
      <Button onClick={handleClick}>Enter</Button>
     
     </Form>
     </Wrapper>
    </> 
      :
     <Modal open={open} close={()=>setOpen(false)}>
     
     
    <LayerWrapper>
    <ImgL src={loginimg} />
    <Form>
    <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
    <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    <ButtonStyle>
    <ButtonPop onClick ={handleLogin}>Submit</ButtonPop>
    <ButtonPop onClose={handleClose}>Close</ButtonPop>
    </ButtonStyle>
   
     {/*error && <Error>Opps, something isnt quite right...</Error>*/}    
      </Form>
    </LayerWrapper>
   
      </Modal> 
    
 
    }
     </Container>
   )
}

export default Home