import * as S from "./ModalStyle";
import * as HomeS from "../home/HomeStyle";

const Modal = (props) => {
  const onClickModal = () => {
    props.onModalClose();
  };
  return (
    <div>
      {props.isOpen && (
        <S.Modal>
          <S.ModalContent>
            <h2>{props.head}</h2>
            <S.LoginInputWrapper>
              <S.LoginInput placeholder="Enter Email or Phone Number" />
              <S.LoginInput placeholder="Enter Password" />
              {props.isRegister && (
                <S.LoginInput placeholder="Confirm Password" />
              )}
              <HomeS.StyledButton onClick={onClickModal}>
                {props.head}
              </HomeS.StyledButton>
            </S.LoginInputWrapper>
            <S.CloseWrapper>
              <S.CloseButton onClick={onClickModal}>Close</S.CloseButton>
            </S.CloseWrapper>
          </S.ModalContent>
        </S.Modal>
      )}
    </div>
  );
};

export default Modal;
