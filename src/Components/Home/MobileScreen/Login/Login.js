import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import {useNavigate } from "react-router-dom";
import {MdArrowBack} from "react-icons/md";
import {BiDotsVerticalRounded} from "react-icons/bi";
import { MdOutlineLogin , MdOutlineDeleteSweep } from "react-icons/md";
import { userData } from '../../../services/profileServices';


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
const First =styled.div`
display:flex;
background-color: rgb(48,48,48);
`;
const Items = styled.div`
  color: skyblue;
  font-size: 15px;
  margin: 10px 5px 15px 5px;
`;
const UserDetails = styled.div`
  display: flex;
  justify-content:space-between;
  padding: 9px 15px 0px 15px;
  background-color: rgb(48,48,48);
`;
const LoginDiv = styled.div`
  margin: 0px 15px 10px;
  background-color: rgb(48,48,48);
`;
function Login() {
  const [dummyData ,setDummyData] =useState([])
  let navigate = useNavigate()
  useEffect(()=>{
    userData().then((result)=>{
      setDummyData(result.data) 
      
    }).catch((err)=>{
      console.log(err)
    }) 
  },[])  
  return ( 
  <Wrapper>
      <Heads>
         <MdArrowBack style={{height: "25px", width: "25px",backgroundColor: "black"}} onClick={()=>(navigate("/"))} />
        <Title> Login </Title>
        <Div>  
        <BiDotsVerticalRounded style={{height: "30px", width: "25px",backgroundColor: "black"}}/>        
         </Div>
      </Heads> 
      <Items>Item</Items>  
      {dummyData?.map((e)=>(
        e.type==="login"?
      <UserDetails>    
        <First>
            <MdOutlineLogin  style={{backgroundColor:"rgb(48,48,48)"}} 
            onClick={()=>{navigate("/ViewItem")}}/>
            <LoginDiv onClick={()=>{navigate("/ViewItem",{ state: { 
              type: e.type,
              name: e.name,
              username:e.username,
              password:e.password,url:e.url,notes:e.notes
            } 
          })}}>{e.name}</LoginDiv>
        </First>      
            <MdOutlineDeleteSweep style={{backgroundColor:"rgb(48,48,48)"}}/>
      </UserDetails>:""  
      ))}
  </Wrapper>  
  )
}

export default Login