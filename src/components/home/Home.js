import * as S from "./HomeStyle.js";
import { imageSrcs } from "../constants.js";

const Home = () => {
  return (
    <>
      <S.HomeWrapper>
        <S.FlexWrapper justifycontent="space-around" alignitems="center">
          <S.IntroSection>
            <S.StyledHeader>
              Best way to grow your local business
            </S.StyledHeader>
            <S.SubTitleHeader>
              Artificial Intelligence powered easy-to-use tools to get more
              customers & give them a better experience
            </S.SubTitleHeader>
            <S.FlexWrapper justifycontent="center">
              <S.StyledInput placeholder="Enter Email For Demo" />
              <S.StyledButton>Get Demo</S.StyledButton>
            </S.FlexWrapper>
          </S.IntroSection>
          <S.ImageWrapper className="p-2">
            <S.Image
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e6fa4473cb712ba3b454_home-hero-agnostic-l-2x-p-1600.webp"
              alt="work-images"
            />
          </S.ImageWrapper>
        </S.FlexWrapper>
      </S.HomeWrapper>
      <S.ClientCompanies>
        <S.StyledH1>
          <h1>Trusted by 100,000+ local businesses globally</h1>
        </S.StyledH1>
        <div>
          {imageSrcs.clientIcons.map((client) => (
            <S.ClientIcons
              src={client.logo}
              alt={client.name}
              key={client.name}
            />
          ))}
        </div>
      </S.ClientCompanies>
    </>
  );
};

export default Home;
