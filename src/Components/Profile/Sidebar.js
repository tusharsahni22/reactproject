import React from 'react'
import styled from 'styled-components'

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
const ToolsSideBar = styled.div`
    
    outline: lightgray solid;
    border: none;
    /* margin: 20px 0px 40px 10px; */
    border-radius: 5px;
    
`;

const SpecialTools = styled.div`
cursor: pointer;
  height: 20px;
  /* width: 216px; */
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
  &:hover {
    background-color:rgb(247, 247, 247);
  }
`;
const Wrapper = styled.div`
/* padding : 0 0 0 15%;  */
margin: 5px;
width: 216px;
`;

function Sidebar() {
  return (
    <Wrapper>
    <ToolsSideBar>
    <Heading> Account Setting </Heading>
    <SpecialTools>My Account</SpecialTools>
    <SpecialTools>Privacy</SpecialTools>
  </ToolsSideBar>
    </Wrapper>
  )
}

export default Sidebar