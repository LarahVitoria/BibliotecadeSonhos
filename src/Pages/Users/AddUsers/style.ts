import { BsBook } from "react-icons/bs";
import styled, { keyframes } from "styled-components";


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  align-items: center;
  @media (max-width: 800px) {
    height: 90vh;
    flex-direction: column;
  }
`;

export const ContainerInformation = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  > svg {
    height: 90vh;
    @media (max-width: 600px) {
      display: none;
    }
  }
  > button {
    margin: 10px 0;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;
export const Title = styled.h1`
  margin: 20px 0;
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.green} !important;
  @media (max-width: 600px) {
    font-size: 1.8rem;
    margin: 10px 0 0 0;
    text-align: center;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 50vw;
  @media (max-width: 800px) {
    width: 70vh;
  }
`;

export const Fildset = styled.fieldset`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0rem 5rem;
  border: none;

  @media (max-width: 800px) {
    margin: 0rem 1.5rem;
  }
  > div {
    width: 31vw;
    margin: 0.4rem 0 0.4rem 0;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  > button {
    width: 80%;
    margin-top: 1rem;
    font-weight: 600;

    &:hover {
      background-color: ${(props) => props.theme.colors.green};
      border-color: ${(props) => props.theme.colors.green};
    }
    @media (max-width: 600px) {
      margin: 10px 0;
    }
  }
`;
