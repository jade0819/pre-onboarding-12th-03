import { styled } from 'styled-components';
import { colors } from '../../constants/colors';

const SearchInput = ({ setIsFocused, keyword, searchInputChange, KeyboardNavigation }) => {
  return (
    <>
      <Input
        type="text"
        value={keyword}
        onChange={searchInputChange}
        onKeyDown={KeyboardNavigation}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="질환명을 입력해주세요."
      />
    </>
  );
};

export default SearchInput;

const Input = styled.input`
  flex-basis: 7;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  padding: 4px 20px;
  border: none;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: ${colors.white};
  }
`;
