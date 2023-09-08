import { useReducer } from 'react';
import { initialState, suggestionReducer } from '../reducer/suggestionReducer';
import { getSearchSuggestions } from '../api/search';
import { SEARCH_SUGGESTIONS_LENGTH } from '../constants/suggestion';

const useSuggestion = () => {
  const [state, dispatch] = useReducer(suggestionReducer, initialState);

  const fetchSuggestion = async keyword => {
    try {
      const newData = await getSearchSuggestions(keyword);
      const limitData = newData.slice(0, SEARCH_SUGGESTIONS_LENGTH);

      dispatch({ type: 'SET_DATA', payload: limitData });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return [state, dispatch, fetchSuggestion];
};

export default useSuggestion;
