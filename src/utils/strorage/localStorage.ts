export function getLocalStorage<T>(value: string): T {
  let result;
  const valueLocalStorage = localStorage.getItem(value);
  if (valueLocalStorage) {
    result = JSON.parse(valueLocalStorage);
  }
  return result;
}

export function setLocalStorage<T>(key: string, value: T): T {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}
