import React, { Component } from 'react';
import styled, {createGlobalStyle, css, keyframes} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
  }
`

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
          <Button>Hello</Button>
          <Button danger rotationTime={3}>Hello</Button>
          <Anchor href="http://google.com">Go to Google</Anchor>
      </Container>
      
    );
  }
}
// 아래에 있는것들은 모두 Component이다. 

const Container = styled.div`
  height : 100vh;
  width : 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color:white;
  font-weight:600;
  -webkit-appearance: none; // Chrome
  cursor: pointer; // hover cursor
  &:active,
  &:focus {
    outline: none;
  } // click outlien control
  background-color : ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
// props를 받아서 3항 연산자 가능

${props => {
  if(props.danger) {
    return css `animation: ${rotation} ${props.rotationTime}s linear infinite`;
  }
}};
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration:none;
`;
// "a" 태그로 만들고 부모에서 상속을 받을 수 있음 - withComponent로 코드 수 줄임



export default App;
