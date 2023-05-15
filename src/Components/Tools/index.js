import React from "react";
import Tools from "./Tools";
import Header from "../Common/Header";
import Sidebar from "../Common/Sidebar";
import styled from "styled-components";
import Footer from "../Common/Footer";

const Div = styled.div`
  display: flex;
  padding: 0 15%;
  margin: 20px 0;
`;

function ToolComponent() {
  return (
    <div>
      <Header />
      <Div>
        <Sidebar />
        <Tools />
      </Div>
      <Footer/>
    </div>
  );
}

export default ToolComponent;
