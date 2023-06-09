import React from "react";
import Header from "../Common/Header";
import styled from "styled-components";
import Profile from "./Profile";
import Footer from "../Common/Footer"

const Div = styled.div`
  padding: 20px 15%;
  @media(max-width:1024px){
    padding:20px 7%
  }
  @media (max-width: 767px){
    padding: 0%;
  }
`;

function ProfileComponent() {
  return (
    <div>
      <Header />
      <Div>  
        <Profile/>
      </Div>
 
      <Footer/>
    </div>
  );
}

export default ProfileComponent;
