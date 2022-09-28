import { put, call, all, takeEvery } from "redux-saga/effects";
import {
  getMethod,
  BaseUrl,
  postMethod,
  deleteMethod,
} from "../../API/AuthService";
import { getData, postData } from "../../API/DataService";
import {Types} from '../Actions/ActionsConstants'
function* fetchCompanies() {
  try {
    const data = yield call(() => getMethod(`${BaseUrl}companies`));
    yield put({ type: "DATA_RECIEVED", data: data.data });
  } catch (error) {
    yield put({ type: "FETCH_ERROR", error: error });
  }
}
function* registerUser(action) {
  try {
    const response = yield call(() =>
      postMethod(`${BaseUrl}users`, action.payload)
    );
    yield put({
      type: "User registered",
      response: response,
      message: "User registered Successfully",
    });
  } catch (error) {
    yield put({
      type: "User registered Error",
      error: error,
      message: "Some error occureed",
    });
  }
}
function* signInUser(action) {
  try {
    const response = yield call(() =>
      postMethod(`${BaseUrl}${action.url}`, action.payload)
    );
    yield put({
      type: "User_Logged_In_Success",
      response: response,
      message: "User loggedIn Successfully",
    });
  } catch (error) {
    yield put({
      type: "User_Logged_In_Error",
      error: error,
      message: "Some error occureed",
    });
  }
}

function* signOutUser(action) {
  try {
    const response = yield call(() => deleteMethod(`${BaseUrl}${action.url}`));
    yield put({
      type: "User_Logged_Out_Success",
      response: response,
      message: "User loggedOut Successfully",
    });
  } catch (error) {
    yield put({
      type: "User_Logged_Out_Error",
      error: error,
      message: "Some error occureed",
    });
  }
}
function* fetchAccounts(action) {
  try {
    const response = yield call(() => getData(`${BaseUrl}${action.url}`));
    yield put({
      type: "Accounts_Loaded_Successfully",
      response: response.data,
      message: "Actions loaded successfully",
    });
  } catch (error) {
    yield put({
      type: "Accounts_Not_Loaded_Error",
      error: error,
      message: "Some error occureed",
    });
  }
}
function* fetchTransactions(action) {
  try {
    const response = yield call(() => getData(`${BaseUrl}${action.url}`));
    console.log("reached s");
    yield put({
      type: "Transactions_Loaded_Successfully",
      response: response,
      message: "Transactions loaded successfully",
    });
  } catch (error) {
    console.log("reached f");
    yield put({
      type: "Transactions_Not_Loaded_Error",
      error: error,
      message: "Some error occureed",
    });
  }
}
function* createAccount(action) {
  try {
    const response = yield call(() =>
      postData(`${BaseUrl}${action.url}`, action.payload)
    );
    yield put({ type: "Account Created Success", response: response.data });
  } catch (error) {
    yield put({ type: "Account Created Failed", error: error });
  }
}
function* fetchItems(action) {
  try {
    const response = yield call(() => getData(`${BaseUrl}${action.url}`));
    console.log("reached s");
    yield put({
      type: "Items_Loaded_Successfully",
      response: response,
      message: "Items loaded successfully",
    });
  } catch (error) {
    console.log("reached f");
    yield put({
      type: "Items_Not_Loaded_Error",
      error: error,
      message: "Some error occureed",
    });
  }
}
function* FetchStocks(action) {
  try {
    const response = yield call(() => getData(`${BaseUrl}${action.url}`));
    yield put({
      type: "Stocks_Loaded_Successfully",
      response: response,
      message: "stocks loaded successfully",
    });
  } catch (error) {
    yield put({
      type: "Stocks_Not_Loaded_Error",
      error: error,
      message: "Some error occureed",
    });
  }
}
function* createStocks(action) {
  try {
    const response = yield call(() =>
      postData(`${BaseUrl}${action.url}`, action.payload)
    );
    yield put({
      type: "Stock_Created_Successfully",
      response: response,
      message: "stocks loaded successfully",
    });
  } catch (error) {
    yield put({
      type: "Stock_Not_Created_Error",
      error: error,
      message: "Some error occureed",
    });
  }
}
function* createtransaction(action) {
  try {
    const response = yield call(() =>
      postData(`${BaseUrl}${action.url}`, action.payload)
    );
    yield put({
      type: "Transaction_Created_Successfully",
      response: response,
      message: "Transaction created successfully",
    });
  } catch (error) {
    yield put({
      type: "Transaction_Not_Created_Error",
      error: error,
      message: "Some error occureed",
    });
  }
}

