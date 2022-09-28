import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Radio, Table } from "antd";
import { Pagination } from "antd";
import { useEffect } from "react";

export const TransactionTable = ({
  DataSource,
  setTransactionType,
  setTransactionPage,
}) => {
  const totalPages = useSelector((state) => state.Transactions.totalPages);
  useEffect(() => {
    console.log(totalPages);
  }, []);
  const Columns = [
    {
      title: "Transaction ID",
      dataIndex: "id",
    },
    {
      title: "Account",
      dataIndex: "account_id",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "transaction_type",
    },
    {
      title: "Category",
      dataIndex: ["transaction_category", "name"],
    },
  ];
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col span={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Transactions Table"
              extra={
                <>
                  <Radio.Group
                    onChange={(e) => setTransactionType(e.target.value)}
                    defaultValue="all"
                  >
                    <Radio.Button value="all">All</Radio.Button>
                    <Radio.Button value="debit">Debit</Radio.Button>
                    <Radio.Button value="credit">Credit</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={Columns}
                  dataSource={DataSource}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Pagination
            defaultCurrent={1}
            total={totalPages * 10}
            onChange={(value) => setTransactionPage(value)}
          />
        </Row>
      </div>
    </>
  );
};
