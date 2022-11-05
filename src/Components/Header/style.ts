import styled from "styled-components";

interface IPropsMenu {
  open: boolean;
}

export const Container = styled.header`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  height: 10vh;
  width: 100vw;
  flex-direction: row;
  justify-content: center;
  align-content: space-between;
  z-index: 100000;
  padding: 0px 30px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    padding: 0px 10px;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  width: 60vw;
  svg {
    height: 8vh;
  }
  @media screen and (max-width: 900px) {
    width: 40vw;
  }
`;

export const Menu = styled.ul<IPropsMenu>`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  z-index: 100000;
  width: 40vw;
  @media screen and (max-width: 900px) {
    width: 60vw;
  }
  @media screen and (max-width: 600px) {
    background: ${(props) => props.theme.colors.backgroundColor};
    display: flex;
    position: absolute;
    top: 53px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    padding-top: 40px;

    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    transition: 0.8s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #cb9cf2;
    }
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 1rem;
  font-weight: 200;
  cursor: pointer;
  > svg {
    display: none;
  }
  > h4 {
    margin-left: 20px;
  }
  @media screen and (max-width: 600px) {
    > svg {
    display: flex;
  }
    margin-left: 30vw;
  width: 100vw;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: #cb9cf2;
      margin-right: 0.5rem;
    }
  }
`;
