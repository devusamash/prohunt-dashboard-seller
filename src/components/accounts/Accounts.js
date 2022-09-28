import React from "react";
import { Divider, Button, Row, Col, Spin, Table, Card } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserContext } from "../RequireAuth";

import "../../assets/styles/accounts.css";
import { GetAllAccounts } from "../../app/Actions/AccountsActions";
const Accounts = () => {
  const dispatch = useDispatch();
  const currentUser = useContext(UserContext)
  const loading = useSelector((state) => state.Accounts.loading);
  const accountsArray = useSelector((state) => state.Accounts.accounts);
  const accountsUrl = `companies/${currentUser.company.id}/accounts`;
  const [url, setUrl] = useState(accountsUrl)
  useEffect(()=>{
    if(currentUser){
      setUrl(accountsUrl)
    }
    console.log(currentUser)
  },[currentUser])
  useEffect(() => {
    dispatch(GetAllAccounts(url));
  }, [currentUser]);
  const [accounts, setAccounts] = useState(accountsArray);
  useEffect(() => {
    setAccounts(accountsArray);
  }, [accountsArray]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name, record) => (
        <Link to={`/showaccount/${record.id}`}>{name}</Link>
      ),
    },
    {
      title: "Balance",
      dataIndex: "balance",
    },
  ];

  return (
    <>
      <Spin spinning={loading} size="large" delay={300}>
        <Row justify="end">
          <Col span={24}>
            <Button type="primary">
              <Link to="/addaccount">Add Account</Link>
            </Button>
            <Divider style={{ margin: "15px 0px" }} />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={21}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Accounts Table"
            >
              <Table
                columns={columns}
                dataSource={accounts}
                className="ant-border-space"
              ></Table>
            </Card>
          </Col>
        </Row>
      </Spin>
    </>
  );
};

export default Accounts;
