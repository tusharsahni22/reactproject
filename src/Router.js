import Login from './Components/auth/login';
import Home from './Components/Home';
import SignUp from './Components/auth/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tools from './Components/Tools';
import Send from "./Components/Send"
import Profile from './Components/Profile';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import Cards from './Components/Home/MobileScreen/Cards';
import LoginDetails from './Components/Home/MobileScreen/Login';
import NewItemComponemt from './Components/Home/MobileScreen/NewItem';
import ViewItemComponemt from './Components/Home/MobileScreen/ViewItem';
import Trash from './Components/Home/MobileScreen/Trash';



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
      <Route path="/Cards" element={<Cards/>}/>
      <Route path="/LoginDetails" element={<LoginDetails/>}/>
      <Route path="/newItem" element={<NewItemComponemt/>}/>
      <Route path="/viewItem" element={<ViewItemComponemt/>}/>
      <Route path="/trash" element={<Trash/>}/>
      
      </Route> 
      
    </Routes>
  </BrowserRouter>
  );
}

export default Router;
