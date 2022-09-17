import { TUser } from "./types";

export type TAPILogin = {
  user: TUser;
  token: string;
};

export type TAPIError = {
  message: string
  statusCode: number;
};