const initialState = {
  loading: false,
  transactions: [],
  transactionCategories: [],
  totalPages: 0,
  error: [],
  message: "",
  success: false,
};
const Transactions = (state = initialState, action) => {
  switch (action.type) {
    case "Transactions_Loaded_Successfully":
      console.log("Transactions_Loaded_Successfully");
      console.log(action.response);
      return {
        ...state,
        transactions: action.response.data,
        totalPages: action.response.headers.totalpages,
        success: false,
      };

    case "Transactions_Not_Loaded_Error":
      console.log("Transactions_Not_Loaded_Error");
      console.log(action);
      return {
        ...state,
        error: action.error,
        transactions: [],
        success: false,
      };
    case "CreateTransaction":
      return { ...state, loading: true, success: false };
    case "Transaction_Created_Successfully":
      console.log("Transaction_Created_Successfully");
      return {
        ...state,
        loading: false,
        message: action.messsage,
        success: true,
      };
    case "Transaction_Not_Created_Error":
      console.log("Transaction_Not_Created_Error");
      return {
        ...state,
        loading: false,
        message: action.messsage,
        success: false,
      };
    case "TransactionCategory_Created_Successfully":
      console.log("TransactionCategory_Created_Successfully");
      return { ...state, loading: false, success: true };
    case "TransactionCategory_Not_Created_Error":
      console.log("TransactionCategory_Not_Created_Error");
      return { ...state, loading: false, success: false };
    case "TransactionCategory_Loaded_Successfully":
      return {
        ...state,
        loading: false,
        transactionCategories: action.response.data,
      };
    case "TransactionCategory_Not_Loaded_Error":
      return { ...state, loading: false, error: action.error };
    default: {
      console.log("default");
      return state;
    }
  }
};

export default Transactions;
