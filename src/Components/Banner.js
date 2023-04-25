import React from "react";
import styled from "styled-components";

const Contb = styled.div`
  position: relative;
`;

const Imgb = styled.img`
  bottom: 0;
  height: 104vh;
  width: 100%;
  position: sticky;
  top: 0;
  width: 100%;
  object-fit: cover;
`;

const Headings = styled.div`
  font-size: 70px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1;
  margin: 50px 0 50px 60px;
  position: absolute;
  top: 20%;
  width: 60%;
  color: white;
  text-shadow: lightgrey 2px 2px;
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
const Heading3 = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  padding: 40px 0px 40px 45px;
`;
const Heading4 = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  width: 45%;
  font-size: 35px;
  margin: 40px 0 50px 40px;
`;

const Heading5 = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-weight: 400;
  padding: 40px 0 0 45px;
`;
const Heading6 = styled.div`
font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  width: 45%;
  font-size: 20px;
  margin: 40px 0 40px 45px;
`;
const View = styled.div`
display: flex;


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
const SImg = styled.div`
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
  border-radius: 20px;
`;
const BlankLogo = styled.div`
  height: 250px;
  width: 250px;
  margin: 0 45px 0 45px;
`;
const BG2 = styled.div`
  background-color: #082340;
  height: 270px;
  width: 250px;
  border-radius: 20px;
  margin: 0 45px 0 45px;
`;
const Img2 = styled.img`
  height: 120px;
  margin: 50px 20px 20px 50px;
  
`;
const Font1 = styled.h6`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: white;
  text-align: center;
  margin-top: 15px;
`;
const Imgg = styled.div``;

const FourLogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-top: 10px;
`;
const FourLogo2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 450px;
`;

const BG3 = styled.div`
  background-color: #f58c76;
  height: 270px;
  width: 250px;
  border-radius: 20px;
  margin: 0 45px 0 45px;
`;
const BG4 = styled.div`
  background-color: #8ca2d3;
  height: 250px;
  width: 250px;
  border-radius: 20px;
  margin: 0 45px 0 45px;
`;
const BG5 = styled.div`
  background-color: #f68b28;
  height: 250px;
  width: 250px;
  border-radius: 20px;
  margin: 0 45px 0 45px;
`;
const Section4 = styled.div`
  height: 1500px;
`;
const Section5 = styled.div`
`;

const Text3 = styled.div`
  text-align: center;
  width: 90%;
  margin: auto;
`;
const BG6 = styled.div`
  margin: 0 40px 0 40px;
  height: 300px;
  width: 22%;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 20px;
  border-width: auto;
  height: 77%;

  
`;
const Button = styled.button`
  background-color: #082340;
  height: 50px;
  color: white;
  font-size: 15px;
  padding: 10px 13px;
  border-radius: 10px;
  margin:50px 10px 0 450px;
  justify-content: center;
  align-items: center;
  cursor: pointer; 
`;

const Font2 = styled.div`
  margin: 7px 0 0 60px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  width: 70%;
