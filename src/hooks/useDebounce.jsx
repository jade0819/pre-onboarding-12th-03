import { useEffect } from 'react';
import { koreanRegexCheck } from '../utils/common';

const DEBOUNCE_TIME_MS = 400;

const useDebounce = (keyword, fetchFn) => {
  useEffect(() => {
    if (!keyword) return;

    const delayDebounce = setTimeout(() => {
      if (keyword.length === 0) return;

      if (koreanRegexCheck(keyword)) {
        fetchFn(keyword);
      }
    }, DEBOUNCE_TIME_MS);

    return () => clearTimeout(delayDebounce);
  }, [keyword]);
};

export default useDebounce;
