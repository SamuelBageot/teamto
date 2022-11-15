import axios from 'axios'

type requestAction = {
  page?: string;
  id: string;
}

export function requestGetCharacters(params?: requestAction) {
  return axios.request({
    method: 'GET',
    url: 'https://www.swapi.tech/api/people',
    params
  })
}

export function requestGetCharacterDetails(params?: requestAction) {
    return axios.request({
      method: 'GET',
      url: `https://www.swapi.tech/api/people/${params?.id}`
    })
  }
