import { Types } from "./ActionsConstants";

export const GetAllAccounts = (url) => {
  return {
    type: Types.FetchAccounts,
    url: url,
  };
};

export const createAccount = (url, payload) => {
  return {
    type: Types.CreateAccount,
    url: url,
    payload: payload,
  };
};
