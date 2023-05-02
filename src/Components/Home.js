import styled from "styled-components";
import { CiCircleQuestion } from "react-icons/ci";
import { SiVault } from "react-icons/si";
import Accordian from "./Accordian";
import Accordion2 from "./Accordion2";
import Accordion3 from "./Accordion3";
import { Copyright } from "@mui/icons-material";
import { Icon } from "@mui/material";
import { margin, style } from "@mui/system";
import {BiDotsVerticalRounded} from 'react-icons/bi';

const Container = styled.div`
display:flex;
`;
const Container2 = styled.div`
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
const Line = styled.div`
  height: 1.5px;
  background-color: lightgrey;
`;
const Copy = styled.div`
margin: 5px 5px 5px 5px;
`;
const Footer = styled.div`
display: flex;
justify-content: space-between;
`;
const Section = styled.div`
display:flex;
width: 50%;
`;
const Input = styled.input`
  margin: 10px 10px 0px 20px;
  height: 15px;
  border: none;
  outline: none;
  border: 0 white;
  background-color: #24195f;
`;
const Iconn = styled.div``;
const Row = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 10px 0 10px;
padding-top: 20px;
margin-top: 10px;
width: 70%;
`;
const R1 = styled.div``;
const R2 = styled.div``;
const R3 = styled.div``;
const Head = styled.div`
display: flex;
margin: 10px 10px 10px 20px;
`;

function Front() {
  return (
    <div>
      <Container2>
        <Logo>
          <SiVault />
        </Logo>

        <Nav>
          <Item>Vaults</Item>
          <Item> Send </Item>
          <Item> Tools </Item>
          <Item> Reports </Item>
        </Nav>
      </Container2>
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
      <Section>
        <Head>
        All vaults
        </Head>
        <Row>
        <Input type="checkbox"/>
        <R1>All</R1>
        <R2>Name </R2>
        <R3> Owner </R3>
        <Iconn> <BiDotsVerticalRounded/></Iconn>
        </Row>
      </Section>
      </Container>
      <Line></Line>
      <Footer>
      
      <Copy>© 2023 Bitwarden Inc.</Copy>
      <Copy>Version 2023.4.0</Copy>
      </Footer>
    </div>
  );
}

export default Front;
