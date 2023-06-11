import React, { useState } from 'react'
import styled from 'styled-components'
import { generate } from '@wcj/generate-password';



const CheckBoxSelector = styled.input`
cursor: pointer;
`;
const OptionField = styled.div`
  display: flex;
  flex-direction: column;
`;
const Buttons =styled.div`
display :flex;
`; 

const CopyButton =styled.button`
    border: 0px;
    width: 158px;
    height: 32px;
    background: transparent;
    padding: 0px 8px;
    margin: 12px 10px;
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
    background-color: rgb(23, 93, 220);
    border-radius: 4px;
    border: 1px solid rgb(192, 192, 192);
     @media (max-width: 767px){
    color: white;
    letter-spacing: 2px;
    margin: 2% 1%;
    font-weight: 200;
    margin: 3% 2%;
  }
`;
const RegenratePasswordButton =styled.button`
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
    margin: 12px 0;
     @media (max-width: 767px){
    color: white;
    letter-spacing: 2px;
    margin: 3% 2%;
    font-weight: 200;
  }
`;

const FieldValue = styled.div`
  display: flex;
`;
const PasswordGENStyle = styled.div`
  padding: 0 10px 0 0;
`;
// const RadioButton = styled.input``;
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
  @media (max-width: 767px){
    color: white;
    letter-spacing: 2px;
    margin: 2% 1%;
    font-weight: 200;
  }
`;

// const RadioButtonDiv = styled.div`
//   display: flex;
// `;
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
    margin: 2% 1%;
    font-weight: 200;
  }
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
const Lable2 = styled.div`
@media (max-width: 767px){
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  text-transform: none;
  text-align: left;
  letter-spacing: 2px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  color: white;
  margin: 2%;
  font-weight: 200;
  font-family: "Nanum Gothic";
}
   @media (min-width: 768px){
    display: none;
}
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
  @media (max-width: 767px){
    display: none;
  }
`;
const LableInput2 = styled.input`
@media (max-width: 767px){
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  transition: opacity .2s;
  margin: 2%;
  background-color: rgb(251, 251, 251);
}
  @media (min-width: 768px){
    display: none;
  }
`;

function Password(props) {

  const [RandomPass,setRandomPass] = useState("")
  const [Lenght,setLength] = useState(10)
  const [Caps,setCaps] = useState(true)
  const [Lower,setLower] = useState(false)
  const [Num,setNum] = useState(false)
  const [Special,setSpecial] = useState(false)
  let copiedData = ""
  
  function handleRandomPass(){                           
    copiedData=((generate({ length: Lenght ,special: Special,lowerCase: Lower, upperCase: Caps, numeric: Num })))
    props.sendData(copiedData)
    setRandomPass(copiedData)
  }

  return (
    <>
    <Title>Password Type</Title>
  <FieldValue>
    <PasswordGENStyle>
      <Lable>Length</Lable>
      <LableInput value={Lenght} onChange={(e)=>{setLength(e.target.value)}}></LableInput>
      <Lable2>Length
      <LableInput2 type="range" min="1" max="100" value="10" ></LableInput2>
      </Lable2>
    </PasswordGENStyle>
    
  </FieldValue>
  <OptionField>
    <Title>Options</Title>
    <div>
      <CheckBoxSelector type="checkbox" checked={Caps} onClick={e=>{setCaps(!Caps)}} />
      <RadioButtonLabel>A-Z</RadioButtonLabel>
    </div>
    <div>
      <CheckBoxSelector type="checkbox" onClick={e=>{setLower(!Lower)}}/>
      <RadioButtonLabel>a-z</RadioButtonLabel>
    </div>
    <div>
      <CheckBoxSelector type="checkbox" onClick={e=>{setNum(!Num)}} />
      <RadioButtonLabel>0-9</RadioButtonLabel>
    </div>
    <div>
      <CheckBoxSelector type="checkbox" onClick={e=>{setSpecial(!Special)}}/>
      <RadioButtonLabel>!@#$%^&*</RadioButtonLabel>
    </div>
    <Buttons>

    <RegenratePasswordButton onClick={()=>{handleRandomPass()}}>Regenrate Password</RegenratePasswordButton>
    <CopyButton onClick={(e)=>{navigator.clipboard.writeText(RandomPass)}}>Copy Password</CopyButton>
    </Buttons>
  </OptionField>
  
  </>
  )
}

export default Password