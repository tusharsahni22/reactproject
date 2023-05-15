import React from 'react'
import styled from 'styled-components'
import {AiOutlinePlus} from 'react-icons/ai'
import { useState } from 'react';
import File from './File';

const Container = styled.div`
  width: 100%;
`;
const Head = styled.div`
  display: flex;
  margin-right: 20%;
  font-size: 25px;
  margin: 20px 0 10px 20px;
  justify-content: space-between;
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

      </Container>
  )
}

export default SendComponent