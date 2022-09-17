/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-undef */
// eslint-disable-next-line import/prefer-default-export
export const checkResponse = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};
