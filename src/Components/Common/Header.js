import React from 'react' 
import styled from 'styled-components'


const Option= styled.div`
   color: white;
   margin: 10px;
    `;
const Container = styled.div`
display: flex;
justify-content: space-between;
background-color: darkblue;

`;
const Logo = styled.img`
height: 50px;
width: 100px;
`;
const Text= styled.div`
display: flex;
`;

function Header() {
  return (
    <div>
    <Container>
      <Logo src= "https://www.coforge.com/hs-fs/hubfs/dark_coforge_logo.png?width=627&name=dark_coforge_logo.png"/>
      <Text>

        
      <Option>Home </Option>
      <Option> Product </Option>
      <Option> company Profile</Option>
      <Option> Product Gallery </Option>
      <Option> Contact</Option>
      <Option> About </Option>
      </Text>

    </Container>

    </div>
  )
}

export default Header