import { styled } from 'styled-components';
import { colors } from '../../constants/colors';
import { useEffect, useState } from 'react';
import useSuggestion from '../../hooks/useSuggestion';
import SuggestionList from './SuggestionList';
import SearchInput from './SearchInput';
import Button from '../ui/Button';
import { BsXCircleFill } from 'react-icons/bs';
import { SEARCH_SUGGESTIONS_LENGTH } from '../../constants/suggestion';
import { koreanRegexCheck } from '../../utils/common';
import useKeyboardNavigation from '../../hooks/useKeyboardNavigation';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState('');

  const [state, dispatch, fetchSuggestion] = useSuggestion();
  const { error, datas } = state;

  const [selectedIndex, keyboardNavigation] = useKeyboardNavigation(datas, dispatch, setKeyword);

  const handleKeyEvent = e => {
    if (!isFocused) return;
    keyboardNavigation(e.keyCode);
  };

  useEffect(() => {
    if (!keyword) return;

    const delayDebounce = setTimeout(() => {
      if (keyword.length === 0) return;

      if (koreanRegexCheck(keyword)) {
        fetchSuggestion(keyword);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [keyword, isFocused]);

  return (
    <SearchWrraper>
      <SearchInner>
        <SearchContainer>
          <SearchInput
            setIsFocused={setIsFocused}
            keyword={keyword}
            onChange={e => setKeyword(e.target.value)}
            onKeyDown={handleKeyEvent}
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

const KeywordClearBtn = styled(BsXCircleFill)`
  flex-basis: 1;
  width: 22px;
  height: 22px;
  margin: 0 8px;
  color: ${colors.gray};
  cursor: pointer;
`;
