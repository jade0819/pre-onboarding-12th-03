export const initialState = {
  isLoading: false,
  error: null,
  datas: [],
};

export const suggestionReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_DATA':
      return { ...state, datas: action.payload };
    default:
      return state;
  }
};
