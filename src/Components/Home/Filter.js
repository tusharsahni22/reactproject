import React from 'react'
import styled from 'styled-components'
import { CiCircleQuestion } from "react-icons/ci";
import Accordion2 from "./Accordion2";

const Container = styled.div`
`;

const Box = styled.div`
  align-items: start;
  outline: 0.5px solid;
  height: auto;
  width: fit-content;
  border: none;
  outline-color: lightgray;
  margin: 20px 0 40px 10px;
  border-radius: 5px;
`;

const BoxHead = styled.div`
  outline: 1px solid lightgray;
  height: 40px;
  padding-top: 1px;
  background-color: rgb(249 249 249);
  
`;
const Heading = styled.div`
  margin: 10px 10px 10px 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  font-weight: bold;
`;


const SearchVault = styled.input`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 4px;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  letter-spacing: 0.5px;
  height: 25px;
  background-color: rgb(249 249 249);
  &:active { border-color: red}
`;

const CiCircleQuestions = styled.div`
  padding: 16px;
  
`;

function Filter() {
  return (
    <Container>
    <Box>
        <BoxHead>
          <Heading> FILTERS </Heading>
          <CiCircleQuestions>
            <CiCircleQuestion />
          </CiCircleQuestions>  
        </BoxHead>
          <SearchVault type="text" placeholder="Search vaults" />     
      
        <Accordion2/>

       {/* 2nd approch */}

      </Box>
      </Container>
  )
}

export default Filter