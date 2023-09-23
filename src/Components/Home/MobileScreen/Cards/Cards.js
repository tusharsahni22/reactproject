import React,{useEffect,useState}from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { userData } from '../../../services/profileServices';

const Wrapper = styled.div`
  width: 100%;
`;

const Heads = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    background-color: black;
    height: 30px;
    padding: 15px 12px 15px 15px;
  }
  @media (min-width: 768px) {
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
  justify-content:space-between;
  padding: 9px 15px 0px 15px;
  background-color: rgb(48,48,48);
`;
const LoginDiv = styled.div`
  margin: 0px 15px 10px;
  background-color: rgb(48,48,48);
`;
const First =styled.div`
display:flex;
background-color: rgb(48,48,48);
`;


function Card() {
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
       <AiOutlineArrowLeft style={{height: "25px", width: "25px",backgroundColor: "black"}} onClick={()=>(navigate("/"))} />
      <Title> Card </Title>
      <Div>  
      <BiDotsVerticalRounded style={{height: "30px", width: "25px",backgroundColor: "black"}}/>        
       </Div>
    </Heads> 
    <Items>Item</Items>
    {dummyData?.map((e)=>(
      e.type==="card"?
      <UserDetails>
        <First>
          <AiOutlineCreditCard  style={{backgroundColor:"rgb(48,48,48)"}}
          onClick={()=>{navigate("/ViewItem")}}/>
          <LoginDiv onClick={()=>{navigate("/ViewItem",{ state: { 
              type: e.type,
              cvv:e.cvv,
              cardholder:e.cardholder,
              bankName:e.bankName,
              cardnumber:e.cardnumber,
              expiryMonth:e.expiryMonth,
              expiryYear:e.expiryYear
              } 
            })}}>{e.bankName}</LoginDiv>
             </First>      
            <MdOutlineDeleteSweep/>
        </UserDetails>:""
    ))}  
     
</Wrapper>   
    
  );
}

export default Card;
