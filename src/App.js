import './App.css';
import Login from './Components/login';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Login/>}/>  
  //     <Route path="/home" element={<Home/>}/>  
  //     <Route path="/signup" element={<SignUp/>}/>                 
  //   </Routes>
  // </BrowserRouter>

  <Home/>
  );
}

export default App;
