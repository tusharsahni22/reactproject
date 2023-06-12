import React, { useState } from 'react'
import styled from 'styled-components'
import { generate } from '@wcj/generate-password';



const CheckBoxSelector = styled.input`
cursor: pointer;
@media (max-width:767px){
  display:none;
}
`;
const OptionField = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px){
    background-color: rgb(48 48 48);
  }
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
    /* background-color: rgb(23, 93, 220); */
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

// const FieldValue = styled.div`
//   display: flex;
// `;
const PasswordGENStyle = styled.div`
  padding: 0 10px 0 0;
  @media (max-width:767px){
    display: none;
  }
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
    background-color: rgb(48 48 48);
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
     display: none;
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
const LenghtDiv = styled.div`
display: none;
@media (max-width: 767px){
display: flex;
 background-color: rgb(48 48 48);
}
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
  margin: 2% 1%;
  font-weight: 200;
  font-family: "Nanum Gothic";
  background-color: rgb(48 48 48);
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

const Slider= styled.div`
@media (max-width: 767px){
display: flex;
justify-content: space-between;
padding: 0 10px 0 0;
 background-color: rgb(48 48 48);
}
@media (min-width: 768px){
  display: none;
}
`;
const LableInput2 = styled.input`
@media (max-width: 767px){
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  transition: opacity .2s;
  margin: auto;
  background-color: rgb(48 48 48);
}
  @media (min-width: 768px){
    display: none;
  }
`;

const Lenghtt = styled.div`
  font-size: 12px;
  font-weight: 200;
  font-family: "Nanum Gothic";
  margin: auto 16px;

`;


const ToggleSwitch = styled.label`
  background-color: rgb(48 48 48);
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  @media (min-width:768px){
    display:none;
  }
`;
const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`; 
const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  height: 25px;
  width: 53px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;
const ToggleInputChecked = styled(ToggleInput)`
&:checked + ${ToggleSlider} {
   background-color: #ff6a00;
 }

&:checked + ${ToggleSlider}:before {
   transform: translateX(26px);
 }
`;
const ToggleButtons = styled.div`
@media (max-width: 767px){
  display: flex;
  justify-content: space-between;
  background-color: rgb(48 48 48);
}
`;
const Line = styled.div`
height: .5px;
background-color: lightgrey;
@media (max-width: 768px){  
  height: 2px;
background-color: rgb(34 34 34);
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
  {/* <FieldValue> */}
    <PasswordGENStyle>
      <Lable>Length</Lable>
      <LableInput value={Lenght} onChange={(e)=>{setLength(e.target.value)}}></LableInput>
      </PasswordGENStyle>
      
      <Slider>
      <Lable2>Length</Lable2>
      <LenghtDiv>
      <Lenghtt> {Lenght}</Lenghtt>
      <LableInput2 type="range" min="1" max="100" value= {Lenght} onChange={(e)=> {setLength(e.target.value)}} ></LableInput2>
      </LenghtDiv>
      </Slider>   
  {/* </FieldValue> */}
  <OptionField>
    <Title>Options</Title>
    <Line/>
    <ToggleButtons>
      <CheckBoxSelector type="checkbox" checked={Caps} onClick={e=>{setCaps(!Caps)}} />
      <RadioButtonLabel>A-Z</RadioButtonLabel>
      <ToggleSwitch>
    <ToggleInputChecked type ="checkbox" checked={Caps} onClick={e=>{setCaps(!Caps)}} />
    <ToggleSlider/>
    </ToggleSwitch>
    </ToggleButtons>
    <Line/>
    <ToggleButtons>
      <CheckBoxSelector type="checkbox" onClick={e=>{setLower(!Lower)}}/>
      <RadioButtonLabel>a-z</RadioButtonLabel>
      <ToggleSwitch>
    <ToggleInputChecked type ="checkbox" checked={Lower} onClick={e=>{setLower(!Lower)}} />
    <ToggleSlider/>
    </ToggleSwitch>
    </ToggleButtons>
    <Line/>
    <ToggleButtons>
      <CheckBoxSelector type="checkbox" onClick={e=>{setNum(!Num)}} />
      <RadioButtonLabel>0-9</RadioButtonLabel>
      <ToggleSwitch>
    <ToggleInputChecked type ="checkbox" checked={Num} onClick={e=>{setNum(!Num)}} />
    <ToggleSlider/>
    </ToggleSwitch>
    </ToggleButtons>
    <Line/>
    <ToggleButtons>
      <CheckBoxSelector type="checkbox" onClick={e=>{setSpecial(!Special)}}/>
      <RadioButtonLabel>!@#$%^&*</RadioButtonLabel>
      <ToggleSwitch>
    <ToggleInputChecked type ="checkbox" checked={Special} onClick={e=>{setSpecial(!Special)}} />
    <ToggleSlider/>
    </ToggleSwitch>
    </ToggleButtons>
    <Line/>
    <Buttons>

    <RegenratePasswordButton onClick={()=>{handleRandomPass()}}>Regenrate Password</RegenratePasswordButton>
    <CopyButton onClick={(e)=>{navigator.clipboard.writeText(RandomPass)}}>Copy Password</CopyButton>
    </Buttons>
  </OptionField>
  
  </>
  )
}

export default Password