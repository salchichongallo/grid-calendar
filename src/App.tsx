import styled from "styled-components";
import AgendaView from "./AgendaView/AgendaView";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

function App() {
  return (
    <Container>
      <AgendaView />
    </Container>
  );
}

export default App;
