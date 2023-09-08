import { useState } from 'react';
import { SEARCH_SUGGESTIONS_LENGTH } from '../constants/suggestion';

const useKeyboardNavigation = (datas, dispatch, setKeyword) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const maxCount = SEARCH_SUGGESTIONS_LENGTH - 1;

  const keyboardNavigation = keyCode => {
    switch (keyCode) {
      case 38:
        if (selectedIndex === 0) setSelectedIndex(maxCount);
        else setSelectedIndex(prev => prev - 1);
        break;
      case 40:
        if (selectedIndex === maxCount) setSelectedIndex(0);
        else setSelectedIndex(prev => prev + 1);
        break;
      case 13:
        if (selectedIndex !== -1) setKeyword(datas[selectedIndex].sickNm);
        break;
      case 27:
        dispatch({ type: 'SET_DATA', payload: [] });
        setSelectedIndex(-1);
        break;
      default:
        break;
    }
  };

  return [selectedIndex, keyboardNavigation];
};

export default useKeyboardNavigation;
