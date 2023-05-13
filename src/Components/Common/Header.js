import React from "react";
import {useNavigate } from "react-router-dom";
import styled from "styled-components";

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
`;
const Text = styled.div`
  padding: 20px 0 0 0;
  cursor: pointer;
  margin: 0px 20px;
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
`;

const Profile = styled.div`
  display: flex;
`;
const ProfilePic = styled.img`
   vertical-align: middle;
  width: 40px;
  height: 40px;
  padding: 8px 0;
  border-radius: 50%;
`;

function Header() {
  let navigate = useNavigate()
  return (
    <Wrapper>
      <Head>
        <Profile>
          <Text onClick={()=>{navigate("/")}}>Vault</Text>
          <Text onClick={()=>{navigate("/send")}}>Send</Text>
          <Text onClick={()=>{navigate("/tools")}}>Tools</Text>
          <Text>Report</Text>
        </Profile>
        <Profile>
            <ProfilePic src="./avatar.jpg" onClick={()=>(navigate("/user-profile"))}/>
        </Profile>
      </Head>
    </Wrapper>
  );
}

export default Header;
