import React from 'react'
import styled from 'styled-components'
import {AiOutlinePlus} from 'react-icons/ai'
import { useState } from 'react';
import File from './File';
import {BsSearch} from "react-icons/bs";
import {AiOutlineInfoCircle} from "react-icons/ai";

const Container = styled.div`
  width: 100%;
`;
const Head = styled.div`
  display: flex;
  margin-right: 20%;
  font-size: 25px;
  margin: 20px 0 10px 20px;
  justify-content: space-between;
  letter-spacing: 1px;
  @media (max-width: 767px){
    display: none;
  }
`;
const Button = styled.button`
 
  display: flex;
  justify-content: space-between;
  color: #175ddc;
  border: none;
  font-size: 13px;
  border-radius: 5px;
  padding: 7px;
  &:hover { background-color:#175ddc; color:white}
  outline: solid 0.5px #ced4da;
  @media(max-width: 1024px){
    &:hover { background-color:#175ddc; color:white}
  }
  
`;

const Mobile  = styled.div`
 @media (max-width: 767px){
  /* display: flex; */
  /* margin-right: 20%; */
  font-size: 20px;
  padding: 10px;
  /* margin: 20px 0 10px 20px; */
  /* justify-content: space-between; */
  letter-spacing: 1px;
  background-color: black;
  color: white;
 }
`;
const Div = styled.div`
display: flex;
justify-content: space-between;
background-color: rgb(34 34 34);
`;
const Heads = styled.div`
display: flex;
justify-content: space-between;
background-color: rgb(34 34 34);
`;
const Div2 = styled.div`
color: white;
align-items: center;
font-size: 15px;
margin: 200px 200px 0 200px;
`;
const Button2 = styled.button`
@media (max-width: 767px){
  color: white;
  border: none;
  font-size: 13px;
  border-radius: 5px;
  padding: 15px;
  background-color: rgb(34 34 34);
  margin: 20px 0px 0px 235px;
  width: max-content;
  background-color: rgb(48 48 48);
}
`;

function SendComponent()
 {
  const [close,setClose] = useState(false)
  return (
    <Container>
    <Head>
      Send
      <Button onClick={()=> {setClose(!close)}}>
        <AiOutlinePlus /> New item
      </Button>
      </Head>
      {close ?<File sendData={setClose}/> : " "}

      <Mobile>
        <Heads>
        <AiOutlineInfoCircle/>
        <div>Send</div>
        <Div>
          <BsSearch/>      
          <AiOutlinePlus onClick={()=> {setClose(!close)}}/> 
        </Div>
        </Heads>
      </Mobile>
      {/* {close ?<File sendData={setClose}/> : " "} */}

      <Div2> There are no sends in your account.</Div2>
      <Button2 onClick={()=> {setClose(!close)}}> Add a Send </Button2>

      </Container>
  )
}

export default SendComponent