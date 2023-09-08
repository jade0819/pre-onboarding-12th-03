import { styled } from 'styled-components';
import { colors } from '../../constants/colors';
import { useState } from 'react';
import useSuggestion from '../../hooks/useSuggestion';
import useKeyboardNavigation from '../../hooks/useKeyboardNavigation';
import useDebounce from '../../hooks/useDebounce';
import SuggestionList from './SuggestionList';
import Button from '../ui/Button';
import { BsXCircleFill } from 'react-icons/bs';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState('');

  const [state, dispatch, fetchSuggestion] = useSuggestion();
  const { error, datas } = state;

  const [selectedIndex, keyboardNavigation] = useKeyboardNavigation(datas, dispatch, setKeyword);

  useDebounce(keyword, fetchSuggestion);

  const handleKeyEvent = e => {
    if (!isFocused) return;
    keyboardNavigation(e.keyCode);
  };

  return (
    <SearchWrraper>
      <SearchInner>
        <SearchContainer>
          <SearchInput
            type="text"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            onKeyDown={handleKeyEvent}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="질환명을 입력해주세요."
          />
          {keyword && <KeywordClearBtn onClick={() => setKeyword('')} />}
          <Button />
        </SearchContainer>
        {isFocused && <SuggestionList error={error} datas={datas} selectedIndex={selectedIndex} />}
      </SearchInner>
    </SearchWrraper>
  );
};

export default Search;

const SearchWrraper = styled.div`
  width: 100%;
  padding: 20px 0;
`;
const SearchInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  max-width: 490px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 42px;
  background-color: ${colors.white};
  box-sizing: border-box;
`;

const SearchInput = styled.input`
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

const KeywordClearBtn = styled(BsXCircleFill)`
  flex-basis: 1;
  width: 22px;
  height: 22px;
  margin: 0 8px;
  color: ${colors.gray};
  cursor: pointer;
`;
