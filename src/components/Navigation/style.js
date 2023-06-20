import styled from "styled-components";

export const NavigaterWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: lavender;
  border-radius: 15px;
  box-shadow: 5px 5px 5px black;
  z-index: 1;
`;

export const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  margin: 5px;
`;

export const StyledLI = styled.li`
  padding: 5px;
`;

export const NaviButton = styled.button`
  font-size: large;
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: lavender;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
