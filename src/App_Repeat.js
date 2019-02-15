const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.06);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;
// 여러 곳에 사용하기 위한 css 기법

const Input = styled.input.attrs({
  required: true
})`
  border : none;
  ${awesomeCard};
`;
// 속성 변경