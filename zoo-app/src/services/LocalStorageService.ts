const LOCALSTORAGE_KEY = "animals";

export const getList = <T>(): T[] => {
  let listFromLS = localStorage.getItem(LOCALSTORAGE_KEY) || "[]";
  return JSON.parse(listFromLS) as T[];
};

export const save = <T>(data: T): void => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};
