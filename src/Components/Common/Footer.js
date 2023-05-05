import React from 'react'
import styled from 'styled-components'

const Copy = styled.div`
margin: 5px 5px 5px 5px;
`;
const Footerr = styled.div`
display: flex;
justify-content: space-between;
margin: 0 15% 0 15%;
`;
const Line = styled.div`
  height: 1.25px;
    background-color: lightgrey;
    margin: 20px 15% 30px 15%;
`;


function Footer() {
  return (
  <>
   <Line/>
    <Footerr>    
      <Copy>© 2023 Bitwarden Inc.</Copy>
      <Copy>Version 2023.4.0</Copy>
      </Footerr>
      </>
  )
}

export default Footer