function* createTransactionCategory(action) {
  try {
    const response = yield call(() =>
      postData(`${BaseUrl}${action.url}`, action.payload)
    );
    yield put({
      type: "TransactionCategory_Created_Successfully",
      response: response,
      message: "Transaction created successfully",
    });
  } catch (error) {
    yield put({
      type: "TransactionCategory_Not_Created_Error",
      error: error,
      message: "Some error occureed",
    });
  }
}
function* fetchcategories(action) {
  try {
    const response = yield call(() => getData(`${BaseUrl}${action.url}`));
    yield put({
      type: "TransactionCategory_Loaded_Successfully",
      response: response,
      message: "categories loaded successfully",
    });
  } catch (error) {
    yield put({
      type: "TransactionCategory_Not_Loaded_Error",
      error: error,
      message: "Some error occureed",
    });
  }
}
function* getUser(action){
  try{ 
 const response = yield call(()=>getData(`${BaseUrl}${action.url}`));
 yield put({
   type: "user-loaded",
   response: response,
 })
} catch(error){
  yield put({
    type: "user-not-loaded",
    error: error
  })
}
}

function* getItem(action){
  try{ 
    const response = yield call(()=>getData(`${BaseUrl}${action.url}`));
    yield put({
      type: "item-loaded",
      response: response,
    })
   } catch(error){
     yield put({
       type: "item-not-loaded",
       error: error
     })
   }
}
function* addItem(action) {
  try {
    const response = yield call(() =>
      postData(`${BaseUrl}${action.url}`, action.payload)
    );
    yield put({
      type: "Item_added_Successfully",
      response: response,
      message: "Item created successfully",
    });
  } catch (error) {
    yield put({
      type: "Item_not_added",
      error: error,
      message: "Some error occureed",
    });
  }
}
function* getItemCategories(action){
  try{ 
    const response = yield call(()=>getData(`${BaseUrl}${action.url}`));
    yield put({
      type: "item-categories-loaded",
      response: response,
    })
   } catch(error){
     yield put({
       type: "item-categories-not-loaded",
       error: error
     })
   }
}

function* fetchStockUnits(action){
  try{ 
    const response = yield call(()=>getData(`${BaseUrl}${action.url}`));
    yield put({
      type: "Stock-units-loaded",
      response: response,
    })
   } catch(error){
     yield put({
       type: "Stock-units-not-loaded",
       error: error
     })
   }
}

function* actionWatcher() {
  yield takeEvery("loadCompanies", fetchCompanies);
  yield takeEvery("sign_up", registerUser);
  yield takeEvery("Login", signInUser);
  yield takeEvery("LogoutUser", signOutUser);
  yield takeEvery("FetchAccounts", fetchAccounts);
  yield takeEvery("CreateAccount", createAccount);
  yield takeEvery("FetchTransactions", fetchTransactions);
  yield takeEvery("Fetch Items", fetchItems);
  yield takeEvery("Fetch Stocks", FetchStocks);
  yield takeEvery("Create Stock", createStocks);
  yield takeEvery("CreateTransaction", createtransaction);
  yield takeEvery("AddTransactionCategory", createTransactionCategory);
  yield takeEvery("GetTransactionCategory", fetchcategories);
  yield takeEvery(Types.GetUser, getUser);
  yield takeEvery(Types.FetchItem, getItem);
  yield takeEvery(Types.addItem, addItem);
  yield takeEvery(Types.getItemCategory, getItemCategories)
  yield takeEvery(Types.fetchStockUnits, fetchStockUnits)
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
