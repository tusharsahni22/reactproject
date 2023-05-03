import styled from "styled-components";
import { CiCircleQuestion } from "react-icons/ci";
import Accordian from "./Accordian";
import Header from "./Common/Header";


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
  height: 40px;
  margin: 4px 0 0 0;
  border: solid 1px;
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
  margin: 10px 0px 0px 10px;
  width: 92%;
  height: 25px;
`;

const CiCircleQuestions = styled.div`
  padding: 16px;
`;

function Front() {
  return (
    <div>
      <Header/>
      <Box>
        <BoxHead>
          <Heading> FILTERS </Heading>
        </BoxHead>
        <BoxHead2>
          <SearchVault type="input" placeholder="Search vault" />
          <CiCircleQuestions>
            <CiCircleQuestion />
          </CiCircleQuestions>
        </BoxHead2>
        <Accordian />
       {/* 2nd approch */}
      </Box>
    </div>
  );
}

export default Front;
