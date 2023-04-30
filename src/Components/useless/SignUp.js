import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: #24195f;
  padding: 0 25% 0 25%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2d084c;
  height: 100vh;
  /* box-shadow: 10px 0px 5px red; */
`;
const Name = styled.div`
  display: flex;
  margin: 0 20px 10px 20px;
`;

const Label = styled.div`
  margin: 40px 0 0 20px;
  color: white;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  align-content: start;
`;
const Input = styled.input`
  margin: 0 20px 20px 20px;
  height: 35px;
  border-radius: 20px;
  border: 1.25px solid rgb(255 0 137);
  padding-left: 16px;
  outline: none;
  background-color: #24195f;

  /* box-sizing: border-box; */
`;
const Input1 = styled.input`
  margin: 0 2px 20px 0;
  width: 50%;
  height: 35px;
  border-radius: 20px;
  border: 1.25px solid rgb(255 0 137);
  padding-left: 16px;
  background-color: #24195f;
  outline: none;
`;
const Input3 = styled.input`
  margin: 0 2px 20px 20px;
  width: 50%;
  height: 35px;
  border-radius: 20px;
  border: 1.25px solid rgb(255 0 137);
  padding-left: 16px;
  background-color: #24195f;
  outline: none;
`;

const Input2 = styled.input`
  margin: 0px 8px 1px 45px;
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  border: 0 white;
  background-color: #24195f;
`;
const Input4 = styled.input`
  margin: 10px 20px 0px 20px;
  height: 15px;
  border: none;
  outline: none;
  border: 0 white;
  background-color: #24195f;
`;

const UserCredential = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const DisplayFlex = styled.div`
  display: flex;
  justify-content: start;
  margin: -10px 0px -3px 8px;
  width: 100%;
`;
const Privacy = styled.div`
font-size: 14px;
  color: white;
  margin: 10px 0 10px 0;
`;

const Pwd = styled.div`
  display: flex;
  margin: 2px 20px 18px -20px;
  width: 100%;
  height: 35px;
  border-radius: 36px;
  padding-left: -10px;
  /* border-color: red ; */
  border: 1.25px solid rgb(255 0 137);
  background-color: #24195f;
`;
const Button2 = styled.button`
  border: none;
  color: grey;
  margin: 3px 11px 4px 0px;
  font-size: 14px;
  background-color: #24195f;
`;

const Button = styled.button`
  background-color: #ff006a;

  height: 50px;
  color: white;
  font-size: 15px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  margin: 10px 20px 0 20px;
`;

function SignUp() {
  return (
    <Container>
      <Card>
        <Label> Sign Up</Label>
        <UserCredential>
          <Name>
            <Input1 type="text" placeholder="First Name" />
            <Input3 type="text" placeholder="Last Name" />
          </Name>
          <Input type="text" placeholder="Email" />
          <Pwd>
            <Input2 type="password" placeholder="Password" />
            <Button2> Show </Button2>
          </Pwd>
          <Input type="text" placeholder="Confirm Password" />
        </UserCredential>
        <DisplayFlex>
          <Input4 type="checkbox" />
          <Privacy> I Agree with <span style={{color: 'rgb(255 0 137)'}}>privacy</span> and <span style={{color: 'rgb(255 0 137)'}}>policy </span></Privacy>
        </DisplayFlex>
        <Button> Sign up</Button>
      </Card>
     
    </Container>
  );
}

export default SignUp;
