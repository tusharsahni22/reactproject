import React from "react";
import Tools from "./Tools";
import Header from "../Common/Header";
import Sidebar from "../Common/Sidebar";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  padding: 0 15%;
`;

function ToolComponent() {
  return (
    <div>
      <Header />
      <Div>
        <Sidebar />
        <Tools />
      </Div>
    </div>
  );
}

export default ToolComponent;
