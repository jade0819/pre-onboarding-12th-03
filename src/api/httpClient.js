import axios from 'axios';
import { SEARCH_SUGGESTIONS_URL } from '../constants/suggestion';

class HttpClient {
  #baseURL;

  constructor(baseURL) {
    this.#baseURL = baseURL;
  }

  fetch(url, options = {}) {
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
