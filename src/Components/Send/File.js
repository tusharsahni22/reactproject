import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height: 500px;
  width: 800px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;
  top: 10%;
  left: 20%;
  right: 20%;
  position: fixed;
  border: 1px solid;
  border-radius: 5px;
`;
const Position = styled.div`
position: sticky;
top: 0;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 15px;
  padding: 20px 10px;
`;
const Line = styled.div`
  height: 1px;
  background-color: lightgray;
`;
const Pannel = styled.div`
width: 100%;
  padding-left: 1%;
`;
const Title = styled.div`
  margin: 15px 0 8px 4px;
  font-size: 16px;
  font-weight: bold;
`;
const Button = styled.input`
  margin-left: 4px;
  width: 45%;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  border-radius: 4px;
  border: 2px solid lightgray;
`;
const P = styled.div`
color: grey;
font-size: 15px;
margin-top: 5px;
`;
const Button2 = styled.input`
  margin-left: 4px;

`;
const RadioButton = styled.div`
display: flex;
`;
const P1 = styled.div`
color: grey;
font-size: 15px;
padding-left: 5px;
`;

function File() {
  return (
    <Container>
      <Position>
      <Head>
        <div>NEW SEND</div>
      </Head>
      <Line />
      </Position>
      <Pannel>
       
      <Title>Name</Title>
      <Button type="text" placeholder=""></Button>
      <P> A friendly name to describe this Send. </P>
      <Title>What type of Send is this?</Title>
      <RadioButton>
      <Button2 type="radio" placeholder=""></Button2>
      <P1>File</P1>
      </RadioButton>
      <RadioButton>
      <Button2 type="radio" placeholder=""></Button2>
      <P1>Text</P1>
      </RadioButton>
      </Pannel>

      </Container>
  
  )
}

export default File;