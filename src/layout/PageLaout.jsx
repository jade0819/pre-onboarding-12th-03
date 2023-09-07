import { styled } from 'styled-components';
import { colors } from '../constants/colors';

const PageLayout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default PageLayout;

const LayoutContainer = styled.div`
  position: relative;
  width: calc(100vw - (100vw - 100%));
  height: 100vh;
  background-color: ${colors.background};
`;
