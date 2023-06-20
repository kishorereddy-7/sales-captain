import * as S from "./style";

export const Navigater = () => {
  return (
    <S.NavigaterWrapper>
      <S.StyledUL>
        <S.StyledLI>
          <S.NaviButton>Products</S.NaviButton>
        </S.StyledLI>
        <S.StyledLI>
          <S.NaviButton>Solutions</S.NaviButton>
        </S.StyledLI>
        <S.StyledLI>
          <S.NaviButton>Pricing</S.NaviButton>
        </S.StyledLI>
        <S.StyledLI>
          <S.NaviButton>Resources</S.NaviButton>
        </S.StyledLI>
        <S.StyledLI>
          <S.NaviButton>Support</S.NaviButton>
        </S.StyledLI>
      </S.StyledUL>
    </S.NavigaterWrapper>
  );
};
