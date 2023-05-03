import React from 'react'
import styled from 'styled-components'
const CheckBoxSelector = styled.input``;
const OptionField = styled.div`
  display: flex;
  flex-direction: column;
`;
const Buttons =styled.div`
display :flex;
`; 

const CopyButton =styled.button`
    width: 158px;
    height: 32px;
    box-sizing: border-box;
    overflow: hidden;
    outline: none;
    cursor: inherit;
    opacity: 1;
    background-color: rgb(23, 93, 220);
    border-radius: 6px;
    border: 0px;
    color: #fff;
    margin: 10px;
`;
const RegenratePasswordButton =styled.button`
    border: 0px;
     width: 158px;
    height: 32px;
    background: transparent;
    padding: 0px 8px;
    margin: 10px;
    outline: none;
    appearance: none;
    opacity: 1;
    color: rgb(108, 117, 125);
    font-family: "Nanum Gothic";
    font-size: 13px;
    letter-spacing: 0px;
    text-align: center;
    text-transform: none;
    pointer-events: auto;
    background-color: rgb(251, 251, 251);
    border-radius: 4px;
    border: 1px solid rgb(192, 192, 192);
`;

const FieldValue = styled.div`
  display: flex;
`;
const PasswordGENStyle = styled.div`
  padding: 0 10px 0 0;
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

const Lable = styled.div`
  font-size: 12px;
  text-transform: none;
  text-align: left;
  letter-spacing: 0px;
  line-height: 20px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  color: rgb(51, 51, 51);
  font-family: "Nanum Gothic";
`;

const LableInput = styled.input`
  height: 34px;
  padding: 0 5px;
  overflow: hidden;
  opacity: 1;
  outline: none;
  background-color: rgb(251, 251, 251);
  border-radius: 6px;
  border: 1px solid rgb(199, 199, 203);
`;

function Password() {
  return (
    <>
    <Title>Password Type</Title>
  <RadioButtonDiv>
    <div>
      <RadioButton type="radio" />
      <RadioButtonLabel>Password</RadioButtonLabel>
    </div>
    <div>
      <RadioButton type="radio" />
      <RadioButtonLabel>Passphrase</RadioButtonLabel>
    </div>
  </RadioButtonDiv>
  <FieldValue>
    <PasswordGENStyle>
      <Lable>Length</Lable>
      <LableInput></LableInput>
    </PasswordGENStyle>
    <PasswordGENStyle>
      <Lable>Minimum Numbers</Lable>
      <LableInput></LableInput>
    </PasswordGENStyle>
    <PasswordGENStyle>
      <Lable>Special Characters</Lable>
      <LableInput></LableInput>
    </PasswordGENStyle>
  </FieldValue>
  <OptionField>
    <Title>Options</Title>
    <div>
      <CheckBoxSelector type="checkbox" />
      <RadioButtonLabel>A-Z</RadioButtonLabel>
    </div>
    <div>
      <CheckBoxSelector type="checkbox" />
      <RadioButtonLabel>a-z</RadioButtonLabel>
    </div>
    <div>
      <CheckBoxSelector type="checkbox" />
      <RadioButtonLabel>0-9</RadioButtonLabel>
    </div>
    <div>
      <CheckBoxSelector type="checkbox" />
      <RadioButtonLabel>!@#$%^&*</RadioButtonLabel>
    </div>
    <div>
      <CheckBoxSelector type="checkbox" />
      <RadioButtonLabel>Avoid ambiguous characters</RadioButtonLabel>
    </div>
    <Buttons>

    <CopyButton>Copy Password</CopyButton>
    <RegenratePasswordButton>Regenrate Password</RegenratePasswordButton>
    </Buttons>
  </OptionField>
  
  </>
  )
}

export default Password