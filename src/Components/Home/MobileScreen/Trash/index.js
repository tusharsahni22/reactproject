import React from "react";
import Trash from "./TrashMobile";
import Header from "../../../Common/Header";
import styled from "styled-components";
import Footer from "../../../Common/Footer";

const Div = styled.div`
  display: flex;
  padding: 0 15%;
  @media(max-width: 1024px)
  {
    padding: 0px 7%;
  }
  @media(max-width: 767px)
  {
    padding: 0;
  }
`;

function index() {
  return (
    <div>
      <Header />
      <Div>
        <Trash/>
      </Div>
      <Footer />
    </div>
  );
}

export default index;
