import React, { useState } from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";


const Container = styled.div`
  height: 500px;
  width: 800px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;
  top: 10%;
  left: 20%;
  right: 20%;
  position: fixed;
  border: 1px solid;
  border-radius: 5px;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 15px;
  padding: 20px 10px;
`;
const Position = styled.div`
position: sticky;
top: 0;
`;

const Line = styled.div`
  height: 1px;
  background-color: lightgray;
`;
const Title = styled.div`
  margin: 15px 0 8px 4px;
  font-weight: 550;
`;
const Button = styled.select`
  margin-left: 4px;
  width: 45%;
  padding: 8px;
  border-radius: 4px;
  border: 2px solid lightgray;
`;
const Button1 = styled.input`
  margin-left: 4px;
  width: 45%;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  border-radius: 4px;
  border: 2px solid lightgray;
`;
const Button2 = styled.input`
  margin-left: 4px;
  width: 90%;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  border-radius: 4px;
  border: 2px solid lightgray;
`;

const Pannel = styled.div`
width: 100%;
  padding-left: 1%;
`;

const Div = styled.div`
  display: flex;  
`;
const User =styled.div`
width:100%;
`;
const Pwd = styled.div`
width: 100%;
`;
const Notes = styled.textarea`
width: 750px;
height: 150px;
margin: 5px;
border-radius: 4px;
border: 2px solid lightgray;
`;
const Footer = styled.div`
display: flex;
background-color: white;
height: 15px;
padding: 20px 10px;
`;

const Button3 = styled.button`
background-color: rgb(23, 93, 220);
color: white;
border: none;
font-size: 15px;
border-radius: 5px;
padding: 7px;
height: fit-content;
margin: 0px 4px;
`;
const Button4 = styled.div`
background-color: white;
color: gray;
border: 1px solid lightgray;
font-size: 15px;
border-radius: 5px;
padding: 7px;
height: fit-content;
margin: 0px 4px;

`;

function Item(props) {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(true);
    props.sendData = close;
  };
  return (
    <Container>
      <Position>
      <Head>
        <div>NEW ITEM</div>
        <div>
          <GrFormClose
            onClick={() => {
              handleClose();
            }}
          />
        </div>
      </Head>
      <Line />
      </Position>
      
      <Pannel>
       
          <Title>What type of item is this?</Title>
          <Button > 
            <option> Login</option>
            <option> Card</option>
            <option> Identity</option>
            <option> Secure Note</option>
          </Button>


          <Title> Name</Title>
          <Button1 type="text" placeholder=""></Button1>

          <Div>
            <User>
              <Title> Username</Title>
              <Button2 type="text" placeholder=""></Button2>
            </User>
            <Pwd>
              <Title> Password</Title>
              <Button2 type="password" placeholder=""></Button2>
            </Pwd>
          </Div>
     
        <Title> URL </Title>
        <Button type="text" placeholder="ex.https://google.com "></Button>
        <Title>Notes </Title>
        <Notes type= "text" placeholder='' > </Notes>
      </Pannel>
     
      <Line />
      <Footer>
        <Button3> Save</Button3>
        <Button4> Cancel</Button4>
        
      </Footer>

    </Container>
  );
}

export default Item;
