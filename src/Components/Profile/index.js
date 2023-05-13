import React from "react";
import Header from "../Common/Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Profile from "./Profile";
import Footer from "../Common/Footer"

const Div = styled.div`
  display: flex;
  padding: 20px 15%;
`;

function ProfileComponent() {
  return (
    <div>
      <Header />
      <Div>
        <Sidebar />
        <Profile />
      </Div>
      <Footer/>
    </div>
  );
}

export default ProfileComponent;
