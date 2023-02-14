export const getLocalStorage = <T>(key: string): T =>
  localStorage.getItem(key) as T;
export const setLocalStorage = (key: string, value: string): void =>
  localStorage.setItem(key, value);
