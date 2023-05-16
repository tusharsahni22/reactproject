import React, { useState } from "react";
import styled from "styled-components";
import Password from "./Password";
import UserName from "./UserName";

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
`;
const GenratedText = styled.div`
  padding: 0px 40%;
  letter-spacing: 1px;
  /* align-items: center; */

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

const RadioButtonDiv = styled.div`
  display: flex;
`;

function Tools() {
  const [GenPass, setGenPass] = useState("");
  const [UserNameCheck, setUserNameCheck] = useState("");
  const [PassCheckBox, setPassCheckBox] = useState("");

  return (
    <>
      <Wrapper>
        <Genrator>
          <HeadingGen>Genrator</HeadingGen>
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
