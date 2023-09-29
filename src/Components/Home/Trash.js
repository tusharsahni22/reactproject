import React, {useState,useEffect} from 'react'
// import { useNavigate } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { LuDatabaseBackup } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import styled from 'styled-components'
import Item from "./Item";
import Edit from "./Edit";
import RestoreWarning from './RestoreWarning';
import { MdDeleteForever } from "react-icons/md";
import { BsGlobeAmericas } from "react-icons/bs";
import { emptyTrash, trashData } from '../services/profileServices';

const TrashDiv = styled.div`

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
const MainHeader = styled.div`
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
const Line = styled.div`
  height: 1.5px;
  background-color: lightgrey;
  margin: 2% 7%;
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


function Trash() {
  const [newItem, setNewItem] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [editObject,setEditObject] = useState([])
  const [dummyData ,setDummyData] =useState([])
  const [filteredData ,setFilteredData] =useState([])
  const [showRestore, setShowRestore] = useState(false);
  const [reload,setReload] =useState(true)
  const [id,setId] =useState("")
  const [refresh,setRefresh] =useState(false)
  
//   let navigate = useNavigate();

  useEffect(()=>{
    trashData().then((result)=>{
      setDummyData(result.data) 
      setFilteredData(result.data)
      
    }).catch((err)=>{
      console.log(err)
    })
  },[refresh])
    

  const handleEmptyBin = ()=>{
    emptyTrash().then((result)=>{
        console.log("trash",result)
        setRefresh(!refresh)
    }).catch((err)=>{
        console.log("trash",err)
    })
  }
  const handleReload =()=>{
    // navigate("/")
    setReload(!reload)
  }
  const handleRestore = (id)=>{
    setId(id)
    setShowRestore(!showRestore)
  
  }
    const handleEditItem = (_id)=>{
    setEditItem(!editItem)
    const object = dummyData.find((e)=>{
      return e._id ===_id}) 
      setEditObject(object) 
    }
  

  return (
    <TrashDiv>
        <Head>
        Deleted Items
        <Button onClick={() => {handleEmptyBin()}}>
          <MdDeleteForever /> Empty Bin
        </Button>
      </Head>
      
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
        <LuDatabaseBackup onClick={()=>{handleRestore(e._id)}} />
        <div></div>
        </All>
        <Line />
        {showRestore ? <RestoreWarning setData={setShowRestore} _id={id} name={"it"} setReload={handleReload}/>:""}
      </DataOfUser>
       ))}

      {newItem ? <Item sendData={setNewItem} setReload={handleReload}/> : " "}
      {editItem ? <Edit sendData={setEditItem} apiData={editObject} /> : " "}
      </TrashDiv>
  )
}

export default Trash