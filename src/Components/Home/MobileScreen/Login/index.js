import React from "react";
import Header from "../../../Common/Header";
import styled from "styled-components";
import Login from "./Login";
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

function LoginComponent(){
    
  return (
    <div>
      <Header />
      <Div>

        <Login />
      </Div>
      <Footer/>
    </div>
  );
}

export default LoginComponent;
