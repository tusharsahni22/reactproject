import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const TopBar=styled.div`
display: flex;
justify-content: space-between;
padding: 12px;
margin: 10px 0;
`;
const Wrapper=styled.div`
width: 100%;

`;

const H1 = styled.div`
  color: skyblue;
  font-size: 15px;
  margin: 10px 5px 15px 5px;
`;
const Selecter = styled.select`
width: 100%;
height: 40px;

border: 1px solid;
border-radius:0px;
`;
const Choice =styled.option`
`;

const Input=styled.input`
  background: transparent;
  margin: 0px;
  outline: none;
  appearance: none;
  opacity: 1;
  color:white;
  font-family: "Work Sans";
  font-size: 15px;
  width: -webkit-fill-available;
  height: 40px;
  border: 1px solid;
  padding: 0 0 0 2%  ;
`;
const FieldTitle=styled.div`
width: 100%;
margin: 10px 0;
`;
const Padding=styled.div`
padding: 0 3%;
`;
function NewItem() {
    let navigate = useNavigate();
  return (
    <Wrapper>
    <TopBar>
        <div onClick={()=>{navigate("/")}}>Cancel</div>
        <div>Add item</div>
        <div onClick={()=>{navigate("/")}}> Save </div>
    </TopBar>
    <Padding>

    <H1>Types</H1>
    <Selecter>
        <Choice>Login</Choice>
        <Choice>Card</Choice>
    </Selecter>
    <FieldTitle>Name</FieldTitle>
    <Input placeholder="Domain"/>
    <FieldTitle>Username</FieldTitle>
    <Input placeholder="CaptainAmera"/>
    <FieldTitle>Password</FieldTitle>
    <Input type="password"/>
    <FieldTitle>Url</FieldTitle>
    <Input placeholder="ex. https://facebook.com "/>
    <FieldTitle>Notes</FieldTitle>
    <Input/>
    </Padding>
    

    </Wrapper>
  )
}

export default NewItem