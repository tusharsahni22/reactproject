import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Item from "./Item";
import { useState } from "react";

// import {AiOutlineCreditCard} from 'react-icons/ai';

import {BsSearch} from "react-icons/bs";

const Container = styled.div`
  width: 100%;
`;

const Input = styled.input`
  margin-left: 10px;
  height: 15px;
  border: none;
  outline: none;
  border: 0 white;
  background-color: #24195f;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 10px 0 10px;
  padding-top: 20px;
  margin-top: 10px;
  @media (max-width: 767px){
    background-color: rgb(48,48,48);
    color: white;
  }
`;
const All = styled.div``;
const R2 = styled.div``;
const R3 = styled.div``;

const Head = styled.div`
  display: flex;
  font-size: 25px;
  margin: 20px 0 10px 20px;
  justify-content: space-between;
  @media (max-width:767px){
    display: none;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: #1466e9;
  color: white;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  padding: 7px;
  cursor: pointer;
    &:hover{ background-color: darkblue;}
`;
const Button2 = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: #1466e9;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  padding: 7px 13px 7px 15px;
  margin: 10px 20px 0 39%;
  cursor: pointer;
  &:hover{ background-color: darkblue;}
`;
const Img = styled.img`

height: 150px;
width: 150px;
margin: 10px 20px 0 35%;
`;
const R4 = styled.div`
display: flex;
justify-content: center;
`;
const Line = styled.div`
height: 1.5px;
background-color: lightgrey;
margin: 2%;
`;
const Mobile = styled.div`
@media (max-width: 767px){
  display: flex;
  font-size: 20px;
  padding: 10px;
  /* margin: 20px 0 10px 20px; */
  justify-content: space-between;
  background-color: black;
  color: white;
}
@media (min-width: 768px){
  display: none;
}
`;
const Div =styled.div`
@media (max-width:768px){
  display: none;
}
`;
const ProfilePic = styled.img`
   vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

function Front() {
  const [newItem,setNewItem] = useState(false)
  
  return (
    <Container>
      <Head>
        All vaults
        <Button onClick={()=> {setNewItem(!newItem)}}>
          <AiOutlinePlus /> New item
        </Button>
       
      </Head>
      <Mobile>
      <ProfilePic src="./avatar.jpg"/>
      <div style={{marginTop:'9px', backgroundColor:'black'}}>
        My vault
        </div>
        <div style={{marginTop: '10px',backgroundColor:'black'}}>
        <BsSearch/>  
          <AiOutlinePlus onClick={()=> {setNewItem(!newItem)}}/>
          </div>
      </Mobile>
      <Row>
        <All><Input type="checkbox" />  All </All>
        <R2>Name </R2>
        <R3> Owner </R3>
          <BiDotsVerticalRounded />        
        <Line/>
      </Row>
      <Row>
        <All><Input type="checkbox" />  All </All>
        <R2>Name </R2>
        <R3> Owner </R3>
          <BiDotsVerticalRounded />        
        <Line/>
      </Row>
      <Line/>
      <Div>
      <Img src="./img.png"/>
      <R4>There are no items to list.</R4>
      <Button2 onClick={()=> {setNewItem(!newItem)}} >
          <AiOutlinePlus /> New item
        </Button2>
        </Div>
        
        {newItem ?<Item sendData={setNewItem}/> : " "}
    </Container>
  );
}

export default Front;
