import React from "react";
import styled from "styled-components";
// import { AiOutlineFileText } from "react-icons/ai";
// import { AiOutlineFile } from "react-icons/ai";
// import {HiOutlineSquares2X2} from 'react-icons/hi';

const ToolsSideBar = styled.div`
@media (max-width:768px){
  display: none;
}

`;
const Box = styled.div`
  align-items: start;
  outline: 0.5px solid;
  width : auto;
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
  &:active { border-color: rgb(249 249 249)}
`;

const Heading = styled.div`
  margin: 10px 0 10px 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  font-weight: bold;
`;

function Sidebar2() {
  return (
    <ToolsSideBar>
      <Box>
        <BoxHead>
          <Heading> FILTERS </Heading>
        </BoxHead>
  
          <SearchVault type="input" placeholder="Search Sends" />
      
        {/* <AllSends>All Sends </AllSends>
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
        </AllSends3> */}
      </Box>
    </ToolsSideBar>
  );
}

export default Sidebar2;
