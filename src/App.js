import styled from "styled-components";
import HomeComponent from "./modules/Index";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  font-family: 'Montserrat';
  margin: 30px 0 10px;
  align-items: center;
`;

const Header = styled.span`
  font-size: 25px;
  font-weight: bolder;
  color:black;
  
`;

function App() {

  return (
  <Container>
    <Header>Expense Tracker</Header>
    <HomeComponent/>
  </Container>
  );
}

export default App;
