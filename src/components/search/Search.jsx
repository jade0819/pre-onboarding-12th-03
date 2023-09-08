import { useEffect, useReducer } from 'react';
import { getSearchSuggestions } from '../../api/search';
import { suggestionReducer, initialState } from '../../reducer/suggestionReducer';
import SuggestionList from './SuggestionList';
import { SEARCH_SUGGESTIONS_LENGTH } from '../../constants/suggestion';

const Search = () => {
  const [state, dispatch] = useReducer(suggestionReducer, initialState);
  const { isLoading, error, datas } = state;

  const fetchSuggestion = async () => {
    try {
      const newData = await getSearchSuggestions('암');
      const limitData = newData.slice(0, SEARCH_SUGGESTIONS_LENGTH);

      dispatch({ type: 'SET_DATA', payload: limitData });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  useEffect(() => {
    fetchSuggestion();
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
