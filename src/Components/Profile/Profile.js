import {React , useState, useEffect}from 'react'
import styled from 'styled-components'
import Sidebar from "./Sidebar";
import PrivacyComponent from "./Privacy"
import { doLogout } from '../auth';
import { toast,ToastContainer} from 'react-toastify';
import { changeProfile, getUser } from '../services/profileServices';

const Account = styled.div`
width: 100%;
padding: 10px;
`;
const Wrapper = styled.div`
display: flex;
`;
const Heading =styled.div`
font-size: 20px;

letter-spacing: 0.5px;
`;
const Line = styled.div`
height: 1.5px;
background-color: lightgrey;
margin: 2% 0;

`;
const Input = styled.input`
    background-color: #fbfbfb;
    border-color: #ced4da;
    color: #465057;
    
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.30rem;
`;

const Lable = styled.div`
    color: #333;
    margin: 7px 0; 
    font-weight: 550;
`;

// const Submit = styled.div`
// background-color: #175ddc;
// border-color: #175ddc;
// color: #fff;
// cursor: pointer;
// width: 70px;
// height: 30px;
// box-sizing: border-box;
// overflow: hidden;
// outline: none;
// opacity: 1;
// margin: 15px 0;
// text-align: center;
// padding: 6px;
// border-radius: 5px;
// &:hover{ background-color:darkblue;}
// `;
const Continue = styled.div`
background-color: #175ddc;
border-color: #175ddc;
color: #fff;
cursor: pointer;
width: 80px;
height: 30px;
box-sizing: border-box;
overflow: hidden;
outline: none;
opacity: 1;
margin: 15px 0;
text-align: center;
padding: 6px;
border-radius: 5px;
&:hover{ background-color:darkblue;}
`;
const Heading2 =styled.div`
font-size: 25px;
color: #ec3f3f;
font-weight: 500;
margin: 15px 0;
`;
const LogoutBox = styled.div`
height: max-content;
outline: solid .5px #ec3f3f;
`;
const LogoutButton = styled.button`
margin: 20px;
padding: 5px 15px;
cursor: pointer;
font-size: 14px;
font-weight: bold;
color: #ec3f3f;
background-color: white;
&:hover{ background-color: #ec3f3f;
color: white;
font-weight: bold;
}
`;
const Para = styled.p`
padding: 15px 0 5px 20px;
`;
const Error=styled.div`
color:red;
`;



function ProfileComponent() {
    const [account,setAccount] = useState(true)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [profileDetails,setProfileDetails] = useState({data:{name:"name",email:"email"}})   

   
    useEffect(()=>{
        const handleProfileDetails = ()=>{
            getUser().then((result)=>{
                setProfileDetails(result)
            })
        }
        handleProfileDetails()
    },[])

    const handleLogout = ()=>{
        doLogout()
    }

    const handleChangeEmail= ()=>{
        if(password==="" || email===""){
            setError("Enter all fields")
          }
        else {
            
        let data = {"password":password,"email":email}
        changeProfile(data).then((result)=>{
        if(result.status===201){
          setPassword("")
          setEmail("")
          toast.success("Email changed sucessfully")
        }else{
            setPassword("")
            setEmail("")
          toast.error("invalid password")
        }
        })
     }
    }

  return (
  <Wrapper>
    <Sidebar sendData={setAccount}/>
       {account ?  <Account>
        <ToastContainer/>
        <Heading>My Account </Heading>
        
        <Line/>
        <Lable >Name</Lable>
            <Input value={profileDetails?.data?.name}/>

     
            <Lable>Email</Lable>
            <Input value={profileDetails?.data?.email}/>
     
        {/* <Submit>Save</Submit> */}
        <br/>
      
        <Heading>Change Email </Heading>
        <Line/>
        <Lable>New email</Lable>
            <Input value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
     
        <Lable>Master password </Lable>
            <Input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
     
        <Continue onClick={()=>{handleChangeEmail()}}>Continue</Continue>
        <Error>{error}</Error>

        <br/>
        <Heading2> Danger Zone</Heading2>
        <LogoutBox>
            <Para>Careful, these actions are not reversible!</Para>
            <LogoutButton onClick={()=>{handleLogout()}}> Logout</LogoutButton>
        </LogoutBox>
        </Account> : <PrivacyComponent/>}
        </Wrapper>

  )
}

export default ProfileComponent