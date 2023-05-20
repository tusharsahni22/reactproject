import Login from './Components/auth/login';
import Home from './Components/Home';
import SignUp from './Components/auth/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tools from './Components/Tools';
import Send from "./Components/Send"
import Profile from './Components/Profile';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';



function Router() {
  return (
    <BrowserRouter>
    <Routes>     
      <Route path="/login" element={<Login/>}/> 
      <Route path="/SignUp" element={<SignUp/>}/>      
        
      <Route path="/" element={<PrivateRoutes/>}>
      <Route path="/" element={<Home/>}/> 
      <Route path="/tools" element={<Tools/>}/>  
      <Route path="/send" element={<Send/>}/> 
      <Route path="user-profile" element={<Profile/>}/>
      </Route> 
      
    </Routes>
  </BrowserRouter>
  );
}

export default Router;
