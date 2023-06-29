import React from 'react'
import styled from 'styled-components';
import {useNavigate } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {BsSearch} from "react-icons/bs";

const Heads = styled.div`
@media (max-width: 767px){
width:100%;
display: flex;
justify-content: space-between;
background-color: rgb(34 34 34);
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

function Login() {
  let navigate = useNavigate()
  return (   
      <Heads>
         <AiOutlineArrowLeft onClick={()=>(navigate("/"))} />
        <div> Login </div>
        <Div> 
         <BsSearch/>  
         <BiDotsVerticalRounded/>        
         </Div>
      </Heads>     
  )
}

export default Login