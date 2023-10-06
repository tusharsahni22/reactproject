import React, { useState } from "react";
import styled from "styled-components";
import Password from "./Password";
import UserName from "./UserName";
import {FiRefreshCw} from "react-icons/fi";
import {MdOutlineContentCopy} from "react-icons/md";
import {toast,ToastContainer} from "react-toastify";

const Wrapper = styled.div`

  padding: 1% 2%;
  width: 70%;
  @media (max-width: 1024px){
    width: 60%;
  }
  @media (max-width: 767px){
    background-color: #212121;
    width: 100%;
  }
 
  
`;
const HeadingGen = styled.div`
  height: 29px;
  margin: 0px;
  overflow: hidden;
  font-size: 23px;
  text-transform: none;
  text-align: left;
  letter-spacing: 1px;
  line-height: 29px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  color: black;
  font-family: "Nanum Gothic";
  @media (max-width: 767px)
  {
    /* align-items: center; */
    padding: 0 38%;
    background-color: #212121;
    color: white;
    font-size: 18px;
  }
`;
const GenText = styled.div`
@media (max-width: 767px){
  display: flex;
  justify-content: space-between;
  background-color: rgb(48 48 48);
}
`;
const DivGen = styled.div`
@media (max-width: 767px){
/* align-items: center; */
display: flex;
padding: 15px 0;
justify-content: space-between;
background-color: rgb(48 48 48);
}
@media (min-width: 768px){
  display: none;
  
}
`;

const GenratedText = styled.div`
    display: inline-block;
 width: 100%;
  word-wrap: break-word;
  padding: 10px 5px;
  letter-spacing: 1px;
  align-items: center;
  overflow: hidden;
  opacity: 1;
  outline: none;
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  border: 1px solid rgb(237, 238, 237);
  @media (max-width: 767px){
    padding: 23px 5px;
    display: inline-block;
    max-width: 100%;
    word-wrap: break-word;
    background-color: rgb(48 48 48);
    border: none;
  }
  
`;
const Title = styled.div`
  margin: 10px 0;
  overflow: hidden;
  font-size: 1rem;
  font-weight: bold;
  text-transform: none;
  text-align: left;
  letter-spacing: 0px;
  line-height: 22px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  color: rgb(51, 51, 51);
  font-family: "Nanum Gothic";
  @media (max-width: 767px){
    color: white;
    letter-spacing: 2px;
    margin: 2% 0%;
    font-weight: 200;
    background-color: rgb(48 48 48);
  }
`;
const RadioButton = styled.input``;
const RadioButtonLabel = styled.label`
  margin: 0px 15px 0px 15px;
  font-size: 13px;
  text-transform: none;
  text-align: left;
  letter-spacing: 0px;
  line-height: 19px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  color: rgb(51, 51, 51);
  font-family: "Nanum Gothic";
  @media (max-width: 767px){
    color: white;
    margin-left: 5px;
     background-color: rgb(48 48 48);
  }
`;
const Line = styled.div`
height: .5px;
background-color: lightgrey;
margin: 5px 0 12px 0;
@media (max-width: 768px){  
  height: 4px;
background-color: rgb(34 34 34);
}
@media (min-width: 768px){
  display: none;
}
`;
const Buttondiv = styled.div`
background-color: white;
width: 100px;
@media (max-width: 767px){
  background-color: rgb(48 48 48);
}
`;

const RadioButtonDiv = styled.div`
  display: flex;
  background-color: white;
  @media (max-width: 767px){
   background-color: rgb(48 48 48);
  }
`;


function Tools() {
  const [GenPass, setGenPass] = useState("");
  const [UserNameCheck, setUserNameCheck] = useState("");
  const [PassCheckBox, setPassCheckBox] = useState("");
  

  function handleCopy (){
    navigator.clipboard.writeText(GenPass)
    toast.success("Copied!")
  }

  return (
    <>
      <Wrapper>
      <ToastContainer/>
          <HeadingGen>Genrator</HeadingGen>
          <Line/>
          <GenText>
          <GenratedText>{GenPass}</GenratedText>
          <DivGen>
          <MdOutlineContentCopy style={{margin:'10px',backgroundColor:"rgb(48,48,48)"}} onClick={handleCopy}/>
          <FiRefreshCw style={{margin:'10px',backgroundColor:"rgb(48,48,48)"}} />
          </DivGen>
          </GenText>

          <Line/>

          <Title>What would you like to generate? </Title>
          <RadioButtonDiv>
            <Buttondiv>
              <RadioButton
                type="radio"
                value="0"
                name="passCheckBox"
                onChange={(e) => {setPassCheckBox(!PassCheckBox)
                  setUserNameCheck(false)}}/>
              <RadioButtonLabel>Password</RadioButtonLabel>
            </Buttondiv>
            <Buttondiv>
              <RadioButton
                type="radio"
                value="0"
                name="passCheckBox"
                onChange={(e) => {
                  setUserNameCheck(!UserNameCheck)
                  setPassCheckBox(false)
                }}
              />
              <RadioButtonLabel>Username</RadioButtonLabel>
            </Buttondiv>
          </RadioButtonDiv>
          {UserNameCheck ? <UserName  sendData={setGenPass} /> :""}
          {PassCheckBox ? <Password sendData={setGenPass} /> : ""}
      </Wrapper>
    </>
  );
}

export default Tools;
