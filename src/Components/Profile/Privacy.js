import React from 'react'
import styled from 'styled-components'

const Privacy = styled.div`

width: 100%;
padding: 10px;
`;
const Heading =styled.div`
color:'#175ddc';
font-size: 20px;
letter-spacing: 0.5px;
`;
const Line = styled.div`
height: 1.5px;
background-color: lightgrey;
margin: 2% 0;

`;
const Heading2 = styled.div`
font-size: 20px;
font-weight: bold;
letter-spacing: 0.5px;
`;

const Lable = styled.div`
    color: #333;
    margin: 7px 0; 
    font-weight: 550;
    letter-spacing: 0.5px;
`;
const Input = styled.input`
    background-color: #fbfbfb;
    border-color: #ced4da;
    color: #465057;
    
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.30rem;
`;
const Div = styled.div`
  display: flex; 
`;
const Pwd =styled.div`
width:100%;
`;

const Pwd1 =styled.div`
width:100%;
`;
const ChangePwd = styled.div`
background-color: #175ddc;
border-color: #175ddc;
color: #fff;
cursor: pointer;
width: 200px;
height: 30px;
box-sizing: border-box;
overflow: hidden;
outline: none;
opacity: 1;
margin: 15px 0;
text-align: center;
padding: 6px;
border-radius: 5px;
letter-spacing: 0.5px;
`;

function PrivacyComponent() {
  return (
   
    <Privacy>
        <Heading >Master password </Heading>
      <Line />
      <Heading2> Change master password</Heading2>
      <br/>
      <br/>
      <Lable>Current master password</Lable>
      <Input />
      <Div>
        <Pwd>
          <Lable> New master password</Lable>
          <Input/>
        </Pwd>
        <Pwd1>
          <Lable> Confirm new master password</Lable>
          <Input/>
        </Pwd1>
      </Div>
      <Lable> master password hint</Lable>
          <Input type='text' placeholder=' hint'/>
          <ChangePwd> Change master password</ChangePwd>

        </Privacy>

  )
}

export default PrivacyComponent