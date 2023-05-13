import React from 'react'
import styled from 'styled-components'

const Wrapper =styled.div`
width: 100%;
padding: 10px;
`;

const Account = styled.div``;
const Privacy = styled.div``;

const Heading =styled.div`

`;
const Line = styled.div`
height: 1.5px;
background-color: lightgrey;
margin: 2% 0;

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

const Lable = styled.div`
    color: #333;
    margin: 7px 0; 
    font-weight: 550;
`;

const Submit = styled.div`
background-color: #175ddc;
border-color: #175ddc;
color: #fff;
cursor: pointer;
width: 70px;
height: 30px;
box-sizing: border-box;
overflow: hidden;
outline: none;
opacity: 1;
margin: 15px 0;
text-align: center;
padding: 6px;
border-radius: 5px;
`;
const Continue = styled.div`
background-color: #175ddc;
border-color: #175ddc;
color: #fff;
cursor: pointer;
width: 80px;
height: 30px;
box-sizing: border-box;
overflow: hidden;
outline: none;
opacity: 1;
margin: 15px 0;
text-align: center;
padding: 6px;
border-radius: 5px;
`;


const Heading2 = styled.div`
font-size: 20px;
font-weight: bold;
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
`;


function Profile() {
  return (
    <Wrapper>
        <Account>
        <Heading>My Account </Heading>
        <Line/>
        <Lable>Name</Lable>
            <Input/>

     
            <Lable>Email</Lable>
            <Input/>
     
        <Submit>Save</Submit>
        <br/>
        <br/>
        <Heading>Change email </Heading>
        <Line/>
        <Lable>Master password </Lable>
            <Input/>
     
            <Lable>New email</Lable>
            <Input/>
     
        <Continue>Continue</Continue>
        </Account>

        <Privacy>
        <Heading style={{color:'#175ddc', fontSize: 20}}>Master password </Heading>
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
          <Input type='text' placeholder='qwerty@1-9'/>
          <ChangePwd> Change master password</ChangePwd>

        </Privacy>


    </Wrapper>
  )
}

export default Profile