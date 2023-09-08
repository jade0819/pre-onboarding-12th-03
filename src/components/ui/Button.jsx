import { styled } from 'styled-components';
import { colors } from '../../constants/colors';
import { FaSearch } from 'react-icons/fa';

const Button = () => {
  return (
    <SearchBtn>
      <SearchIcon />
    </SearchBtn>
  );
};

export default Button;

const SearchBtn = styled.button`
  flex-basis: 1;
  width: 38px;
  height: 38px;
  background-color: ${colors.primary};
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const SearchIcon = styled(FaSearch)`
  width: 20px;
  height: 20px;
  color: ${colors.white};
`;
