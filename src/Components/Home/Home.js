import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";
import { BsGlobeAmericas } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Item from "./Item";
import Edit from "./Edit";
import DeleteWarning from "./DeleteWarning";
import { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FiPower } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userData } from "../services/profileServices";
import { doLogout } from "../auth";
import Trash from "./Trash";
const Container = styled.div`
  width: 100%;
`;

const MainHeader = styled.div`
  margin: 20px 10px 0 10px;
  padding-top: 20px;
  margin-top: 10px;
  @media (max-width: 767px) {
    display: none;
  }
`;
const DataOfUser = styled.div`
  margin: 20px 10px 0 10px;
  padding-top: 20px;
  margin-top: 10px;
  @media (max-width: 767px) {
    display: none;
  }
`;
const All = styled.div`
display: flex;
justify-content: space-between;
`;
const Name = styled.div`
cursor:pointer;
width: 200px;
`;
const Iconns = styled.div``;

const Owner = styled.div`
width:50px;
`;

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
  margin: 2% 7%;
  @media (max-width: 767px) {
    display: none;
  }
`;
const Mobile = styled.div`
  @media (max-width: 767px) {
    display: flex;
    font-size: 20px;
    padding: 10px;
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

const Home = styled.div`
`;

 
function Front({filter,showTrash,refreshByFilter}) {
  const [editObject,setEditObject] = useState([])
  const [dummyData ,setDummyData] =useState([])
  const [filteredData ,setFilteredData] =useState([])
  const [newItem, setNewItem] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [reload,setReload] =useState(0)
  const [id,setId] =useState("")
  
  useEffect(()=>{
    userData().then((result)=>{
      setDummyData(result.data) 
      setFilteredData(result.data)
      
    }).catch((err)=>{
      console.log(err)
    }) 
    console.log("first from effect")
  },[reload,refreshByFilter])

  const filterr = ()=>{
    if(filter===""){
      setFilteredData(dummyData)
    }else{
    const data=dummyData.filter((e)=>(
      e.type===`${filter}`))
      setFilteredData(data)
  }}

  useEffect(()=>{
    filterr()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[filter])
  
  
const handleLogout = ()=>{
    doLogout()
}

const handleShowDelete = (id)=>{
  setId(id)
  setShowDelete(!showDelete)

}
  const handleEditItem = (_id)=>{
  setEditItem(!editItem)
  const object = dummyData.find((e)=>{
    return e._id ===_id}) 
    setEditObject(object) 
  }
  const handleNewItem = ()=>{
    setNewItem(!newItem);
  }

  const handleReload =()=>{
    setReload((reload)=>reload+1)
    navigate("/")
  }
  let navigate = useNavigate();

  return (
    <Container>
      {showTrash?<Trash/>:
      <Home>
      <Head>
        All vaults
        <Button onClick={() => {handleNewItem()}}>
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
            <BsGlobeAmericas style={{backgroundColor:"rgb(48,48,48)"}}
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
          <BsTrash3 onClick={()=>{navigate("/trash")}} style={{backgroundColor:"rgb(48,48,48)"}}/> 
            <CardDiv onClick={()=>{navigate("/trash")}}>Trash</CardDiv>
          </UserDetails>
          
        </VaultDiv>
      </MobileVault>
      <MainHeader>
        <All>
        <div></div>
        <Iconns>All </Iconns>
        <Name>Name </Name>
        <Owner> Owner </Owner>
        <BiDotsVerticalRounded style={{height:"0px"}}/>
        <div></div>
        </All>
        <Line />
      </MainHeader>

      {filteredData?.map((e)=>(    
      <DataOfUser>
        <All>
        <div></div>
        { <Iconns>{e.type==="login"?<BsGlobeAmericas/>: <CiCreditCard1/> } </Iconns> }
        <Name onClick={()=>{handleEditItem(e._id)}}>{e.bankName || e.name} </Name>
        <Owner> Me </Owner>
        <MdDeleteSweep style={{height: '20px',width:'20px'}} onClick={()=>{handleShowDelete(e._id)}} />
        <div></div>
        </All>
        <Line />
        {showDelete? <DeleteWarning setData={setShowDelete} _id={id} name={"it"} do={"Delete"}  setReload={handleReload}/>:""}
      </DataOfUser>
       ))}

      {newItem ? <Item sendData={setNewItem} setReload={handleReload}/> : " "}
      {editItem ? <Edit sendData={setEditItem} apiData={editObject} /> : " "}
      </Home>}
    </Container>
  );
}

export default Front;
