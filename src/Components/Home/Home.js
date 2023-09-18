import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsGlobeAmericas } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Item from "./Item";
import Edit from "./Edit";
import { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineLogin } from "react-icons/md";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FiPower } from "react-icons/fi";
// import { BsSearch } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userData } from "../services/profileServices";
import { doLogout } from "../auth";

const Container = styled.div`
  width: 100%;
`;

const Input = styled.input`
  margin-left: 10px;
  height: 15px;
  border: none;
  outline: none;
  border: 0 white;
  background-color: #24195f;
`;
const MainHeader = styled.div`
  margin: 20px 10px 0 10px;
  padding-top: 20px;
  margin-top: 10px;
  @media (max-width: 767px) {
    /* background-color: rgb(48,48,48);
    color: white; */
    display: none;
  }
`;
const DataOfUser = styled.div`
  margin: 20px 10px 0 10px;
  padding-top: 20px;
  margin-top: 10px;
  @media (max-width: 767px) {
    /* background-color: rgb(48,48,48);
    color: white; */
    display: none;
  }
`;
const All = styled.div`
display: flex;
justify-content: space-between;
`;
const Name = styled.div`
cursor:pointer;
`;
const Iconns = styled.div``;
const Owner = styled.div``;

const Head = styled.div`
  display: flex;
  font-size: 25px;
  margin: 20px 0 10px 20px;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: none;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: #1466e9;
  color: white;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  padding: 7px;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;
const Line = styled.div`
  height: 1.5px;
  background-color: lightgrey;
  margin: 2%;
  @media (max-width: 767px) {
    display: none;
  }
`;
const Mobile = styled.div`
  @media (max-width: 767px) {
    display: flex;
    font-size: 20px;
    padding: 10px;
    /* margin: 20px 0 10px 20px; */
    justify-content: space-between;
    background-color: black;
    color: white;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const MobileVault = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
const H1 = styled.div`
  color: skyblue;
  font-size: 15px;
  margin: 10px 5px 15px 5px;
`;
const VaultDiv = styled.div`
  margin-top: 5px;
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

const CardDiv = styled.div`
  margin: 0px 15px 10px;
  background-color: rgb(48,48,48);
`;
// const ProfilePic = styled.img`
//   vertical-align: middle;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   cursor: pointer;
// `;

 
function Front() {
  const [dummyData ,setDummyData] =useState([])
  const [editObject,setEditObject] = useState([])
  const [newItem, setNewItem] = useState(false);
  const [editItem, setEditItem] = useState(false);

  useEffect(()=>{
    userData().then((result)=>{
      setDummyData(result.data) 
      
    }).catch((err)=>{
      console.log(err)
    }) 
  },[newItem])
  const handleLogout = ()=>{
    doLogout()
}

  const handleEditItem = (_id)=>{
  setEditItem(!editItem)
  const object = dummyData.find((e)=>{
    return e._id ===_id}) 
    setEditObject(object) 
  }
  let navigate = useNavigate();

  return (
    <Container>
      <Head>
        All vaults
        <Button
          onClick={() => {
            setNewItem(!newItem);
          }}
        >
          <AiOutlinePlus /> New item
        </Button>
      </Head>
      <Mobile>
        <FiPower style={{ height: "25px", width: "25px",backgroundColor: "black" , marginTop: "10px" }} 
        onClick={()=>{handleLogout()}}/>

        <div style={{ marginTop: "9px", backgroundColor: "black" }}>
          My vault
        </div>
        <div style={{ marginTop: "10px", backgroundColor: "black" }}>
        <AiOutlinePlus style={{height: "25px", width: "25px",backgroundColor: "black"}} onClick={()=>{navigate("/newItem")}}/> </div>
      </Mobile>
      <MobileVault>
        <H1>Types</H1>
        <VaultDiv>
          <UserDetails>
            <MdOutlineLogin style={{backgroundColor:"rgb(48,48,48)"}}
             onClick={() => {navigate("/LoginDetails")}}/>
            <LoginDiv  onClick={() => {navigate("/LoginDetails")}}>Login</LoginDiv>
          </UserDetails>
          <UserDetails>
            <AiOutlineCreditCard  style={{backgroundColor:"rgb(48,48,48)"}}
            onClick={() => {navigate("/Cards")}}/>
            <CardDiv onClick={() => {navigate("/Cards")}}>Card</CardDiv>
          </UserDetails>
          <H1> Trash </H1>
          <UserDetails>
          <BsTrash3 /> 
            <CardDiv>Trash</CardDiv>
          </UserDetails>
          
        </VaultDiv>
      </MobileVault>
      <MainHeader>
        <All>
        <Input type="checkbox" />
        <Iconns>All </Iconns>
        <Iconns>Name </Iconns>
        <Owner> Owner </Owner>
        <BiDotsVerticalRounded />
        </All>
        <Line />
      </MainHeader>

      {dummyData?.map((e)=>(    
      <DataOfUser>
        <All>
        <Input type="checkbox" />
        { <Iconns>{e.type==="login"?<BsGlobeAmericas/>: <CiCreditCard1/> } </Iconns> }
        <Name onClick={()=>{handleEditItem(e._id)}}>{e.bankName || e.name} </Name>
        <Owner> Me </Owner>
        <BiDotsVerticalRounded />
        </All>
        <Line />
      </DataOfUser>
       ))}

      {newItem ? <Item sendData={setNewItem} /> : " "}
      {editItem ? <Edit sendData={setEditItem} apiData={editObject} /> : " "}
      
    </Container>
  );
}

export default Front;
