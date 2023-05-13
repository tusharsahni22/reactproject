import React from 'react'
import styled from 'styled-components'

const Wrapper =styled.div`
width: 100%;
padding: 10px;
`;
const Heading =styled.div`

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
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
`;
const Lable = styled.div`
    color: #333;
    margin: 7px 0; 
`;
const Submit = styled.div`
background-color: #175ddc;
border-color: #175ddc;
color: #fff;
cursor: pointer;
width: 158px;
height: 32px;
box-sizing: border-box;
overflow: hidden;
outline: none;
opacity: 1;
margin: 30px 0;
text-align: center;
padding: 6px;
border: 0px;
`;

function Profile() {
  return (
    <Wrapper>
        <Heading>My Account </Heading>
        <Line/>
        <div>
            <Lable>Name</Lable>
            <Input/>
        </div>
        <div>
            <Lable>Email</Lable>
            <Input/>
        </div>
        <Submit>Save</Submit>
    </Wrapper>
  )
}

export default Profile