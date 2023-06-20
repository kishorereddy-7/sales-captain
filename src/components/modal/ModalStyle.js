import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

export const CloseWrapper = styled.div`
  text-align: right;
  margin: 5px;
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  padding: 10px;
  font-size: large;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 5px;
`;

export const CloseButton = styled.button`
  padding: 10px;
  font-size: 20px;
  margin: 5px;
  background-color: white;
  border-radius: 10px;
  color: black;
  cursor: pointer;
`;
