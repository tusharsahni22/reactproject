import React ,{useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {loginService} from "../services/auth_service"
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { doLoggedIn } from ".";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Section1 = styled.div`
  background-color: rgb(44, 122, 223);
  height: 100vh;
  width: 500px;
`;
const Head = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: flex-end;
  margin: 50px 50px 0 0;
`;
const Section2 = styled.div`
  width: 100%;
`;

const AlreadyLogin = styled.span`
  margin: 0 10px 0 0;
`;
const AlreadyLoginSingin = styled.span`
  font-weight: bold;
  cursor: pointer;
`;
const SingUpSection = styled.div`
  padding: 10% 30%;
`;
const Title = styled.div`
  font-size: 49px;
  font-weight: 700;
  text-transform: none;
  text-align: left;
  letter-spacing: 0px;
  line-height: 70px;
  white-space: pre-line;
  opacity: 1;
  visibility: visible;
  color: rgb(39, 43, 48);
  font-family: "Work Sans";
`;
const Fileds = styled.div`
  display: flex;
  flex-direction: column;
`;

const Email = styled.input`
  border: 0px;
  background: transparent;
  padding: 0px 8px;
  margin: 0px;
  outline: none;
  appearance: none;
  opacity: 1;
  color: rgb(82, 83, 84);
  font-family: "Work Sans";
  font-size: 11px;
  letter-spacing: 0px;
  padding: 22px;
  width: 80%;
`;
const SingUpInputStyle = styled.div`
  height: 56px;
  margin: 5px 0;
  overflow: hidden;
  opacity: 1;
  outline: none;
  background-color: rgb(250, 250, 250);
  border-radius: 11px;
  border: 1px solid rgb(192, 192, 192);
`;
const Password = styled.input`
  border: 0px;
  background: transparent;
  padding: 0px 8px;
  margin: 0px;
  outline: none;
  appearance: none;
  opacity: 1;
  color: rgb(82, 83, 84);
  font-family: "Work Sans";
  font-size: 11px;
  letter-spacing: 0px;
  padding: 22px;
  width: 80%;
`;
const SubmitButton = styled.button`
  height: 65px;
  background: rgb(68, 163, 255);
  border-radius: 5px;
  width: 100%;
  margin: 10px 0 0 0;
  border: none;
  color: white;
  cursor: pointer;
`;
const Features = styled.div`
    margin:15px;
    flex-grow: 1;
    overflow: hidden;
    font-size: 13px;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    letter-spacing: 0px;
    line-height: 16px;
    white-space: pre-line;
    opacity: 1;
    visibility: visible;
    color: rgb(255, 255, 255);
    font-family: "Work Sans";
`;
const HeadingFeature = styled.div`
padding: 50% 0 0 0;
text-align: center;
    flex-grow: 1;
    overflow: hidden;
    font-size: 25px;
    font-weight: 700;
    text-transform: none;
    text-align: center;
    letter-spacing: 0px;
    line-height: 35px;
    white-space: pre-line;
    opacity: 1;
    visibility: visible;
    color: rgb(255, 255, 255);
    font-family: "Work Sans";
`;

function Login() {
  let navigate = useNavigate()
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  
  const handleLogin =()=>{
    let data = {
      "email":email,
      "password":password
    }
  
    console.log("log",data)
    loginService(data).then((result)=>{
      console.log("log",result)
      if(result.status === 200) {
        toast.success("Login Sucess")
        doLoggedIn(result.data)
        setPassword("")
        setEmail("")
        navigate("/")
        
      }
      else{toast.error(result.data)
        setPassword("")
        setEmail("")}
    }).catch((e)=>{
      console.log("login err",e)
    })
  }
  return (
    <Wrapper>
      <ToastContainer/>
      <Section1>
        <HeadingFeature>Features</HeadingFeature>
        <Features>Easy</Features>
        <Features>Convenient</Features>
        <Features>Secure</Features>
        <Features>Many More </Features>
      </Section1>
      <Section2>
        <Head>
          <AlreadyLogin>Don't have an Account ?</AlreadyLogin>
          <AlreadyLoginSingin onClick={()=>{navigate("/signup")}}>Sign up</AlreadyLoginSingin>
        </Head>

        <SingUpSection>
          <Title>Login</Title>
          <Fileds>
           
            <SingUpInputStyle>
              <Email  value={email}  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></Email>
            </SingUpInputStyle>
            <SingUpInputStyle>
              <Password type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></Password>
            </SingUpInputStyle>
          </Fileds>
          <SubmitButton onClick={()=>{handleLogin()}}>LogIn</SubmitButton>
        </SingUpSection>
      </Section2>
    </Wrapper>
  );
}

export default Login;



// import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   height: 100vh;
//   background-color: #24195f;
//   padding: 0 25% 0 25%;
// `;

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   background-color: #2d084c;
//   height: 100vh;
//   /* box-shadow: 10px 0px 5px red; */
// `;
// const Name = styled.div`
//   display: flex;
//   margin: 0 20px 10px 20px;
// `;

// const Label = styled.div`
//   margin: 40px 0 0 20px;
//   color: white;
//   font-weight: 900;
//   font-family: Arial, Helvetica, sans-serif;
//   align-content: start;
// `;
// const Input = styled.input`
//   margin: 0 20px 20px 20px;
//   height: 35px;
//   border-radius: 20px;
//   border: 1.25px solid rgb(255 0 137);
//   padding-left: 16px;
//   outline: none;
//   background-color: #24195f;

//   /* box-sizing: border-box; */
// `;
// const Input1 = styled.input`
//   margin: 0 2px 20px 0;
//   width: 50%;
//   height: 35px;
//   border-radius: 20px;
//   border: 1.25px solid rgb(255 0 137);
//   padding-left: 16px;
//   background-color: #24195f;
//   outline: none;
// `;
// const Input3 = styled.input`
//   margin: 0 2px 20px 20px;
//   width: 50%;
//   height: 35px;
//   border-radius: 20px;
//   border: 1.25px solid rgb(255 0 137);
//   padding-left: 16px;
//   background-color: #24195f;
//   outline: none;
// `;

// const Input2 = styled.input`
//   margin: 0px 8px 1px 45px;
//   width: 100%;
//   height: 30px;
//   border: none;
//   outline: none;
//   border: 0 white;
//   background-color: #24195f;
// `;
// const Input4 = styled.input`
//   margin: 10px 20px 0px 20px;
//   height: 15px;
//   border: none;
//   outline: none;
//   border: 0 white;
//   background-color: #24195f;
// `;

// const UserCredential = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;
// const DisplayFlex = styled.div`
//   display: flex;
//   justify-content: start;
//   margin: -10px 0px -3px 8px;
//   width: 100%;
// `;
// const Privacy = styled.div`
// font-size: 14px;
//   color: white;
//   margin: 10px 0 10px 0;
// `;

// const Pwd = styled.div`
//   display: flex;
//   margin: 2px 20px 18px -20px;
//   width: 100%;
//   height: 35px;
//   border-radius: 36px;
//   padding-left: -10px;
//   /* border-color: red ; */
//   border: 1.25px solid rgb(255 0 137);
//   background-color: #24195f;
// `;
// const Button2 = styled.button`
//   border: none;
//   color: grey;
//   margin: 3px 11px 4px 0px;
//   font-size: 14px;
//   background-color: #24195f;
// `;

// const Button = styled.button`
//   background-color: #ff006a;

//   height: 50px;
//   color: white;
//   font-size: 15px;
//   border-radius: 30px;
//   justify-content: center;
//   align-items: center;
//   font-weight: 900;
//   margin: 10px 20px 0 20px;
// `;

// function SignUp() {
//   return (
//     <Container>
//       <Card>
//         <Label> Sign Up</Label>
//         <UserCredential>
//           <Name>
//             <Input1 type="text" placeholder="First Name" />
//             <Input3 type="text" placeholder="Last Name" />
//           </Name>
//           <Input type="text" placeholder="Email" />
//           <Pwd>
//             <Input2 type="password" placeholder="Password" />
//             <Button2> Show </Button2>
//           </Pwd>
//           <Input type="text" placeholder="Confirm Password" />
//         </UserCredential>
//         <DisplayFlex>
//           <Input4 type="checkbox" />
//           <Privacy> I Agree with <span style={{color: 'rgb(255 0 137)'}}>privacy</span> and <span style={{color: 'rgb(255 0 137)'}}>policy </span></Privacy>
//         </DisplayFlex>
//         <Button> Sign up</Button>
//       </Card>
     
//     </Container>
//   );
// }

// export default SignUp;




// import React from 'react'
// import styled from 'styled-components'

// const Container = styled.div`

// height : 100vh ;
// background-color: #130d32;
// padding: 0 25% 0 25%;
// `;

// const Card = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// /* box-shadow: 10px 0px 5px red; */
// `;

// const Label = styled.div`
// margin: 20px 20px 20px 20px;
// color: white;
// font-weight: bold;
// font-family: Arial, Helvetica, sans-serif;
// align-content: start;

// `;
// const Input = styled.input`
// margin: 0 0 20px 0;
//   height: 35px;
//   border-radius: 20px;
//   border: 1.25px solid rgb(255 0 137);
//   padding-left: 16px;
//   outline: none;
//   background-color: #24195f;
// `;

// const UserCredential = styled.div`
// display: flex;
// flex-direction: column;
// width: 100%;
// `;
// const DisplayFlex = styled.div`
// display: flex;
// justify-content: space-around;
// width: 100%;
// `;
// const Remember = styled.div`
// color: white;
// `;
// const Forget= styled.div`
// color: red;
// `;
// const Button = styled.button`
//   background-color: red;
//   width: 100%;
//   height: 50px;
//   color: white;
//   font-size: 15px;
//   border-radius: 30px;
//   justify-content: center;
//   align-items: center;
//   font-weight: 900;
//   margin: 10px 0 0 10px;

// `;
// const Pwd = styled.div`
//   display: flex;
//   margin: 5px 0px 18px 0px;
//   width: 100%;
//   height: 35px;
//   border-radius: 36px;
//   padding-left: -10px;
//   /* border-color: red ; */
//   border: 1.25px solid rgb(255 0 137);
//   background-color: #24195f;
// `;
// const Input2 = styled.input`
//   margin: 0px 31px 1px 15px;
//   width: 100%;
//   height: 30px;
//   border: none;
//   outline: none;
//   border: 0 white;
//   background-color: #24195f;
// `;
// const Input3 = styled.div`
// color: white;
// `;

// const Button2 = styled.button`
//   border: none;
//   color: grey;
//   margin: 3px 11px 4px 0px;
//   font-size: 14px;
//   background-color: #24195f;
// `;

// function login() {
//   return (
//     <Container>
//     <Card>

//         <Label> Log In </Label>

//         <UserCredential>
//         <Input type="text" placeholder="username"/>

//         <Pwd>
//             <Input2 type="password" placeholder="Password" />
//             <Button2> Show </Button2>
//           </Pwd>

//         {/* <Input type="password" placeholder='password'/> */}
//         </UserCredential>

//         <DisplayFlex>
//             <Input3 type="checkbox"/>
//             <Remember> Remember me </Remember>
//             <Forget> Forget Password ? </Forget>
//         </DisplayFlex>

//     <Button> Log In </Button>

//     </Card>
//     </Container>
//   )
// }

// export default login
