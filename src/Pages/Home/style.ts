import { important } from "polished";
import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4rem;
  justify-content: center;
  @media screen and (max-width: 900px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Text = styled.div`
  width: 45vw;
  height: 60vh;
  background-position: center;
  background-size: cover;
  padding: 3rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.colors.textColor};
  position: relative;
  margin: 1rem;
  &:after {
    content: "";
    background-color: ${(props) => props.theme.colors.pink};
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 9px;
    left: 9px;
    transition: 0.2s;
  }
  > h1 {
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  }
  > p {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 900px) {
    width: 45vw;
    height: 60vh;
    > h1 {
      font-size: 1.6rem;
      line-height: 2rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    > p {
      font-size: 1rem;
      text-indent: 1em;
      text-align: justify;
    }
  }
  @media screen and (max-width: 600px) {
    width: 94vw;
    margin-top: 1rem;
    padding: 1rem;

    > h1 {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    > p {
      font-size: 1rem;
      text-indent: 1em;
      text-align: justify;
    }
  }
`;
export const Image = styled.div`
  width: 45vw;
  height: 60vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.colors.pink};
  position: relative;
  margin: 1rem;
  &:after {
    content: "";
    background-color: ${(props) => props.theme.colors.textColor};
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    bottom: 9px;
    right: 9px;
    transition: 0.2s;
  }
  > img {
    width: fit-content;
    height: 75%;
  }
  > p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.pink} !important;

    text-align: center;
  }
  @media screen and (max-width: 900px) {
    padding-right: 20px;

    > img {
      width: fit-content;
      height: 70%;
    }
    > p {
      font-size: 0.9rem;
      text-align: center;
    }
  }
  @media screen and (max-width: 600px) {
    width: 94vw;
    margin-top: 1rem;
    padding: 1rem;
    > p {
      font-size: 1rem;
      text-align: center;
    }
  }
`;
