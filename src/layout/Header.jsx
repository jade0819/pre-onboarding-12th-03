import { styled } from 'styled-components';
import { colors } from '../constants/colors';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <h3>한국임상정보</h3>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 18px;
  background-color: ${colors.white};
`;

const HeaderContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
