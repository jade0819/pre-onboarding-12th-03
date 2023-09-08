import axios from 'axios';
import { SEARCH_SUGGESTIONS_URL } from '../constants/search';

class HttpClient {
  #baseURL;

  constructor(baseURL) {
    this.#baseURL = baseURL;
  }

  searchSuggestions(url, options = {}) {
    return axios.get(this.#baseURL + url, {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
      },
    });
  }
}

export const httpClient = new HttpClient(SEARCH_SUGGESTIONS_URL);
