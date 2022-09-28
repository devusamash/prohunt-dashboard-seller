import React from "react";
import { Typography, Statistic, Row, Col, Button } from "antd";
import { AccountBookTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Accountfragment = (props) => {
  return (
    <div className="account">
      <Typography.Title level={3}>
        <span>
          <AccountBookTwoTone />
        </span>{" "}
        {props.account.name}
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Transactions"
            value={props.account.transactions.length}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Account Balance "
            value={props.account.balance}
            precision={2}
          />
        </Col>
      </Row>
      <Row justify="start">
        <Col span={24} offset={7}>
          <Button style={{ margin: 10 }} type="primary">
            <Link to={`/addtransaction/${props.account.id}`}>
              Make Transaction
            </Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Accountfragment;
