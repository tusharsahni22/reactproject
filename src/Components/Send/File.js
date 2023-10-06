import React from 'react'
import styled from 'styled-components';
import { GrFormClose } from "react-icons/gr";

const Container = styled.div`
  height: 420px;
  width: 800px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;
  top: 10%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  position: fixed;
  border: 1px solid;
  border-radius: 5px;
  @media(max-width: 1024px){
    width: 600px;
    overflow: hidden;
  }
  @media (max-width:767px){
    width: 400px;
    overflow: hidden;
    top: 15%;
    display: none;
  }
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

const Text = styled.textarea`
width: 750px;
height: 150px;
margin: 5px;
border-radius: 4px;
border: 2px solid lightgray;
@media(max-width:1024px)
{
  width: 550px;
}
@media (max-width:767px){
  width: 378px;
}
`;
const Footer = styled.div`
display: flex;
position: sticky;
bottom: 0;
width: 100%;
border: 1px solid lightgrey;
background-color: white;
height: 15px;
padding: 20px 10px;
`;

const Button2 = styled.button`
background-color: rgb(23, 93, 220);
color: white;
border: none;
font-size: 15px;
border-radius: 5px;
padding: 7px;
height: fit-content;
margin: -5px 4px;
cursor: pointer;
&:hover{ background-color:darkblue;}
`;
const Button3 = styled.div`
background-color: white;
color: gray;
border: 1px solid lightgray;
font-size: 15px;
border-radius: 5px;
padding: 7px;
height: fit-content;
margin: -5px 4px;
cursor: pointer;
&:hover{ background-color:lightgrey; color:black;}

`;

function File(props) {
  const handleClose = () => {
 
    props.sendData(false);
  };
  return (
    <Container>
      <Position>
      <Head>
        <div>NEW SEND</div>
        <div>
          <GrFormClose
            onClick={() => {
              handleClose();
            }}
          />
        </div>
      </Head>
      <Line />
      </Position>
      <Pannel>
       
      <Title>Name</Title>
      <Button type="text" placeholder=""></Button>
      <P> A friendly name to describe this Send. </P>
      <Title>Text </Title>
        <Text type= "text" placeholder='' > </Text>
      </Pannel>
      <Footer>
        <Button2> Save</Button2>
        <Button3 onClick={() => {
              handleClose();
            }}> Cancel</Button3>
        
      </Footer>

      </Container>
  
  )
}

export default File;