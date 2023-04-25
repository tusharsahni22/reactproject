import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: lightgrey;
`;
const Option = styled.div`
  font-family: Anek Bangla, sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 20px;
`;
const Title = styled.div`
  font-weight: bold;
  margin: 40px 0 20px 0;
`;
const Line = styled.div`
  height: 1px;
  background-color: lightgrey;
`;
const Options = styled.div`
  font-family: Anek Bangla, sans-serif;
  font-size: 14px;

  justify-content: space-between;
  background-color: lightgrey;
`;


const Section = styled.div``;
function Footer() {
  return (
    <>
      <Container>
        <Section>
          <Title>Useful Links</Title>

          <Option>About Us</Option>
          <Option>Alliances</Option>
          <Option>Career</Option>
          <Option>Investors</Option>
          <Option>Resource Library</Option>
          <Option>Blog</Option>
          <Option>Newsroom</Option>
          <Option>Contact Us</Option>
          <Option>Media Contacts</Option>
          <Option>Worldwide Locations</Option>
          <Option>Safe Harbor</Option>
          <Option>Privacy Statement</Option>
          <Option>Terms and Conditions</Option>
          <Option>UK Modern Slavery Act</Option>
          <Option>Carbon Reduction Mandate</Option>
          <Option>Mortgage Licensing-NMLS ID</Option>
        </Section>

        <Section>
          <Title>Insutries</Title>
          <Option>Insurance</Option>
          <Option>Banking & Financial Services</Option>
          <Option>Travel</Option>
          <Option>Healthcare</Option>
          <Option>Public Sector</Option>
        </Section>

        <Section>
          <Title>Services</Title>
          <Option>Digital Services</Option>
          <Option>Data and Analytics</Option>
          <Option>Digital Process Automation</Option>
          <Option>Salesforce Ecosystem</Option>
          <Option>Cloud and Infrastructure Management Services</Option>
          <Option>CyberSecurity</Option>
          <Option>Business Process Solutions</Option>
          <Option>Metaverse</Option>
          <Option>Cognitive AI</Option>
        </Section>

        <Section>
          <Title>Stay Tuned</Title>
          <Option>Linkedin</Option>
          <Option>Facebook</Option>
          <Option>Twitter</Option>
          <Option>Youtube</Option>
          <Option>Instagram</Option>
          <Title>Our Companies</Title>
          <Option>Advantage Go</Option>
        </Section>
      </Container>

      <Line> </Line>
      <Options>© Coforge, 2023</Options>
           
    </>
  );
}

export default Footer;