import React from "react";
import {
  SignUp,
  SignIn,
  Dashboard,
  Accounts,
  Transactions,
  AddTransaction,
  Addaccount,
  Stocks,
  AllStocks,
  AddStock,
  StocksTable,
  AddItem,
  AddTransactionCategories,
  AccountShow,
  RequireAuth,
  StockDetails,
} from "./components/index";
import Main from "./components/layout/Main";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
function App() {
  function isLoggedIn() {
    if (localStorage.getItem("Token")) {
      return true;
    }

    return false;
  }
  function alwasyslogged() {
    return true;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/sign-up" exact component={SignUp} />
          <Route exact path="/" component={SignIn} />
          <Main>
            <Route
              path="/dashboard"
              render={() =>
                alwasyslogged() ? (
                  <Dashboard />
                ) : (
                  <Redirect exact to="/sign-up" />
                )
              }
            />
            <Route
              exact
              path="/accounts"
              render={() =>
                isLoggedIn() ? (
                  <RequireAuth>
                    {" "}
                    <Accounts />{" "}
                  </RequireAuth>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/transactions"
              render={() =>
                isLoggedIn() ? <Transactions /> : <Redirect to="/" />
              }
            />
            <Route
              exact
              path="/addtransaction/:accountid"
              render={() =>
                isLoggedIn() ? <AddTransaction /> : <Redirect to="/" />
              }
            />
            <Route
              exact
              path="/addaccount"
              render={() =>
                isLoggedIn() ? <Addaccount /> : <Redirect to="/" />
              }
            />
            <Route
              exact
              path="/stocks"
              render={() => (isLoggedIn() ? <Stocks /> : <Redirect to="/" />)}
            />
            <Route exact path="/allstocks" component={AllStocks} />
            <Route
              exact
              path="/addstock/:id"
              render={() => (isLoggedIn() ? <AddStock /> : <Redirect to="/" />)}
            />
            <Route
              exact
              path="/stockstable/:stockId"
              render={() =>
                isLoggedIn() ? <StocksTable /> : <Redirect to="/" />
              }
            />
            <Route
              exact
              path="/addItem"
              render={() => (isLoggedIn() ? <AddItem /> : <Redirect to="/" />)}
            />
            <Route
              exact
              path="/addtransactioncategory"
              render={() =>
                isLoggedIn() ? (
                  <AddTransactionCategories />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/showaccount/:id"
              render={() =>
                isLoggedIn() ? <AccountShow /> : <Redirect to="/" />
              }
            />
            <Route
              exact
              path="/stockdetails/:id"
              render={() =>
                isLoggedIn() ? <StockDetails /> : <Redirect to="/" />
              }
            />
          </Main>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
