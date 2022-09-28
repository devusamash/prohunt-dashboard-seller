import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../app/Actions/StockActions";
import  StocksTable  from "./StocksTable";
import {Link} from 'react-router-dom'
//import StocksTable from "./StocksTable";

const Stocks = () => {
  const [stocksCategory, setStocksCategory] = useState("all");
  const companyid = useSelector((state) => state.User.user.company.id);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.Stocks.items);
  const url = `companies/${companyid}/items`;
  console.log(stocksCategory);
  useEffect(() => {
    dispatch(getItems(url));
    console.log(items);
  }, []);
  const column = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name, record) => (
        <Link to={`/stockdetails/${record.id}`}>{name}</Link>
      ),
    },
    {
      title: "Item Id",
      dataIndex: "id",
    },
    {
      title: "Category",
      dataIndex: ["item_category", "name"],
    },
    {
      title: "SKU",
      dataIndex: "SKU",
    },
    // {
    //   title: "Stock no",
    //   dataIndex: ["stock", "id"],
    // },
  ];
  return (
    <StocksTable
      setStocksCategory={setStocksCategory}
      Columns={column}
      DataSource={items}
    />
  );
};

export default Stocks;
