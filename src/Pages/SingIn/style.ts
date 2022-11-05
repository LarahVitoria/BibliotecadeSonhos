import styled from "styled-components";

export const Container = styled.section`
display: flex;
width: 100%;
height: 100vh;
background-color:#fff;
align-items: center;
padding:2rem;
`;

export const Ilustration = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
@media screen and (max-width: 880px) {
      width: 0%;
      display: none;
    }
`;

export const Form = styled.div`
width: 50%;

>form{
  display: flex;
  flex-direction: column;
  align-items: center;
  >div, button{
    margin-bottom:1rem;
    width: 300px;
  }
  >button{
    color:#fff;
  }
  >p{
    >a{
      text-decoration:none;
      color: gray;
    }
  }
}
@media screen and (max-width: 880px) {
      width: 100%;
      >form{
        >div{
          width:90%;
          >div{
            >input{
              padding:10px ;
            }  
          }
        }
        >button{
          width:90%;
        }
      }
    }
`;