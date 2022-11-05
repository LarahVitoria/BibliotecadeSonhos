import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif !important;
  color:${(props) => props.theme?.colors.textColor} !important;

}
body{
  background:${(props) => props.theme?.colors.backgroundColor};
  font-size:14px;
  width: 100vw;
  height: 100vh;
}
`;

