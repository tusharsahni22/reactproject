import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Common/Header";
import Password from "./Password";
import UserName from "./UserName";

const Wrapper = styled.div`
  display: flex;
  padding: 0 15%;
`;

const Heading = styled.div`
  display: flex;
  padding: 0 5px;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
  outline: none;
  cursor: inherit;
  width: 216px;
  height: 39px;
  opacity: 1;
  background-color: rgb(247, 247, 247);
  border-radius: 6px;
  border: 0px;
`;
const ToolsSideBar = styled.div``;

const SpecialTools = styled.div`
  height: 20px;
  width: 216px;
  border: 0px;
  background: transparent;
  padding: 10px 8px;
  outline: none;
  appearance: none;
  opacity: 1;
  color: rgb(51, 51, 51);
  font-family: "Nanum Gothic";
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0px;
  text-align: left;
`;
const HeadingGen = styled.div`
  height: 29px;
  margin: 0px;
  overflow: hidden;
  font-size: 23px;
  text-transform: none;
  text-align: left;
  letter-spacing: 0px;
  line-height: 29px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  color: rgb(51, 51, 51);
  font-family: "Nanum Gothic";
`;
const GenratedText = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  overflow: hidden;
  opacity: 1;
  outline: none;
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  border: 1px solid rgb(237, 238, 237);
`;
const Genrator = styled.div`
  width: 100%;
`;
const Title = styled.div`
  margin: 10px 0;
  overflow: hidden;
  font-size: 1rem;
  font-weight: bold;
  text-transform: none;
  text-align: left;
  letter-spacing: 0px;
  line-height: 22px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  color: rgb(51, 51, 51);
  font-family: "Nanum Gothic";
`;
const RadioButton = styled.input``;
const RadioButtonLabel = styled.label`
  margin: 0 15px 0 0;
  font-size: 13px;
  text-transform: none;
  text-align: left;
  letter-spacing: 0px;
  line-height: 19px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  color: rgb(51, 51, 51);
  font-family: "Nanum Gothic";
`;

const RadioButtonDiv = styled.div`
  display: flex;
`;



function Tools() {
    const [userPass,setUserPass] = useState("")
  return (
    <>
      <Header />
      <Wrapper>
        <ToolsSideBar>
          <Heading> Tools </Heading>
          <SpecialTools>Genrator</SpecialTools>
          <SpecialTools>Export Data</SpecialTools>
          <SpecialTools>Import Data</SpecialTools>
        </ToolsSideBar>
        <Genrator>
          <HeadingGen>Genrator</HeadingGen>
          <GenratedText></GenratedText>
          <Title>What would you like to</Title>
          <div>{userPass}</div>
          <RadioButtonDiv>
            <div>
              <RadioButton type="checkbox" value="0" name="userpass" onChange={e=>setUserPass(!userPass)} />
              <RadioButtonLabel>Password</RadioButtonLabel>
            </div>
            <div>
              <RadioButton type="checkbox" value="1" name="userpass" onChange={(e)=>{setUserPass(e.target.value)}} />
              <RadioButtonLabel>Username</RadioButtonLabel>
            </div>
          </RadioButtonDiv>
          {userPass ? <Password/>  :  <UserName/>} 
          
        </Genrator>
      </Wrapper>
    </>
  );
}

export default Tools;
