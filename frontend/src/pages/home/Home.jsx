import React from 'react'
import styled from "styled-components";
import admin from "../../assets/admin.png";
import employee from "../../assets/employee.png";
import { Link } from 'react-router-dom';
const Container = styled.div`
        height: 100vh;
        width: auto;
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
        margin-right: 30px
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
const Img = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
`

const Button = styled.button`
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
const Label = styled.p`
  margin-bottom: 3px;
  color: grey;
  font-weight: 200;
`
const Home = () => {
  return (
    <div>
    <Container>
     <Wrapper>
     <Form>
       <Label>EMPLOYEE</Label>
     <Img src={employee} />
     <Link to='/employee'>
       <Button>Enter</Button>
     </Link>
     </Form>
     </Wrapper>

     <Wrapper>
     <Form>
       <Label>ADMIN</Label>
     <Img src ={admin} />
     <Link to='/dashboard'>
      <Button>Enter</Button>
     </Link>
     </Form>
     </Wrapper>
    </Container>
   </div>
  )
}

export default Home