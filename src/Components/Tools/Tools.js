import React, { useState } from "react";
import styled from "styled-components";
import Password from "./Password";
import UserName from "./UserName";
import {BsThreeDotsVertical} from "react-icons/bs";

const Wrapper = styled.div`

  padding: 0 1%;
  width: 100%;
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
  color: rgb(51, 51, 51);
  font-family: "Nanum Gothic";
  @media (max-width: 768px)
  {
    /* align-items: center; */
    padding: 0 40%;
    background-color: black;
    color: white;
  }
`;
const GenratedText = styled.div`
  margin: 10px 0;
  padding-left: 5px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  height: 60px;
  overflow: hidden;
  opacity: 1;
  outline: none;
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  border: 1px solid rgb(237, 238, 237);
`;
const Genrator = styled.div`
  width: 100%;
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
`;
const RadioButton = styled.input``;
const RadioButtonLabel = styled.label`
  margin: 0 15px 0 0;
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
`;
const Line = styled.div`
height: .5px;
background-color: lightgrey;
margin: 4px 0;
@media(max-width: 1024px)
{
  margin: 5px 0 12px 0;
}
@media (max-width: 768px){
  display: none;
}
`;
const RadioButtonDiv = styled.div`
  display: flex;
`;
const Div = styled.div`
@media (max-width:768px){
display: flex;
justify-content: space-around;
background-color: black;
}
`;

function Tools() {
  const [GenPass, setGenPass] = useState("");
  const [UserNameCheck, setUserNameCheck] = useState("");
  const [PassCheckBox, setPassCheckBox] = useState("");

  return (
    <>
      <Wrapper>
        <Genrator>
          <Div>
          <HeadingGen>Genrator</HeadingGen>
          <BsThreeDotsVertical style={{color: 'white', marginTop: '8px'}}/>
          </Div>
          <Line/>
          <GenratedText>{GenPass}</GenratedText>
          <Title>What would you like to</Title>
          <RadioButtonDiv>
            <div>
              <RadioButton
                type="radio"
                value="0"
                name="passCheckBox"
                onChange={(e) => {setPassCheckBox(!PassCheckBox)
                  setUserNameCheck(false)}}
                  // onClick={uncheck('userNameCheck')}
              />
              <RadioButtonLabel>Password</RadioButtonLabel>
            </div>
            <div>
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
            </div>
          </RadioButtonDiv>
          {UserNameCheck ? <UserName  sendData={setGenPass} /> : ""}
          {PassCheckBox ? <Password sendData={setGenPass} /> : ""}
        </Genrator>
      </Wrapper>
    </>
  );
}

export default Tools;
