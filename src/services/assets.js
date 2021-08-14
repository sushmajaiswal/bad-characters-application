import { API } from "../backend";

export const getAllCharacters = (nameKey, category) => {
  return fetch(`${API}characters?name=${nameKey}&category=${category}`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getAllCharactersLength = (nameKey, category) => {
  return fetch(`${API}characters`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getPaginatedCharacters = (limit, offset) => {
  return fetch(`${API}characters?limit=${limit}&offset=${offset}`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getCharactersViaId = (char_id) => {
  return fetch(`${API}characters/${char_id}`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const filterCharacters = (categoryId) => {
  return fetch(`${API}characters?category=${categoryId}`, { method: "GET" })
  .then((response) => {
    console.log("filters category")
    return response.json();
  })
  .catch((err) => console.log(err));
};

export const paginatedFilterCharacters = (categoryId, limit, offset) => {
  return fetch(`${API}characters?category=${categoryId}&limit=${limit}&offset=${offset}`, { method: "GET" })
  .then((response) => {
    console.log("filters category")
    return response.json();
  })
  .catch((err) => console.log(err));
};

export const getCharacterViaName = (nameKey, limit, offset) => {
  return fetch(`${API}characters?name=${nameKey}&limit=${limit}&offset=${offset}`, { method: "GET" })
  .then((response) => {
    console.log("Search via name")
    return response.json();
  })
  .catch((err) => console.log(err));
};
  

