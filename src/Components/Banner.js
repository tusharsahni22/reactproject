import React from "react";
import styled from "styled-components";

const Contb = styled.div`
  position: relative;
`;

const Imgb = styled.img`
  bottom: 0;
  height: 100%;
  position: sticky;
  top: 0;
  width: 100%;
  object-fit: cover;
`;

const Headings = styled.div`
  font-size: 80px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1;
  margin-left: 10px;
  position: absolute;
  top: 20%; 
  width: 80%;
  color: white;
  text-shadow: #d2d5da 2px 2px;
`;
const Heads = styled.div``;
const Imgs = styled.div``;
const Section1 = styled.div`
  background-color: #fee4d3;
  height: 550px;

`;
const Heading1 = styled.div`
  font-weight: 400;
  padding: 40px 0 0 45px;
`;
const Heading2 = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  width: 45%;
  font-size: 35px;
  margin: 40px 0 40px 45px;
`;
const DivI = styled.div`
  display: flex;
`;
const Img = styled.img`
  border-radius: 20px;
  margin-left: 45px;
  width: 430px;
  height: 290px;
`;
const Text2 = styled.div`
margin-left: 30px;
`;
const Head3 = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-left: 60px;
`;
const Para = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  margin-left: 60px;
`;
const Section2 = styled.div``;
const SImg =styled.div`
display: flex;
height: 300px;
margin-left: 40px;
`;
const Img1 = styled.img`
width: 16%;
height: 180px;
margin-top: 30px;
margin-left: 40px;
`;
const Section3 = styled.div`
height: 800px;
background-color: #fee4d3;
`;
const BG1 = styled.div`
background-color: #4cc0ad;
margin: 0 45px 0 45px;
height: 250px;
width: 250px;
border-radius:20px ;
`;
const BlankLogo = styled.div`
height: 250px;
width: 250px;
margin: 0 45px 0 45px;
`;
const BG2 = styled.div`
background-color: #082340;;
height: 250px;
width: 250px;
border-radius:20px ;
margin: 0 45px 0 45px;
`;
const Img2 = styled.img`
  height: 120px;
  margin-left: 60px;
  margin-right: 40px;
  margin-top: 40px;
`;
const Font1 = styled.h6`
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
font-size: 20px;
color: white;
text-align: center;
margin-top: 15px;
`;
const Imgg= styled.div`

`;
const FourLogo = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 30px;
`;
const  BG3= styled.div`
background-color: #f58c76;
height: 250px;
width: 250px;
border-radius:20px ;
margin: 0 45px 0 45px;
`;
const  BG4= styled.div`
background-color: #8ca2d3;
height: 250px;
width: 250px;
border-radius:20px ;
margin: 0 45px 0 45px;
`;
const  BG5 = styled.div`
background-color: #f68b28;
height: 250px;
width: 250px;
border-radius:20px ;
margin: 0 45px 0 45px;
`;
const Section4 = styled.div`

`;

function Banner() {
  return (
    <div>
      <Contb>
        <Imgs>
          <Imgb src=" https://png.pngtree.com/thumb_back/fh260/background/20190529/pngtree-the-background-of-sense-of-science-and-technology-in-information-technology-image_117255.jpg" />

          <Heads>
            <Headings> Engage with the Emerging </Headings>
          </Heads>
        </Imgs>
      </Contb>
      <Section1>
        <Heading1>PURPOSE</Heading1>
        <Heading2>Why we do what we do </Heading2>
        <DivI>
          
            <Img src="https://www.coforge.com/hubfs/MicrosoftTeams-image%20(29).png" />
        
          <Text2>
            <Head3>Vision </Head3>
            <Para> Engage with the Emerging</Para>
            <Head3> Mission</Head3>
            <Para> Tranform at the intersect</Para>
          </Text2>
        </DivI>
      </Section1>

      <Section2>
        <div>
          <Heading1>AWARDS AND RECOGNITION</Heading1>
          <Heading2>Today's Milestones. Tomorrow's starting line </Heading2>
        </div>

        <SImg>
          <Img1 src="	https://www.coforge.com/hubfs/mulesoft.jpg" />
          <Img1 src=" https://www.coforge.com/hubfs/Service%20now.svg" />
          <Img1 src=" https://www.coforge.com/hubfs/Best-Workplaces-for_women.svg" />
          <Img1 src=" https://www.coforge.com/hubfs/azure-4.png" />
          <Img1 src=" https://www.coforge.com/hubfs/BestWorkPlace-1.svg" />
        </SImg>
      </Section2>


      <Section3>
      <Heading1>INDUSTRIES WE TRANSFORM </Heading1>
       <Heading2>The depth and width of our expertise</Heading2>
       <Imgg>
       <FourLogo>
        <BG1>
        <Img2 src=" https://22123137.fs1.hubspotusercontent-na1.net/hubfs/22123137/Group%2013.svg"/>
        <Font1> Insurance </Font1>
        </BG1>
        <BG2>
        <Img2 src="https://22123137.fs1.hubspotusercontent-na1.net/hubfs/22123137/Group%203.svg "/>
        <Font1> Banking + Financial Services </Font1>
        </BG2>
        <BG3>
        <Img2 src="https://www.coforge.com/hubfs/01-12-22_v2-TTH_icon-v2.svg "/>
        <Font1> Travel,Transportation + Hospitality </Font1>
        </BG3>
        <BG4>
          <Img2 src=" https://22123137.fs1.hubspotusercontent-na1.net/hubfs/22123137/Group%2015.svg"/>
          <Font1>Healthcare </Font1>
        </BG4>
        </FourLogo>
        <FourLogo>
        <BG5>        
        <Img2 src="https://22123137.fs1.hubspotusercontent-na1.net/hubfs/22123137/Group%205.svg "/> 
        <Font1>Public Sector</Font1>
        </BG5>
        <BlankLogo></BlankLogo>
        <BlankLogo></BlankLogo>
        <BlankLogo></BlankLogo>
        
        </FourLogo>
        </Imgg>
               
      </Section3>
      <Section4>
      <div>
      <Heading1>HOW WE TRANSFORM </Heading1>
      <Heading2>Our Services </Heading2>
      
      </div>



      </Section4>
    </div>
  );
}

export default Banner;
