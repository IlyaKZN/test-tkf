import { checkResponse } from "./api-utils";
import { BASE_URL } from "../constants/constants";
import { getCookie } from "./cookie-utils";
import { TUser } from "../types/types";

export const getUser = (): Promise<TUser> => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  })
    .then(checkResponse)
    .then((res) => res);
};

export const getUsers = (): Promise<TUser[]> => {
  return fetch(`${BASE_URL}/api/users`, {
    method: "GET",
  })
    .then(checkResponse)
    .then((res) => res);
};

export const addFriend = (id: number): Promise<TUser> => {
  return fetch(`${BASE_URL}/friend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
    body: JSON.stringify({
      contactId: id,
    }),
  })
    .then(checkResponse)
    .then((res) => res);
}

export const deleteFriend = (id: number): Promise<TUser> => {
  return fetch(`${BASE_URL}/friend`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
    body: JSON.stringify({
      contactId: id,
    }),
  })
    .then(checkResponse)
    .then((res) => res);
}

export const patchFriend = (id: number, username: string): Promise<TUser> => {
  return fetch(`${BASE_URL}/api/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      username: username,
    }),
  })
    .then(checkResponse)
    .then((res) => res);
}
