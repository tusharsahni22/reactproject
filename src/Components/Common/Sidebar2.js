import React from 'react'
import styled from 'styled-components';
import {AiOutlineFileText} from 'react-icons/ai';
import {AiOutlineFile} from 'react-icons/ai';
// import {HiOutlineSquares2X2} from 'react-icons/hi';

const ToolsSideBar = styled.div`
padding : 0 0 0 15%; 
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

const BoxHead = styled.div`
  display: flex;
  height: 40px;
  margin: 4px 0 0 0;
  border: solid #bddaec .25px;
  border-width: 4px;
  border-radius: 5px;
  margin: 15px 20px 15px 20px;
`;

const AllSends = styled.div`
color: rgb(23, 93, 220);
font-weight: bold;
`;
const AllSends2 = styled.div``;

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
const Type = styled.div`

`;

function Sidebar2() {
  return (
    <ToolsSideBar>
    <Heading> Filters </Heading>
    <BoxHead>
          <SearchVault type="input" placeholder="Search Sends" />
          
        </BoxHead>
    <AllSends>All Sends </AllSends>
    <Type>Types</Type>
    <AllSends2> <AiOutlineFileText style={{marginRight:2,paddingTop:2 }}/>Text </AllSends2>
    <AllSends2> <AiOutlineFile style={{marginRight:2, paddingTop:2}}/>File </AllSends2>
    
  </ToolsSideBar>
  )
}

export default Sidebar2