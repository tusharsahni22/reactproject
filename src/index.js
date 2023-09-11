import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import styled from "styled-components";

const MobBackgroundColour = styled.div`
@media(max-width:767px){
      background-color:  rgb(34,34,34);
      color:white;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MobBackgroundColour><Router/></MobBackgroundColour>);
