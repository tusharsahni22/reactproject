import React from 'react'
import styled from 'styled-components'
import { IoIosClose } from "react-icons/io";
import { restore } from '../services/profileServices';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from "react-toastify";

function RestoreWarning(props) {
  
    let navigate = useNavigate()
  
    const handleRestore =()=>{ 
      let _id = {id:props._id}
      console.log("log",_id)
      restore(_id).then((result)=>{
        if(result.status === 200) {
          toast.success("Login Sucess")           
        }
      props.setReload()
      props.setData(false)
      navigate("/")
      
    })}
  
    const Wrapper =styled.div`
    height: 220px;
    width: 500px;
    overflow-y: hidden;
    overflow-x: hidden;
    background-color: white;
    top: 11%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    position: fixed;
    border: 1px solid;
    border-radius: 5px;
    @media (max-width:768px){
      width: 350px;
      top: 35%;
    }
    `;
    const Head =styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    `;
    const Title =styled.div`
    font-size:25px;
    font-weight: bold;
    margin: 10px;
    @media (max-width:767px){
    font-size: 15px;
    padding: 10px;
    font-weight:100px
    }
    `;
    const Warning =styled.div`
    height:50px;
    background-color: #F8D7DA;
    color: #BF6F59;
    margin: 20px;
    padding: 10px 0 0 10px;
    `;
    const Line =styled.div`
    background-color:black;
    height: 0.5px;
    `;
    const Buttons =styled.div`
    display:flex;
    justify-content: flex-end;
    padding: 16px;
    `;
    const Cancel =styled.div`
    background-color: white;
    color: grey;
    border: 1px solid lightgray;
    font-size: 15px;
    border-radius: 5px;
    padding: 7px;
    height: fit-content;
    margin: 0 10px;
    cursor: pointer;
    /* &:hover{ background-color:lightgrey; color:black;} */
`;
    const Delete =styled.div`
    background-color: #DC3545;
    color: white;
    border: 1px solid lightgray;
    font-size: 15px;
    border-radius: 5px;
    padding: 7px;
    height: fit-content;
    cursor: pointer;
    /* &:hover{ background-color:lightgrey; color:black;} */
    `;
  return (
    <Wrapper>
    <ToastContainer/>
    <Head>
    <Title>Restore Confirmation</Title>
    <IoIosClose onClick={()=>{props.setData(false)}}  style={{height:"25px",width:"25px",margin:"15px 10px",Hover:"cursor"}}/>
    </Head>
    <Line></Line>
    <Warning>Are you sure you want to restore it ?</Warning>
    <Line></Line>
    <Buttons>
    <Cancel onClick={()=>{props.setData(false)}}>Cancel</Cancel>
    <Delete onClick={handleRestore}>Restore</Delete>
    </Buttons>

    </Wrapper>
  )
}

export default RestoreWarning