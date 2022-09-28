import React from "react";
import Stockfragment from "./StockFragment";
import { Divider, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../assets/styles/accounts.css";
import { getStocks } from "../app/Actions/StockActions";
const AllStocks = () => {
  const dispatch = useDispatch();
  const companyid = useSelector((state) => state.User.user.company.id);
  const url = `companies/${companyid}/stocks`;
  const stocksarray = useSelector((state) => state.Stocks.stocks);
  const [stocks, setStocks] = useState(stocksarray);

  useEffect(() => {
    dispatch(getStocks(url));
  }, []);
  useEffect(() => {
    setStocks(stocksarray);
  }, [stocksarray]);

  return (
    <>
      <Row justify="end">
        <Col span={24}>
          <Button type="primary">
            <Link to="/addstocks">Create new Stock</Link>
          </Button>
          <Divider style={{ margin: "15px 0px" }} />
        </Col>
      </Row>
      <Row gutter={[10, 10]}>
        {stocks ? stocks.map((stock, index) => (
          <Col span={8} key={index}>
            <Stockfragment stock={stock} />
          </Col>
        )): ''}
      </Row>
    </>
  );
};

export default AllStocks;
