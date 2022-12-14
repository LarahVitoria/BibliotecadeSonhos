import { important } from 'polished';
import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundColor} ;
  display: flex;
  align-items: center;
  flex-direction: column; 
  .MuiTableContainer-root{
    margin-top: 10px;
  }
  .MuiTableCell-head{
    background-color: ${(props) => props.theme.colors.red} !important;
    border-top:3px solid ${(props) => props.theme.colors.red};
    border-left:none;
    border-right:none;
  }
  .MuiTableCell-body{
    border-bottom: 1px solid ${(props) => props.theme.colors.red};
  }
  >h1{
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 800;
    font-size: 3rem;
    text-align:center;
    color: ${(props) => props.theme?.colors.red}!important;
  }
  >div{
    width:90vw;
    &::before{
      border-bottom: 1px solid ${(props) => props.theme?.colors.textColor};
    }
    :hover:not(.Mui-disabled):before {
      border-bottom: 2px solid ${(props) => props.theme?.colors.textColor};

    } 
  }
  @media screen and (max-width: 880px) {
    >h1{
    margin: 1.2rem 0;
    font-weight: 800;
    font-size: 2rem;
  }
  }
  @media screen and (max-width: 600px) {
    >h1{
    margin: 1rem 20px;
    text-align: center;
    font-weight: 800;
    font-size: 1.5rem;
  }
  }

`;
