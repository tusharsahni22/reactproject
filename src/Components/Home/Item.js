import React, { useState } from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import { addNewItem } from "../services/profileServices";


const Container = styled.div`
  height: 500px;
  width: 800px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;
  top: 10%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  position: fixed;
  border: 1px solid;
  border-radius: 5px;

  @media(max-width: 1024px)
  {
    width: 600px;
    
  }
  @media (max-width:768px){
    width: 400px;
    overflow: hidden;
    top: 15%;
    height: 480px;
    overflow: scroll;
    width: 500px;
  }
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 15px;
  padding: 20px 10px;
  @media(max-width: 768px){
  width: 470px;
  }
  
`;
const Position = styled.div`
position: sticky;
top: 0;
@media(max-width: 768px){
  width: 470px;
  }
`;

const Line = styled.div`
  height: 1px;
  background-color: lightgray;
  @media(max-width: 768px){
  width: 470px;
  }
  
`;
const Line2 = styled.div`
  height: 50px;
  
`;
const Title = styled.div`
  margin: 15px 0 8px 4px;
  font-weight: 550;
`;
const Select = styled.select`
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
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  border-radius: 4px;
  border: 2px solid lightgray;
`;

const Pannel = styled.div`
  width: 100%;
  padding: 0 2%;
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
@media(max-width: 1024px){
  width: 550px;
  }
  @media(max-width: 768px){
  width: 470px;
  }
`;
const Footer = styled.div`
display: flex;
position: sticky;
bottom: 0;
width: 100%;
border: 1px solid lightgrey;
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
margin: -5px 4px;
cursor: pointer;
&:hover{ background-color:darkblue;}
`;
const Button4 = styled.div`
background-color: white;
color: grey;
border: 1px solid lightgray;
font-size: 15px;
border-radius: 5px;
padding: 7px;
height: fit-content;
margin: -5px 4px;
cursor: pointer;
&:hover{ background-color:lightgrey; color:black;}

`;
const Option = styled.option`

`;

const LoginDiv = styled.div``;

const Card =styled.div`
width:100%;
`;
const Cardd =styled.div`
display:flex;
width:100%;
`;

const Month = styled.div`
width: 50%;
`;
const Year = styled.div`
width: 50%;
`;
const Buttonn = styled.input`
margin-left: 4px;
  width: 50%;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  border-radius: 4px;
  border: 2px solid lightgray;
`;
const Cvv = styled.div`
padding: 0 0 78px 0;
display: flex;
`;

function Item(props) {
  const [select,setSelect] = useState("login");
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const [url,setUrl] = useState("");
  const [notes,setNotes] = useState("");
  const [cvv,setCvv] = useState("");
  const [cardholder,setCardholder] = useState("");
  const [bank,setBank] = useState("");
  const [cardNumber,setCardNumber] = useState("");
  const [exYear,setExYear] = useState("");
  const [exMonth,setExMonth] = useState("");
  
  
  const handleClose = () => {    
    props.sendData(false);
  };
  const submitData = () => {
    let data = {
    "type":select,
    "username":userName,
    "password":password,
    "name":name,
    "url":url,
    "notes":notes,
    "cvv":cvv,
    "cardholder":cardholder,
    "bankName":bank,
    "cardnumber":cardNumber,
    "expiryMonth":exMonth,
    "expiryYear":exYear
    }
    addNewItem(data)
    handleClose()

    
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
          <Select onChange ={(e)=>(setSelect(e.target.value))}> 
            <Option value={"login"}> Login</Option>        
            <Option value={"card"}> Card</Option>
          </Select>
          </Pannel>          
          {(select === "login") ? <LoginDiv>
            <Pannel>
            <Title>Name</Title>
          <Button1 type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Domain"></Button1>

          <Div>
            <User>
              <Title> Username</Title>
              <Button2 type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} placeholder="CaptainAmera"></Button2>
            </User>
            <Pwd>
              <Title> Password</Title>
              <Button2 value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}}></Button2>
            </Pwd>
          </Div>
     
        <Title> URL </Title>
        <Button1 type="text" value={url} onChange={(e)=>{setUrl(e.target.value)}} placeholder="ex. https://facebook.com "></Button1>
        <Title>Notes </Title>
        <Notes type= "text" value={notes} onChange={(e)=>{setNotes(e.target.value)}} placeholder='' > </Notes>
      </Pannel>
      <Line2/>
          </LoginDiv> :" "}

          {(select === "card") ? <div>
            <Pannel>

            <Div>
            <Card>
              <Title> Card Holder Name</Title>
              <Button2 type="text" value={cardholder} onChange={(e)=>{setCardholder(e.target.value)}} placeholder="Name"></Button2>
            </Card>
            <Card>
              <Title> Bank </Title>
              <Button2 type="text" value={bank} onChange={(e)=>{setBank(e.target.value)}} placeholder="SBI"></Button2>
            </Card>
          </Div>
        
          <Div>
            <Card>
              <Title> Card Number</Title>
              <Button2 type="number" value={cardNumber} onChange={(e)=>{setCardNumber(e.target.value)}} placeholder=""></Button2>
            </Card>
            <Cardd>
              <Month>
                <Title> Expiration Month </Title>
                <Buttonn type="number" value={exMonth} onChange={(e)=>{setExMonth(e.target.value)}} placeholder=""></Buttonn>
              </Month>
              <Year>
                <Title> Expiration Year </Title>
                <Buttonn type="number" value={exYear} onChange={(e)=>{setExYear(e.target.value)}} placeholder=""></Buttonn>
              </Year>
            </Cardd>
          </Div>
          <Cvv>
            <div>
              <Title>Security Code (CVV)</Title>
              <Button2 type="password" value={cvv} onChange={(e)=>{setCvv(e.target.value)}} placeholder=""></Button2>
              </div>
              <div>
              <Title></Title>
              <Title></Title>
              </div>
            </Cvv>

            </Pannel>

          </div>: ""}
          
      <Footer>
        <Button3 onClick={() => {
              submitData();
            }}> Save</Button3>
        <Button4 onClick={() => {
              handleClose();
            }}> Cancel</Button4>
        
      </Footer>
      
    </Container>
  );
}

export default Item;
