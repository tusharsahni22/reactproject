import React from 'react'
import styled from 'styled-components';
import {useNavigate } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {BiDotsVerticalRounded} from "react-icons/bi";
import { MdOutlineLogin } from "react-icons/md";

const Wrapper = styled.div`
  width: 100%;
`;

const Heads = styled.div`
@media (max-width: 767px){
display: flex;
justify-content: space-between;
background-color: black;
height: 30px;
padding: 15px 12px 15px 15px
}
@media (min-width: 768px){
  display: none;
}
`;

const Div = styled.div`
@media (max-width: 767px){
display: flex;
justify-content: space-between;
background-color: rgb(34 34 34);
}
`;
const Title = styled.div`
@media (max-width: 767px){
background-color: black;
font-size: 20px;
}
`;
const Items = styled.div`
  color: skyblue;
  font-size: 15px;
  margin: 10px 5px 15px 5px;
`;
const UserDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 9px 0 0px 15px;
  background-color: rgb(48,48,48);
`;
const LoginDiv = styled.div`
  margin: 0px 15px 10px;
  background-color: rgb(48,48,48);
`;
function Login() {
  let navigate = useNavigate()
  return ( 
  <Wrapper>
      <Heads>
         <AiOutlineArrowLeft style={{height: "25px", width: "25px",backgroundColor: "black"}} onClick={()=>(navigate("/"))} />
        <Title> Login </Title>
        <Div>  
        <BiDotsVerticalRounded style={{height: "30px", width: "25px",backgroundColor: "black"}}/>        
         </Div>
      </Heads> 
      <Items>Item</Items>  
      <UserDetails>
            <MdOutlineLogin  style={{backgroundColor:"rgb(48,48,48)"}} 
            onClick={()=>{navigate("/ViewItem")}}/>
            <LoginDiv onClick={()=>{navigate("/ViewItem")}}>Instagram</LoginDiv>
          </UserDetails>  
  </Wrapper>  
  )
}

export default Login