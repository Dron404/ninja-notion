export function getLocalStorage<T>(value: string): Array<T> {
  let result;
  const valueLocalStorage = localStorage.getItem(value);
  if (valueLocalStorage) {
    result = JSON.parse(valueLocalStorage);
  }
  return result;
}

export function setLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
