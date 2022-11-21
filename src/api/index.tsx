import axios from "axios";

type requestAction = {
  page?: string;
  id?: string;
  // limit?: string;
  search?: string;
};

export function requestGetCharacters(params?: requestAction) {
  return axios.request({
    method: "GET",
    url: "https:/swapi.dev/api/people",
    params,
  });
}

export function requestGetCharacterDetails(params?: requestAction) {
  return axios.request({
    method: "GET",
    url: `https://swapi.dev/api/people/${params?.id}`,
  });
}

export function requestSearchCharacters(params?: requestAction) {
  console.log(params)
  return axios.request({
    method: "GET",
    url: `https://swapi.dev/api/people/?search=${params?.search}`,
  });
}

export function requestGetHomeworlds(params?: requestAction) {
  return axios.request({
    method: "GET",
    url: "https:/swapi.dev/api/planets",
    params,
  });
}

export function requestGetHomeworldDetails(params?: requestAction) {
  return axios.request({
    method: "GET",
    url: `https://swapi.dev/api/planets/${params?.id}`,
  });
}