import React from 'react'
import styled from 'styled-components'
import { IoIosClose } from "react-icons/io";

function DeleteWarning(props) {
    const handleDelete =()=>{
        
        props.setData(false)
    }
    const Wrapper =styled.div`
    height: 220px;
    width: 500px;
    overflow-y: hidden;
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
    `;
    const Head =styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    `;
    const Title =styled.div`
    font-size:30px;
    font-weight: bold;
    margin: 10px;
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
    <Head>
    <Title>Delete Confirmation</Title>
    <IoIosClose onClick={()=>{props.setData(false)}}  style={{height:"25px",width:"25px",margin:"15px 10px",Hover:"cursor"}}/>
    </Head>
    <Line></Line>
    <Warning>Are you sure you want to delete the '{props.name}' ?</Warning>
    <Line></Line>
    <Buttons>
    <Cancel onClick={()=>{props.setData(false)}}>Cancel</Cancel>
    <Delete onClick={handleDelete}>Delete</Delete>
    </Buttons>

    </Wrapper>
  )
}

export default DeleteWarning