import React from "react";
import styled from "styled-components";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
// import {HiOutlineSquares2X2} from 'react-icons/hi';

const ToolsSideBar = styled.div`
  padding: 0 0 0 15%;
`;
const Box = styled.div`
  align-items: start;
  outline: 1px solid;
  height: auto;
  width: 200px;
  border: none;
  outline-color: lightgray;
  margin: 20px 0 40px 10px;
  border-radius: 5px;
`;

const SearchVault = styled.input`
  border: none;
  outline: none;
  margin: 5px 0px 0px 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  width: 92%;
  height: 25px;
`;
const BoxHead = styled.div`
  outline: 1px solid lightgray;
  height: 40px;
  padding-top: 1px;
  background-color: #f0efef;
  
`;

const BoxHead2 = styled.div`
  border: 4px solid rgb(189, 218, 236);
    border-radius: 5px;
    margin: 15px 10px 15px 10px;
`;

const AllSends = styled.div`
margin: 10px;
  color: rgb(23, 93, 220);
  font-weight: bold;
`;
const AllSends2 = styled.div`
margin-left: 10px;
`;
const AllSends3 = styled.div`
margin-left: 10px;
padding-bottom: 20px;
`;

const Heading = styled.div`
  margin: 10px 0 10px 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  font-weight: bold;
`;
const Type = styled.div`
margin-left: 10px;
`;

function Sidebar2() {
  return (
    <ToolsSideBar>
      <Box>
        <BoxHead>
          <Heading> FILTERS </Heading>
        </BoxHead>
        <BoxHead2>
          <SearchVault type="input" placeholder="Search Sends" />
        </BoxHead2>
        <AllSends>All Sends </AllSends>
        <Type>Types</Type>
        <AllSends2>
          {" "}
          <AiOutlineFileText style={{ marginRight: 2, paddingTop: 2 }} />
          Text{" "}
        </AllSends2>
        <AllSends3>
          {" "}
          <AiOutlineFile style={{ marginRight: 2, paddingTop: 2 }} />
          File{" "}
        </AllSends3>
      </Box>
    </ToolsSideBar>
  );
}

export default Sidebar2;
