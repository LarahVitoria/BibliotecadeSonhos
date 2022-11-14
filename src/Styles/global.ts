import { important } from "polished";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif !important;
  color:${(props) => props.theme?.colors.textColor} !important;
  outline:none !important;
 
  /* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px ;
}
.MuiTableCell-root {
  font-size:0.8rem !important;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  background:#000;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9f9f9f;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fff; 
}
  .MuiPaper-root{
  background:${(props) => props.theme?.colors.backgroundColor} !important;
  }
  .table_book{
    background:${(props) => props.theme?.colors.orange} !important;
  }
  .header_user{
    >th{
    background:${(props) => props.theme?.colors.green} !important;
    }
  }
  .strong {
  color: ${(props) => props.theme.colors.blue} !important;
}
}
body{
  background:${(props) => props.theme?.colors.backgroundColor};
  font-size:14px;
  width: 100vw;
  height: 100vh;
  .listagem_usuario{
    border-bottom: 1px solid ${(props) => props.theme.colors.green} !important;
  }
  .listagem_livro{
    border-bottom: 1px solid ${(props) => props.theme.colors.orange} !important;
  }
}
`;
