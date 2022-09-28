const initialState = {
  loading: false,
  accounts: [],
  success: false,
};
const Accounts = (state = initialState, action) => {
  switch (action.type) {
    case "FetchAccounts":
      console.log("FetchAccounts");
      return { ...state, loading: true };
    case "Accounts_Loaded_Successfully":
      console.log("Accounts_Loaded_Successfully");
      return { ...state, accounts: action.response, loading: false };

    case "Accounts_Not_Loaded_Error":
      console.log("Accounts_Not_Loaded_Error");
      return { ...state, error: action.error, loading: false };
    case "CreateAccount":
      return { ...state, loading: true };
    case "Account Created Success":
      console.log("Account Created Success");
      state.accounts.push(action.response);
      return { ...state, loading: false, success: true };
    case "Account Created Failed":
      console.log("Account Created Failed");
      return { ...state, loading: false, success: false };
    default: {
      console.log("default");
      return state;
    }
  }
};

export default Accounts;
