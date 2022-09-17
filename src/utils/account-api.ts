import { checkResponse } from './api-utils';
import { BASE_URL } from '../constants/constants';
import { TAPILogin } from '../types/api.types';

// eslint-disable-next-line import/prefer-default-export
export const loginUser = (email: string, password: string): Promise<TAPILogin> => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(checkResponse)
    .then((res) => res);
}
  
