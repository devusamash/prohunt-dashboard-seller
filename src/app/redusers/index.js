import { combineReducers } from "redux";
import Companies from "./CompaniesReducer";
import User from "./User";
import Accounts from "./AccountsReducer";
import Transactions from "./TransactionReducer";
import Stocks from "./StocksReducer";

const rootReducer = combineReducers({
  Companies,
  User,
  Accounts,
  Transactions,
  Stocks,
});
export default rootReducer;
