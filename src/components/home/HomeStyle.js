import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifycontent};
  align-items: ${(props) => props.alignitems};
  flex-direction: ${(props) => props.flexdirection};
`;

export const ImageWrapper = styled.figure`
  width: 50%;
  padding: 5px;
  margin: 0px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const IntroSection = styled.section`
  width: 40%;
  padding: 5px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const StyledHeader = styled.h1`
  font-size: 2.5em;
`;

export const SubTitleHeader = styled.h3`
  font-weight: 300;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: large;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  font-size: large;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

export const ClientCompanies = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(247, 247, 247);
`;

export const StyledH1 = styled.div`
  font-size: 24px;
  padding: 10px;
`;

export const ClientIcons = styled.img`
  width: 150px;
  padding: 10px;
`;

export const HomeWrapper = styled.div`
  height: 90vh;
`;
