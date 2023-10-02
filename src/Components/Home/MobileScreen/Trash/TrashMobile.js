import React,{useEffect,useState}from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md"
import DeleteWarning from "../../DeleteWarning"
import { AiOutlineCreditCard } from "react-icons/ai";
import { LuDatabaseBackup } from "react-icons/lu";
import { trashData } from "../../../services/profileServices";
import { BsGlobeAmericas } from "react-icons/bs";


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
const Card = styled.div`
 display: flex;
  justify-content:space-between;
  padding: 9px 15px 0px 15px;
  background-color: rgb(48,48,48);
`;
const Login = styled.div`
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



function Trash() {
    let navigate = useNavigate()
    const [trashedData ,setTrashedData] =useState([])
    const [showDelete ,setShowDelete] =useState(false)
    const [showEmptyBin ,setShowEmptyBin] =useState(false)
    const [reload,setReload] =useState(true)
    
    useEffect(()=>{
      trashData().then((result)=>{
        setTrashedData(result.data) 
        
      }).catch((err)=>{
        console.log(err)
      }) 
    },[])
    const handleRestore = ()=>{
      setShowDelete(!showDelete)
      }
    const handleEmptyBin = ()=>{
      setShowEmptyBin(!showEmptyBin)
    }
    const handleReload =()=>{
        setReload(!reload)
        navigate("/")
      }
  return (
    <Wrapper>
        <Heads>
       <MdArrowBack style={{height: "25px", width: "25px",backgroundColor: "black"}} onClick={()=>(navigate("/"))} />
      <Title> Trash </Title>
      <Div>  
      <MdDeleteForever style={{height: "30px", width: "25px",backgroundColor: "black"}} onClick={()=>{handleEmptyBin()}}/>
            
       </Div>
    </Heads> 
    <Items>Items</Items>

    {trashedData?.map((e)=>(
      e.type==="card"?      
      <Card>
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
            <LuDatabaseBackup onClick={()=>handleRestore()} style={{backgroundColor:"rgb(48,48,48)"}}/>
            {showDelete?<DeleteWarning setData={setShowDelete} _id={e._id} do={"Restore"} setReload={handleReload}/>:""}
        </Card>:
        <Login>
        <First>
          <BsGlobeAmericas  style={{backgroundColor:"rgb(48,48,48)"}}
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
            })}}>{e.name}</LoginDiv>
             </First>      
            <LuDatabaseBackup onClick={()=>handleRestore()} style={{backgroundColor:"rgb(48,48,48)"}}/>
            {showDelete?<DeleteWarning setData={setShowDelete} _id={e._id} do={"Restore"} setReload={handleReload}/>:""}
            {showEmptyBin?<DeleteWarning setData={setShowEmptyBin} _id={e._id} name={e.bankName} do={"EmptyBin"} setReload={handleReload}/>:""}
        </Login>
        
    ))}  

    </Wrapper>
  )
}

export default Trash