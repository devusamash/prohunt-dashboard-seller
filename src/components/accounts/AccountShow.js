import React from "react";
import { Row, Col, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { TransactionTable } from "../Transactions/TransactionTable";
import { getAlltranactions } from "../../app/Actions/TransactionActions";
const AccountShow = () => {
  const dispatch = useDispatch();
  const companyid = useSelector((state) => state.User.user.company.id);
  const transactions = useSelector((state) => state.Transactions.transactions);
  const { id } = useParams();
  const url = () => {
    if (transaction_type == "all")
      return `companies/${companyid}/accounts/${id}/transactions?page=${transactionPage}`;
    else
      return `companies/${companyid}/accounts/${id}/transactions?&page=${transactionPage}`;
  };
  const [transaction_type, setTransactionType] = useState("all");
  const [transactionPage, setTransactiosPage] = useState(1);
  useEffect(() => {
    dispatch(getAlltranactions(url()));
    console.log(transactions);
    console.log(url());
  }, [transaction_type, transactionPage]);

  return (
    <>
      <Row justify="end">
        <Col span={24}>
          <Button type="primary">
            <Link to={`/addtransaction/${id}`}>Add Transaction</Link>
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

export default AccountShow;
