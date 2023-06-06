import React from "react";
import {useNavigate } from "react-router-dom";
import styled from "styled-components";
import {AiFillLock} from "react-icons/ai";
import {RiSendPlaneFill} from "react-icons/ri";
import {MdRestartAlt} from "react-icons/md";
import {RiSettings2Line} from "react-icons/ri";

const Wrapper = styled.div`
  background-color: rgb(23, 93, 220);
`;

const Head = styled.div`
  display: flex;
  padding: 0% 15%;
  justify-content: space-between;
  height: 57px;
  opacity: 1;
  background-color: rgb(23, 93, 220);
  border-bottom: 0px;
  @media( max-width:1024px)
  {
    padding: 0 7%;
  }
  @media( max-width:767px)
  {
    display:none;
    
  }
`;
const Text = styled.div`
  padding: 20px 0 0 0;
  cursor: pointer;
  margin: 0px 20px 0 0;
  overflow: hidden;
  font-size: 13px;
  font-weight: 600;
  text-transform: none;
  text-align: left;
  letter-spacing: 0px;
  line-height: 17px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  color: rgb(186, 207, 245);
  font-family: "Nanum Gothic";
  &:hover{ font-weight: bold; color:white;}

  @media (max-width:768px){
   padding: 0%;
   font-size: 18px;
  };
`;

const Profile = styled.div`
  display: flex;
  @media (max-width: 767px){
  justify-content: space-evenly;
  width: 100%;
}
`;
const ProfilePic = styled.img`
   vertical-align: middle;
  width: 40px;
  height: 40px;
  padding: 8px 0;
  border-radius: 50%;
  cursor: pointer;
`;

const Mobile = styled.div`
position:absolute;
bottom:0px;
width:100%;
display: flex;
justify-content: space-between;
height: 57px;
opacity: 1;
background-color: rgb(34,34,34);
border-bottom: 0px;
@media (min-width:768px){
  display: none;

}
`;
const Line1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
const Line2 = styled.div`

`;
const Line3 = styled.div`

`;
const Line4 = styled.div`

`;
const style={color: 'white',fontSize: '150%'};

function Header() {
  let navigate = useNavigate()
  return (
    <Wrapper>
      <Head>
        <Profile>
          <Text onClick={()=>{navigate("/")}}>Vault</Text>
          <Text onClick={()=>{navigate("/send")}}>Send</Text>
          <Text onClick={()=>{navigate("/tools")}}>Tools</Text>
          
        </Profile>
        <Profile>
            <ProfilePic src="./avatar.jpg" onClick={()=>(navigate("/user-profile"))}/>
        </Profile>
      </Head>

      <Mobile>
      
        <Profile>
          <Line1>
        <AiFillLock style={style}/>
          <Text onClick={()=>{navigate("/")}}>My vault</Text>
          </Line1>
          <Line1>
          <RiSendPlaneFill style={style}/>
          <Text onClick={()=>{navigate("/send")}}>Send</Text>
          </Line1>
          <Line1>
            <MdRestartAlt style={style}/>
          <Text onClick={()=>{navigate("/tools")}}>Generator</Text>
          </Line1>
          <Line1>
            <RiSettings2Line style={style}/>
          <Text onClick={()=>(navigate("/user-profile"))}> Settings</Text>
          </Line1>
        </Profile>
             
      </Mobile>
    </Wrapper>
  );
}

export default Header;
