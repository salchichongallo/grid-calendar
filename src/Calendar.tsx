import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Calendar />
    </Container>
  );
}

const CalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  outline: 5px solid greenyellow;
`;

const Row = styled.div`
  border-bottom: 1px solid black;
  flex: 1;
`;

const RowsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ColsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Col = styled.div`
  border-right: 1px solid black;
  flex: 1;
  position: relative;
`;

type SlotProps = {
  $prefferedHeight: number;
  $verticalOffset: number;
};
const Slot = styled.div<SlotProps>`
  background: cyan;
  height: ${(props) => props.$prefferedHeight}%;
  position: absolute;
  width: 100%;
  left: 0;
  top: ${(props) => props.$verticalOffset}%;
  border-radius: 4px;
`;

const totalMinutes = 4 * 60;
const durationInMinutes = 25; // 25 mins

function Calendar() {
  const height = (100 * durationInMinutes) / totalMinutes;
  return (
    <CalendarWrapper>
      <RowsContainer>
        <Row />
        <Row />
        <Row />
        <Row />
      </RowsContainer>
      <ColsContainer>
        <Col />
        <Col>
          <Slot $prefferedHeight={height} $verticalOffset={25}>
            Hospital
          </Slot>
        </Col>
        <Col />
      </ColsContainer>
    </CalendarWrapper>
  );
}

export default App;
