import { Button } from "components/common";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0px;
    color: black;
    font-family: 'Kaushan Script';
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>App</h1>
      <Button>Primary button</Button>
      <Button secondary>Secondary button</Button>
      <Button large>Large button</Button>
    </>
  );
}

export default App;
