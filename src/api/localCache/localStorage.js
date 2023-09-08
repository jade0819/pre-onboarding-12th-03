import { CACHE_EXPIRE_TIME } from '../../constants/localCache';

export class localStorageCache {
  #keyName;

  constructor() {
    this.#keyName = 'condition_';
  }

  save(keyword, data) {
    const currentTime = new Date().getTime();
    const expirationTime = currentTime + CACHE_EXPIRE_TIME * 1000;

    const key = this.#keyName + keyword;
    const cacheData = {
      value: data,
      expiration: expirationTime,
    };

    localStorage.setItem(key, JSON.stringify(cacheData));
  }

  get(keyword) {
    const key = this.#keyName + keyword;
    const data = localStorage.getItem(key);

    if (!data) return null;

    const parsedData = JSON.parse(data);
    const currentTime = new Date().getTime();

    if (parsedData.expiration && parsedData.expiration < currentTime) {
      localStorage.removeItem(key);
      return null;
    }

    return parsedData.value;
  }
}
