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
  margin-right: 20%;
  display: flex;
  justify-content: space-between;
  color: Blue;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  padding: 7px;
`;

function SendComponent()
 {
  const [close,setClose] = useState(false)
  return (
    <Container>
    <Head>
      All vaults
      <Button onClick={()=> {setClose(!close)}}>
        <AiOutlinePlus /> New item
      </Button>
      </Head>
      {close ?<File sendData={setClose}/> : " "}

      </Container>
  )
}

export default SendComponent