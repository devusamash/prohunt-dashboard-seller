import { Types } from "./ActionsConstants";

export const getAlltranactions = (url) => {
  return {
    type: Types.FetchTransaction,
    url: url,
  };
};

export const addtransaction = (url, payload) => {
  return {
    type: Types.CreateTransaction,
    url: url,
    payload: payload,
  };
};

export const addCategory = (url, payload) => {
  return {
    type: Types.AddTransactionCategory,
    url: url,
    payload: payload,
  };
};
export const getCategory = (url) => {
  return {
    type: Types.GetTransactionCategory,
    url: url,
  };
};
