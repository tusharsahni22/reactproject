import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import {addNewItem} from "../../../services/profileServices"

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
const Error=styled.div`
width: 100%;
margin: 10px 0;
color: red;
`;
const Padding=styled.div`
padding: 0 3%;
`;
const LoginDiv=styled.div`
`;
const CardDiv=styled.div`
`;
function NewItem() {

  const [select,setSelect] = useState("login");
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const [url,setUrl] = useState("");
  const [notes,setNotes] = useState("");
  const [cvv,setCvv] = useState("");
  const [cardholder,setCardholder] = useState("");
  const [bank,setBank] = useState("");
  const [cardNumber,setCardNumber] = useState("");
  const [exYear,setExYear] = useState("");
  const [exMonth,setExMonth] = useState("");
  const [error , setError] = useState("")
  
  let navigate = useNavigate();

  const submitData = () => {
    if(select==="login"){
      if(name==="" || userName==="" || password===""){
        setError("Enter Mandatory fields")
         return 0
      }}
    else if(select==="card"){
        if(cvv===""|| cardholder==="" || cardNumber==="" || exMonth==="" || exYear==="" || bank===""){
        setError("All fields are Mandatory")
        return 0
      }}
    else{
    console.log("first else")
    let data = {
    "type":select,
    "username":userName,
    "password":password,
    "name":name,
    "url":url,
    "notes":notes,
    "cvv":cvv,
    "cardholder":cardholder,
    "bankName":bank,
    "cardnumber":cardNumber,
    "expiryMonth":exMonth,
    "expiryYear":exYear
    }
    addNewItem(data)
    setError("")
    navigate("/")
  }};

  return (
    <Wrapper>
    <TopBar>
        <div onClick={()=>{navigate("/")}}>Cancel</div>
        <div>Add item</div>
        <div onClick={()=>{submitData()}}> Save </div>
    </TopBar>
    <Padding>

    <H1>Types</H1>
    <Selecter onChange ={(e)=>(setSelect(e.target.value))}>
        <Choice value={"login"}>Login</Choice>
        <Choice value={"card"}>Card</Choice>
    </Selecter>
    </Padding>
    {(select === "login") ? <LoginDiv>
    <Padding>
    <Error>{error}</Error>
    <FieldTitle>Name *</FieldTitle>
    <Input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Domain"/>
    <FieldTitle>Username*</FieldTitle>
    <Input value={userName} onChange={(e)=>{setUserName(e.target.value)}} placeholder="CaptainAmera"/>
    <FieldTitle>Password*</FieldTitle>
    <Input value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
    <FieldTitle>Url</FieldTitle>
    <Input value={url} onChange={(e)=>{setUrl(e.target.value)}} placeholder="ex. https://facebook.com "/>
    <FieldTitle>Notes</FieldTitle>
    <Input type= "text" value={notes} onChange={(e)=>{setNotes(e.target.value)}} placeholder=''/>
    </Padding>

    </LoginDiv>:<CardDiv>
    <Padding>
    <Error>{error}</Error>
    <FieldTitle>Card Holder*</FieldTitle>
    <Input type="text" value={cardholder} onChange={(e)=>{setCardholder(e.target.value)}} placeholder="Name"/>
    <FieldTitle>Bank Name*</FieldTitle>
    <Input type="text" value={bank} onChange={(e)=>{setBank(e.target.value)}} placeholder="SBI"/>
    <FieldTitle>Card Number*</FieldTitle>
    <Input type="number" value={cardNumber} onChange={(e)=>{setCardNumber(e.target.value)}}/>
    <FieldTitle>Valid From*</FieldTitle>
    <Input type="number" value={exMonth} onChange={(e)=>{setExMonth(e.target.value)}} placeholder="07"/>
    <FieldTitle>Year*</FieldTitle>
    <Input type="number" value={exYear} onChange={(e)=>{setExYear(e.target.value)}}  placeholder="2035"/>
    <FieldTitle>Cvv*</FieldTitle>
    <Input type="password" value={cvv} onChange={(e)=>{setCvv(e.target.value)}} placeholder=""/>
    
    </Padding>
    </CardDiv>
    }
    

    </Wrapper>
  )
}

export default NewItem