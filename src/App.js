import Login from './Components/useless/login';
import Home from './Components/Home';
import SignUp from './Components/useless/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>  
      <Route path="/login" element={<Login/>}/>  
      <Route path="/signup" element={<SignUp/>}/>                 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
