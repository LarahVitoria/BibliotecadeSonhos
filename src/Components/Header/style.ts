import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0px 30px;
`;
