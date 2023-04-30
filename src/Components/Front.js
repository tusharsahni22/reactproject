import React, { useState } from "react";
import styled from "styled-components";
import { CiCircleQuestion } from "react-icons/ci";
import { SiVault } from "react-icons/si";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Login from "./login";
import Accordian from "./Accordian"

const Container = styled.div`
  display: flex;
  background-color: #5239d1;
  height: 70px;
`;

const Logo = styled.div`
  margin: 10px 10px 10px 10px;
  align-items: start;
  padding: 20px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin: 20px 20px 20px 30px;
`;
const Item = styled.div`
  color: white;
  margin: 15px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
`;

const Box = styled.div`
  align-items: start;
  outline: solid;
  height: 70vh;
  width: 22%;
  border: none;
  outline-color: lightgray;
  margin: 20px 0 40px 10px;
`;

const BoxHead = styled.div`
  outline: solid lightgray;
  height: 40px;
  padding-top: 1px;
`;

const BoxHead2 = styled.div`
  display: flex;
  height: 20px;
  padding-top: 1px;
`;

const Heading = styled.div`
  margin: 10px 10px 10px 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  font-weight: bold;
`;

const SearchVault = styled.input`
  margin: 10px -38px 0px 10px;
  width: 92%;
  height: 25px;
`;

const CiCircleQuestions = styled.div`
  padding: 16px;
`;

const  DropdownText = styled.div``;
const DropdownItem = styled.div``;


function Front() {
    let [Dropdownn,setDropdownn]= useState("false");
  return (
    <div>
      <Container>
        <Logo>
          <SiVault />
        </Logo>

        <Nav>
          <Item>Vaults</Item>
          <Item> Send </Item>
          <Item> Tools </Item>
          <Item> Reports </Item>
        </Nav>
      </Container>

      <Box>
        <BoxHead>
          <Heading> FILTERS </Heading>
        </BoxHead>
        <BoxHead2>
          <SearchVault type="input" placeholder="Search vault" />
          <CiCircleQuestions>
            {" "}
            <CiCircleQuestion />{" "}
          </CiCircleQuestions>
        </BoxHead2>

        {/* <span> > </span>
        <button onClick={()=>{
           setDropdownn(!Dropdownn)
        }}> All Vault </button>
        {console.log("sj",Dropdownn)}
        {Dropdownn? 
        <div>
        
        <DropdownItem as="button">My Vault</DropdownItem>
        <DropdownItem as="button">New Organisation</DropdownItem>
     
        </div> : " "} */}
        <Accordian/>
      </Box>
    </div>
  );
}

export default Front;
