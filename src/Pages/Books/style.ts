import { important } from "polished";
import styled, { keyframes } from "styled-components";


export const Container = styled.div`
  width: 99vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerInformation = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0.5rem;
  > div {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    > button {
      @media (max-width: 600px) {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  width: 100%;
  font-size: 3rem;
  font-weight: bolder;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.orange} !important;
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > button {
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }
`;

export const Fildset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  width: 30vw;
  padding: 20px 0px;
  height: 97vh;
  overflow: auto;

  background-color: ${(props) => props.theme.colors.backgroundColor};

  .header {
    display: flex;
    margin: 0.5rem 0;
  }
  > div {
    width: 85%;
    margin: 0.4rem 0 0.4rem 0;
    > div {
      input {
        padding: 10px 14px;
      }
      > div {
        padding: 8px 14px;
      }
    }
  }
  > button {
    margin: 0.5rem 0;
    padding: 8px 4px;
    width: 80%;
    font-weight: 600;
    &:hover {
      background-color: ${(props) => props.theme.colors.orange};
    }
  }
  @media (max-width: 650px) {
    width: 90vw;
    padding: 0px;
  }
`;

export const TitleModal = styled.h1`
  width: 100%;
  font-size: 2rem;
  font-weight: bolder;
  text-align: center;
  color: ${(props) => props.theme.colors.orange} !important;
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;
