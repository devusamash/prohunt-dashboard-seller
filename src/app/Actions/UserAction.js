import { Types } from "./ActionsConstants";

export const signUp = (payload) => {
  return {
    type: Types.RegisterUser,
    payload: payload,
  };
};

export const LogIn = (payload, url) => {
  return {
    type: Types.LoginUser,
    url: url,
    payload: payload,
  };
};

export const LogOut = (url) => {
  return {
    type: Types.LogoutUser,
    url: url,
  };
};

export const getUser = (url) => {
  return {
    type: Types.GetUser,
    url: url,
  };
};
