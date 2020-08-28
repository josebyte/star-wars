const baseUrl = 'https://swapi.dev/api';

export const environment = {
  production: true,
  api: {
    login: `${baseUrl}/login`, // endpoint doesn't exists
    register: `${baseUrl}/register`, // endpoint doesn't exists
    ships: `${baseUrl}/starships/`,
    films: `${baseUrl}/films/`,
    pilot: `${baseUrl}/people/`,
  }
};
