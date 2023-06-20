import styled from "styled-components";

export const HeadWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 300px;
  padding: 10px;
`;

export const LoginButton = styled.button`
  padding: 10px;
  font-size: 20px;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
  color: black;
  cursor: pointer;
`;

export const RegisterButton = styled.button`
  padding: 10px;
  font-size: 20px;
  margin: 10px;
  background-color: black;
  border: 1px solid #ddd;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;
