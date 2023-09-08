import { styled } from 'styled-components';
import { colors } from '../../constants/colors';
import { useEffect } from 'react';
import useSuggestion from '../../hooks/useSuggestion';
import SuggestionList from './SuggestionList';
import SearchInput from './SearchInput';
import Button from '../ui/Button';
import { BsXCircleFill } from 'react-icons/bs';

const Search = () => {
  const [state, dispatch, fetchSuggestion] = useSuggestion();
  const { isLoading, error, datas } = state;

  useEffect(() => {
    fetchSuggestion('암');
  }, []);

  if (error) return <p>error!</p>;
  if (isLoading) return <p>검색어 없음</p>;

  return (
    <SearchWrraper>
      <SearchInner>
        <SearchContainer>
          <SearchInput />
          <KeywordClearBtn />
          <Button />
        </SearchContainer>
        <SuggestionList datas={datas} />
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
`;

const KeywordClearBtn = styled(BsXCircleFill)`
  width: 22px;
  height: 22px;
  margin: 0 8px;
  color: ${colors.gray};
  cursor: pointer;
`;
