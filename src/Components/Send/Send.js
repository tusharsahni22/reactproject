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
  @media (max-width: 768px){
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
 @media (max-width: 768px){
  display: flex;
  /* margin-right: 20%; */
  font-size: 20px;
  padding: 10px;
  margin: 20px 0 10px 20px;
  justify-content: space-between;
  letter-spacing: 1px;
  background-color: black;
  color: white;
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
        <AiOutlineInfoCircle/>
      Send
      <BsSearch/>      
        <AiOutlinePlus onClick={()=> {setClose(!close)}}/> 
       
      </Mobile>
      {/* {close ?<File sendData={setClose}/> : " "} */}

      </Container>
  )
}

export default SendComponent