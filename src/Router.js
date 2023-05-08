import Login from './Components/auth/login';
import Home from './Components/Home';
import SignUp from './Components/auth/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tools from './Components/Tools';
import Send from "./Components/Send"


function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/tools" element={<Tools/>}/>  
      <Route path="/login" element={<Login/>}/> 
      <Route path="/SignUp" element={<SignUp/>}/> 
      <Route path="/send" element={<Send/>}/>  
      
    </Routes>
  </BrowserRouter>
  );
}

export default Router;
