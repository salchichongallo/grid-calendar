import styled from "styled-components";

const rowHeight = "60px";

export const AgendaViewContainer = styled.div`
  .agenda {
    display: flex;
    align-items: stretch;
  }

  .agenda__timerange-container {
    min-width: 96px;
    height: auto;
  }

  .agenda__timerange {
    height: ${rowHeight};
    position: relative;
  }

  .agenda__time {
    color: gray;
    font-size: 14px;
    line-height: 1;
    padding-top: 6px;
    padding-left: 16px;
  }

  .agenda__timerange::before {
    content: "";
    border-bottom: 1px solid lightgray;
    position: absolute;
    width: 100%;
    left: 0;
    pointer-events: none;
  }

  .agenda__main {
    display: inline-flex;
    position: relative;
    width: 100%;
    text-rendering: geometricPrecision;
  }

  .grid__cols-placeholder {
    display: block;
  }

  .grid__col {
    height: ${rowHeight};
    display: block;
  }

  .grid__col::after {
    content: "";
    border-bottom: 1px solid lightgray;
    position: absolute;
    width: 100%;
    pointer-events: none;
  }

  .grid__row {
    position: relative;
    box-sizing: border-box;
    flex: 1 0 auto;
    border-right: 1px solid lightgray;
    width: 96px;
    min-width: 96px;
  }

  .timeslot {
    // reset button styles
    appearance: none;
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    text-align: left;

    min-height: 24px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background: #2a98db;
    border-left: 12px solid #2280b9;
    box-shadow: 0 0 1px #000;

    position: absolute;
    left: 0;
    width: calc(100% - 16px);
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      background: #42aaea;
      border-color: #2a98db;
    }
  }

  .timeslot__text {
    color: #fff;
    padding-left: 12px;
    font-size: 16px;
    line-height: 1.1;
    user-select: none;
    display: block;
    width: 100%;
  }
`;
