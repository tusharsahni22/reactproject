import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
const Container = styled.div`
  width: 70%;
  margin-right: 15%;
`;

const Input = styled.input`
  margin-left: 10px;
  height: 15px;
  border: none;
  outline: none;
  border: 0 white;
  background-color: #24195f;
`;
const Iconn = styled.div``;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 10px 0 10px;
  padding-top: 20px;
  margin-top: 10px;
`;
const R1 = styled.div``;
const R2 = styled.div``;
const R3 = styled.div``;
const Head = styled.div`
  display: flex;
  font-size: 25px;
  margin: 20px 0 10px 20px;
  justify-content: space-between;
`;
const Button = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: #1466e9;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  padding: 7px;
`;
const Button2 = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: #1466e9;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  padding: 7px 13px 7px 15px;
  margin: 10px 20px 0 39%;
`;
const Img = styled.img`

height: 150px;
width: 150px;
margin: 10px 20px 0 35%;
`;
const R4 = styled.div`
margin-Left: 35%;
`;

function Front() {
  return (
    <Container>
      <Head>
        All vaults
        <Button>
          <AiOutlinePlus /> New item
        </Button>
      </Head>
      <Row>
        <Input type="checkbox" />
        <R1>All</R1>
        <R2>Name </R2>
        <R3> Owner </R3>
        <Iconn>
          {" "}
          <BiDotsVerticalRounded />
        </Iconn>
      </Row>
      <Img src="https://static.vecteezy.com/system/resources/previews/000/570/073/original/vector-desktop-computer-icon.jpg"/>
      <R4>There are no items to list.</R4>
      <Button2>
          <AiOutlinePlus /> New item
        </Button2>
    </Container>
  );
}

export default Front;
