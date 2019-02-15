import React, { Component } from 'react';
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import theme from './theme.js'
const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
  }
`;
// 초기화

const Container = styled.div`
  height : 100vh;
  width : 100%;
  background-color: pink;
`;

const Card = styled.div`
  background-color : ${props => props.theme.mainColor};
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color : ${props => props.theme.successColor};
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle/>
          <Form/>
        </Container>
     </ThemeProvider>
    );
  }
}
// 아래에 있는것들은 모두 Component이다. 



const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

export default App;
