import React, { useState } from "react";
import styled from "styled-components";
import { changeProfile } from "../services/profileServices";
import { toast, ToastContainer } from "react-toastify";

const Privacy = styled.div`
  width: 100%;
  padding: 10px;
`;
const Heading = styled.div`
  color: "#175ddc";
  font-size: 20px;
  letter-spacing: 0.5px;
   @media (max-width:767px){
    font-weight: bold;
    display:none;
  }
`;
const HeadingMob = styled.div`
font-size: 20px;
margin: 15px 0 9px;
font-weight: bold;
letter-spacing: 0.5px;
@media (max-width: 767px){
color: white;
font-weight:200;
margin: 2% 1%;
}
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
   @media (max-width:767px){
    font-weight: 100;
    display: none;
  }
`;

const Lable = styled.div`
  color: #333;
  margin: 7px 0;
  font-weight: 550;
  letter-spacing: 0.5px;
  
  @media (max-width:767px){
    color: white;
    margin: 20px 0px
  }
`;
const Lablee = styled.div`
  color: #333;
  margin: 35px 0 7px 0;
  font-weight: 550;
  letter-spacing: 0.5px;
  
  @media (max-width:767px){
    color: white;
    margin: 20px 0;
  }
`;
const Input = styled.input`
  background-color: #fbfbfb;
  border-color: #ced4da;
  color: #465057;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.3rem;
  @media (max-width: 1024px) {
    width: auto;
  }
`;
const Input2 = styled.input`
  background-color: #fbfbfb;
  border-color: #ced4da;
  color: #465057;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.3rem;
  @media (max-width: 1024px) {
    width: auto;
    margin-left: 10px;
  }
   @media (max-width:767px){
   margin-left: 0px;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
   @media (max-width:767px){
    display: block;
  }
`;
const Pwd = styled.div``;

const Pwd1 = styled.div`
  /* margin-left: 10px; */
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
  &:hover {
    background-color: darkblue;
  }

  @media (max-width: 1024px) {
    width: 100px;
  }
`;
const Error = styled.div`
  color: red;
`;

function PrivacyComponent() {
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [cnfPassword, setcnfPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdatePasword = () => {
    if (newpassword === "" || cnfPassword === "" || password === "") {
      setError("Enter all fields");
    } else if (newpassword !== cnfPassword) {
      console.log("first", newpassword, cnfPassword);
      setError("Password and Confirm password does not matched");
    } else {
      let data = { password: password, newpassword: newpassword };
      changeProfile(data).then((result) => {
        console.log("first",result)
        if (result.status === 201) {
          setPassword("");
          setNewPassword("");
          setcnfPassword("");
          toast.success("password changed sucessfully");
        } else {
          setPassword("");
          setNewPassword("");
          setcnfPassword("");
          toast.error("invalid password");
        }
      });
    }
  };
  return (
    <Privacy>
      <ToastContainer />
      <Heading>Master password </Heading>
      <HeadingMob> Change master password</HeadingMob>
      <Line />
      <Heading2> Change master password</Heading2>


      <Lablee>Current master password</Lablee>
      <Input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Div>
        <Pwd>
          <Lable> New master password</Lable>
          <Input
            value={newpassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </Pwd>
        <Pwd1>
          <Lable> Confirm new password</Lable>
          <Input2
            value={cnfPassword}
            onChange={(e) => {
              setcnfPassword(e.target.value);
            }}
          />
        </Pwd1>
      </Div>
      <Lable> Password Hint</Lable>
      <Input type="text" placeholder="Password Hint" />
      <ChangePwd
        onClick={() => {
          handleUpdatePasword();
        }}
      >
        {" "}
        Change master password
      </ChangePwd>
      <Error>{error}</Error>
    </Privacy>
  );
}

export default PrivacyComponent;
