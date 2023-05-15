import {React , useState}from 'react'
import styled from 'styled-components'
import Sidebar from "./Sidebar";
import PrivacyComponent from "./Privacy"

const Account = styled.div`
width: 100%;
padding: 10px;
`;
const Wrapper = styled.div`
display: flex;
`;
const Heading =styled.div`
font-size: 20px;

letter-spacing: 0.5px;
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


function ProfileComponent() {
    const [account,setAccount] = useState(true)

  return (
  <Wrapper>
    <Sidebar sendData={setAccount}/>
       {account ?  <Account>
        <Heading>My Account </Heading>
        <Line/>
        <Lable>Name</Lable>
            <Input/>

     
            <Lable>Email</Lable>
            <Input/>
     
        <Submit>Save</Submit>
        <br/>
      
        <Heading>Change Email </Heading>
        <Line/>
        <Lable>Master password </Lable>
            <Input/>
     
            <Lable>New email</Lable>
            <Input/>
     
        <Continue>Continue</Continue>
        </Account> : <PrivacyComponent/>}
        </Wrapper>

  )
}

export default ProfileComponent