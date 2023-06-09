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
const Line = styled.div`
height: 1.5px;
background-color: lightgrey;
margin: 2% 0 0 2%;
@media (max-width: 767px){
  display: none;
}
`;

const Mobile  = styled.div`
 @media (max-width: 767px){
  font-size: 20px;
  padding: 10px;
  letter-spacing: 1px;
  color: white;
 }
  
`;
const Div = styled.div`
display: flex;
justify-content: space-between;
background-color: rgb(34 34 34);
@media (min-width: 768px){
  display: none;
}
`;
const Heads = styled.div`
display: flex;
justify-content: space-between;
background-color: rgb(34 34 34);
@media (min-width: 768px){
  display: none;
}

`;
const Div2 = styled.div`
@media (max-width: 767px){
display: flex;
justify-content: center;
color: white;
align-items: center;
font-size: 15px;
margin: 200px 0 0 0;
}
@media (min-width: 768px){
  display: none;
}
`;
const Button2 = styled.button`
@media (max-width: 767px){
  width: 100%;
  background-color: gray;
  color: white;
  border: none;
  font-size: 13px;
  border-radius: 5px;
  padding: 12px;
  margin: 20px 0px 0px 0px;
}
  @media (min-width: 768px){
  display: none;
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
      <Line/>
      
      <Mobile>
        <Heads>
        <AiOutlineInfoCircle/>
        <div>Send</div>
        <Div>
          <BsSearch/>      
          <AiOutlinePlus onClick={()=> {setClose(!close)}}/> 
        </Div>
        </Heads>
   
      {/* {close ?<File sendData={setClose}/> : " "} */}

      <Div2> There are no sends in your account.</Div2>
      <Button2 onClick={()=> {setClose(!close)}}> Add a Send </Button2>
      </Mobile>
      {close ?<File sendData={setClose}/> : " "}
      </Container>
  )
}

export default SendComponent