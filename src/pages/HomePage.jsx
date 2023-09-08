import { styled } from 'styled-components';
import Search from '../components/search/Search';
import Image1 from '../assets/images/homepage-img1.svg';
import Image2 from '../assets/images/homepage-img2.svg';
import Image3 from '../assets/images/homepage-img3.svg';

const HomePage = () => {
  return (
    <HomeContainer>
      <Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Title>
      <Search />
      <ImageOne>
        <img src={Image1} alt="Homepage search image1" />
      </ImageOne>
      <ImageTwo>
        <img src={Image2} alt="Homepage search image2" />
      </ImageTwo>
      <ImageThree>
        <img src={Image3} alt="Homepage search image3" />
      </ImageThree>
    </HomeContainer>
  );
};

export default HomePage;

const HomeContainer = styled.div`
  position: relative;
  max-width: 1040px;
  padding-top: 96px;
  margin: 0px auto;
  height: 80%;
`;

const Title = styled.h2`
  font-size: 34px;
  text-align: center;
  margin-top: 60px;
`;

const ImageOne = styled.div`
  position: absolute;
  left: 28px;
  top: 270px;
  & img {
    width: 160px;
  }

  @media (max-width: 1040px) {
    left: 32px;
    top: 364px;
    & img {
      width: 120px;
    }
  }
`;

const ImageTwo = styled.div`
  position: absolute;
  right: 20px;
  top: 198px;
  & img {
    width: 160px;
  }

  @media (max-width: 1040px) {
    right: 159px;
    top: 424px;
    & img {
      width: 120px;
    }
  }
`;

const ImageThree = styled.div`
  position: absolute;
  right: 106px;
  top: 360px;
  & img {
    width: 160px;
  }

  @media (max-width: 1040px) {
    right: 32px;
    top: 380px;
    & img {
      width: 120px;
    }
  }
`;
