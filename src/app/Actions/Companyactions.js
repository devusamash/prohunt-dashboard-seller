import { Types } from "./ActionsConstants";
export const allCompanies = () => {
  return {
    type: Types.FetchCompanies,
  };
};
