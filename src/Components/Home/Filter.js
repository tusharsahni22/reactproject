import React from 'react'
import styled from 'styled-components'
import { CiCircleQuestion } from "react-icons/ci";
import Accordian from "./Accordian";
import Accordion2 from "./Accordion2";
import Accordion3 from "./Accordion3";

const Container = styled.div`
padding: 0 0 0 15%;
`;

const Box = styled.div`
  align-items: start;
  outline: solid;
  height: auto;
  width: fit-content;
  border: none;
  outline-color: lightgray;
  margin: 20px 0 40px 10px;
  border-radius: 5px;
`;

const BoxHead = styled.div`
  outline: solid lightgray;
  height: 40px;
  padding-top: 1px;
  display: flex;
  justify-content: space-between;
  
`;

const BoxHead2 = styled.div`
  display: flex;
  height: 40px;
  margin: 4px 0 0 0;
  border: solid #bddaec .25px;
  border-width: 4px;
  border-radius: 5px;
  margin: 15px 20px 15px 20px;
`;

const Heading = styled.div`
  margin: 10px 10px 10px 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  font-weight: bold;
`;

const SearchVault = styled.input`
  border: none;
  outline: none;
  margin: 5px 0px 0px 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px ;
  width: 92%;
  height: 25px;
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
        <BoxHead2>
          <SearchVault type="input" placeholder="Search favorites" />
          
        </BoxHead2>
        <Accordian />
        <Accordion2/>
        <Accordion3/>
       {/* 2nd approch */}

      </Box>
      </Container>
  )
}

export default Filter