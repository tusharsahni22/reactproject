import React, { useState } from 'react'
import { useNavigate,useLocation} from 'react-router-dom';
import styled from 'styled-components'

const TopBar=styled.div`
display: flex;
justify-content: space-between;
padding: 12px;
margin: 10px 0;
`;
const Wrapper=styled.div`
width: 100%;

`;

const H1 = styled.div`
  color: skyblue;
  font-size: 15px;
  margin: 10px 5px 15px 5px;
`;
const Selecter = styled.select`
width: 100%;
height: 40px;

border: 1px solid;
border-radius:0px;
`;
const Choice =styled.option`
`;

const Input=styled.input`
  background: transparent;
  margin: 0px;
  outline: none;
  appearance: none;
  opacity: 1;
  color:white;
  font-family: "Work Sans";
  font-size: 15px;
  width: -webkit-fill-available;
  height: 40px;
  border: 1px solid;
  padding: 0 0 0 2%  ;
`;
const FieldTitle=styled.div`
width: 100%;
margin: 10px 0;
`;
const Padding=styled.div`
padding: 0 3%;
`;
const LoginDiv=styled.div`
`;
const CardDiv=styled.div`
`;
function ViewItem() {
  let navigate = useNavigate();
  const {state} = useLocation();
  const {type,name,username,password,url,notes, cvv,cardholder,bankName,cardnumber,expiryMonth,expiryYear }= state
  const [select,setSelect] = useState(type);
  return (
    <Wrapper>
    <TopBar>
        <div onClick={()=>{navigate("/")}}>Cancel</div>
        <div>View</div>
        <div onClick={()=>{navigate("/")}}> Save </div>
    </TopBar>
    <Padding>

    <H1>Types</H1>
    <Selecter onChange ={(e)=>(setSelect(e.target.value))}>
        <Choice value={"login"}>{select}</Choice>
        {/* <Choice value={"card"}>{select}</Choice> */}
    </Selecter>
    </Padding>
    {(select === "login") ? <LoginDiv>
    <Padding>
    <FieldTitle>Name</FieldTitle>
    <Input value={name} placeholder="Domain"/>
    <FieldTitle>Username</FieldTitle>
    <Input value={username} placeholder="CaptainAmera"/>
    <FieldTitle>Password</FieldTitle>
    <Input value={password} type="text"/>
    <FieldTitle>Url</FieldTitle>
    <Input value={url} placeholder="ex. https://facebook.com "/>
    <FieldTitle>Notes</FieldTitle>
    <Input value={notes}/>
    </Padding>

    </LoginDiv>:<CardDiv>
    <Padding>
    <FieldTitle>Card Holder</FieldTitle>
    <Input value={cardholder} placeholder="Name"/>
    <FieldTitle>Bank Name</FieldTitle>
    <Input value={bankName} placeholder="SBI"/>
    <FieldTitle>Card Number</FieldTitle>
    <Input value={cardnumber} type="text"/>
    <FieldTitle>Valid From</FieldTitle>
    <Input value={expiryMonth} placeholder="07"/>
    <FieldTitle>Year</FieldTitle>
    <Input value={expiryYear} placeholder="2035"/>
    <FieldTitle>Cvv</FieldTitle>
    <Input value={cvv}/>
    </Padding>
    </CardDiv>
    }
    

    </Wrapper>
  )
}

export default ViewItem