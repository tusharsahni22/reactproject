import React from "react";
import styled from "styled-components";
import Header from "../Common/Header";
import Sidebar2 from "../Common/Sidebar2";
import Footer from "../Common/Footer";
import Send from "./Send";


const Div = styled.div`
  display: flex;
`;

function SendComponent() {
  return (
    <div>
      <Header />
      <Div>
        <Sidebar2 />
        <Send/>
      </Div>
      <Footer/>
    </div>
  );
}

export default SendComponent;
