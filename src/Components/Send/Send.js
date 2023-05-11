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
const Send = styled.div`
margin: 20px;
font-family: Arial, Helvetica, sans-serif;
font-size: 22px;
`;
const Line = styled.div`
height: 2px solid grey;
`;

function SendComponent()
 {
  const [newItem,setNewItem] = useState(false)
  return (
    <Container>
    <Head>
      All vaults
      <Button onClick={()=> {setNewItem(!newItem)}}>
        <AiOutlinePlus /> New item
      </Button>
      </Head>
      {newItem ?<File/> : " "}
      </Container>
  )
}

export default SendComponent