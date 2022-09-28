import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getAlltranactions } from "../../app/Actions/TransactionActions";
import { TransactionTable } from "./TransactionTable";
import { Row, Col, Divider, Button } from "antd";
import { Link } from "react-router-dom";

const Transactions = () => {
  const [transaction_type, setTransactionType] = useState("all");
  const [transactionPage, setTransactiosPage] = useState(1);
  const companyid = useSelector((state) => state.User.user.company.id);
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.Transactions.transactions);
  const transactionUrl = () => {
    if (transaction_type == "all")
      return `companies/${companyid}/alltransactions`;
    else
      return `companies/${companyid}/alltransactions?type=${transaction_type}&page=${transactionPage}`;
  };
  useEffect(() => {
    dispatch(getAlltranactions(transactionUrl()));
    console.log(transactions);
  }, [transaction_type, transactionPage]);

  return (
    <>
      <Row justify="end">
        <Col span={24}>
          <Button type="primary">
            <Link to="/addtransactioncategory">
              Create new Transaction Categories
            </Link>
          </Button>
          <Divider style={{ margin: "15px 0px" }} />
        </Col>
      </Row>
      <TransactionTable
        setTransactionType={setTransactionType}
        setTransactionPage={setTransactiosPage}
        DataSource={transactions}
      />
    </>
  );
};

export default Transactions;
