import { useState } from "react";
import * as S from "./HeaderStyle.js";
import Modal from "../modal/Modal.js";
import { imageSrcs } from "../constants.js";

const modalHeadString = {
  sign: "Sign In",
  register: "Register",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalHead, setModalHead] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const onClickLogin = () => {
    setIsOpen((preState) => !preState);
    setModalHead(modalHeadString.sign);
    setIsRegister(false);
  };
  const onClickRegister = () => {
    setIsOpen((preState) => !preState);
    setModalHead(modalHeadString.register);
    setIsRegister(true);
  };
  return (
    <header>
      <S.HeadWrapper>
        <S.Logo src={imageSrcs.companyIcon} alt="app-icon" />
        <div>
          <S.LoginButton onClick={onClickLogin}>Sign in</S.LoginButton>
          <S.RegisterButton onClick={onClickRegister}>
            Register
          </S.RegisterButton>
        </div>
      </S.HeadWrapper>
      <Modal
        isOpen={isOpen}
        head={modalHead}
        isRegister={isRegister}
        onModalClose={onClickLogin}
      />
    </header>
  );
};

export default Header;
