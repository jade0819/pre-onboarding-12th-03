import { httpClient } from '../HttpClient';

export const getSearchSuggestions = async keyword => {
  console.info('calling api');
  const response = await httpClient.fetch('data', {
    params: {
      q: keyword,
    },
  });

  return response.data;
};