`;

function Banner() {
  return (
    <div>
      <Contb>
        <Imgs>
          <Imgb src=" https://www.coforge.com/hubfs/Banner-home%20(1).webp" />

          <Heads>
            <Headings> Engage with the emerging </Headings>
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
              <Img2 src=" https://22123137.fs1.hubspotusercontent-na1.net/hubfs/22123137/Group%2013.svg" />
              <Font1> Insurance </Font1>
            </BG1>
            <BG2>
              <Img2 src="https://22123137.fs1.hubspotusercontent-na1.net/hubfs/22123137/Group%203.svg " />
              <Font1> Banking + Financial Services </Font1>
            </BG2>
            <BG3>
              <Img2 src="https://www.coforge.com/hubfs/01-12-22_v2-TTH_icon-v2.svg " />
              <Font1> Travel,Transportation + Hospitality </Font1>
            </BG3>
            <BG4>
              <Img2 src=" https://22123137.fs1.hubspotusercontent-na1.net/hubfs/22123137/Group%2015.svg" />
              <Font1>Healthcare </Font1>
            </BG4>
          </FourLogo>
          <FourLogo>
            <BG5>
              <Img2 src="https://22123137.fs1.hubspotusercontent-na1.net/hubfs/22123137/Group%205.svg " />
              <Font1>Public Sector</Font1>
            </BG5>
            <BlankLogo></BlankLogo>
            <BlankLogo></BlankLogo>
            <BlankLogo></BlankLogo>
          </FourLogo>
        </Imgg>
      </Section3>
      <Section4>
      <Heading1>HOW WE TRANSFORM </Heading1>
        <View>
        <Heading4>Our Services </Heading4>
        <Button> View all Services </Button>
        
        </View>

        <Imgg>
          <FourLogo2>
            <BG6>
              <Font2> Digital </Font2>
              <Img2 src=" https://www.coforge.com/hubfs/Icon-3-1.svg" />
              <Text3>
                We partner with you in building a robust digital backbone,
                intelligent operations, and an intelligent connected experience.
              </Text3>
            </BG6>
            <BG6>
              <Font2> Data and Analytics </Font2>
              <Img2 src=" https://www.coforge.com/hubfs/Icon-4-1.svg" />
              <Text3>
                AI, Data & Insights is our all-encompassing paradigm to help you
                achieve your goal of tangible and intangible business outcomes
                through data.
              </Text3>
            </BG6>
            <BG6>
              <Font2> Salesforce Ecosystem </Font2>
              <Img2 src=" https://www.coforge.com/hubfs/Icon-2-1.svg" />
              <Text3>
                Business Unit comes with a strong heritage. We help companies to
                digitally transform, create new experiences and accelerate their
                growth.
              </Text3>
            </BG6>
            <BG6>
              <Font2> Cloud and Infrasturucture Management </Font2>
              <Img2 src=" https://www.coforge.com/hubfs/Icon%206-1.svg" />
              <Text3>
                We combine domain and technology with engineering practices to
                help you understand, measure, rethink, redefine, and evolve.
              </Text3>
            </BG6>
          </FourLogo2>
          <FourLogo2>
            <BG6>
              <Font2> Cybersecurity </Font2>
              <Img2 src=" https://www.coforge.com/hubfs/Icon7.svg" />
              <Text3>
                Coforge CyberSecurity services help customers defend against
                cyberattacks with proactive, industry-specific threat
                intelligence.
              </Text3>
            </BG6>
            <BG6>
              <Font2> Digital Process Automation </Font2>
              <Img2 src=" https://www.coforge.com/hubfs/Icon-5-1.svg" />
              <Text3>
                Leveraging technology to automate, instrument, coordinate, and
                optimize activities at the "outside edges" of organizations.
              </Text3>
            </BG6>
            <BG6>
              <Font2> Business Process Solutions </Font2>
              <Img2 src=" https://www.coforge.com/hubfs/Layer_x-1.svg" />
              <Text3>
                Business process solutions and digital platforms to help you
                improve customer experience, grow your business, reduce costs
                and increase efficiency.
              </Text3>
            </BG6>
            <BG6>
              <Font2> Cognitive AI </Font2>
              <Img2 src=" https://www.coforge.com/hubfs/ai%20(2).svg" />
              <Text3>
                Coforge Quasar is a simple to use AI Platform that enables
                organizations to develop and deploy Cognitive powered Digital
                Applications at scale.
              </Text3>
            </BG6>
          </FourLogo2>
          <FourLogo2>
            <BG6>
              <Font2> Metaverse </Font2>
              <Img2 src=" https://www.coforge.com/hubfs/metaverse%20(2)-1.svg" />
              <Text3>
                Metaverse promises to transform the way we work, live and
                interact by offering new, immersive ways to interact,
                collaborate and transact.
              </Text3>
            </BG6>
           <BlankLogo></BlankLogo>
          <BlankLogo></BlankLogo>
          <BlankLogo></BlankLogo>
          </FourLogo2>
        </Imgg>
      </Section4>

      <Section5>
      <View>
        <Heading5>WORD-OF-MOUTH </Heading5>
        <Heading6>What our client have to say about us </Heading6>
       
          <Button > </Button>
          
        
        </View>

      </Section5>
    </div>
  );
}

export default Banner;
