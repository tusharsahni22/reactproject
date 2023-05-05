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
const RadioButton = styled.input``;
const RadioButtonLabel = styled.label`
  margin: 0 15px 0 0;
  font-size: 15px;
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

const CheckBoxes = styled.div`
  margin: 10px 0;
`;

const EmailField = styled.input`
    background-color: #fbfbfb;
    border-color: #ced4da;
    color: #465057; 
    /* width: 100%; */
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    outline: none;
`;
const Hint = styled.div`
font-size: small;
margin: 0 0 0 15px;
color :#6c757d ;
`;


function UserName() {
  return (
    <div>
<Title>Username type</Title>
  <RadioButtonDiv>
    <CheckBoxes>
      <RadioButton type="radio" />
      <RadioButtonLabel>Plus addressed email</RadioButtonLabel>
      <Hint>Use your email provider's sub-addressing capabilities.</Hint>
    </CheckBoxes>
    <CheckBoxes>
      <RadioButton type="radio" />
      <RadioButtonLabel>Catch-all email</RadioButtonLabel>
      <Hint>Use your domain's configured catch-all inbox.</Hint>
    </CheckBoxes>
    <CheckBoxes>
      <RadioButton type="radio" />
      <RadioButtonLabel>Forwarded email alias</RadioButtonLabel>
      <Hint>Generate an email alias with an external forwarding service.</Hint>
    </CheckBoxes>
    <CheckBoxes>
      <RadioButton type="radio" />
      <RadioButtonLabel>Random word</RadioButtonLabel>
    </CheckBoxes>
  </RadioButtonDiv>
  <Title>Email address</Title>
  <EmailField></EmailField>
  <OptionField>
    <Title>Options</Title>
    <div>
      <CheckBoxSelector type="checkbox" />
      <RadioButtonLabel>Capitalize</RadioButtonLabel>
    </div>
    <div>
      <CheckBoxSelector type="checkbox" />
      <RadioButtonLabel>Include number</RadioButtonLabel>
    </div>

    <Buttons>

    <CopyButton>Copy UserName</CopyButton>
    <RegenratePasswordButton>Regenrate UserName</RegenratePasswordButton>
    </Buttons>
  </OptionField>
  

    </div>
  )
}

export default UserName