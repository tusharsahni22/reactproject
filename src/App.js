import Login from './Components/auth/login';
import Home from './Components/Home';
import SignUp from './Components/auth/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tools from './Components/Tools';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/tools" element={<Tools/>}/>  
      <Route path="/login" element={<Login/>}/>  
      <Route path="/signup" element={<SignUp/>}/>                 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
