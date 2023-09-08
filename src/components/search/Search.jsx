import { useEffect } from 'react';
import useSuggestion from '../../hooks/useSuggestion';
import SuggestionList from './SuggestionList';

const Search = () => {
  const [state, dispatch, fetchSuggestion] = useSuggestion();
  const { isLoading, error, datas } = state;

  useEffect(() => {
    fetchSuggestion('암');
  }, []);

  return (
    <div>
      {error && <p>error!</p>}
      {isLoading && <p>검색어 없음</p>}
      {!(isLoading || error) && <SuggestionList datas={datas} />}
    </div>
  );
};

export default Search;
