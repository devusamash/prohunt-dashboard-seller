import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Radio, Table, Divider, Button } from "antd";
// import { Pagination } from 'antd';
import { Link } from "react-router-dom";
// const categories = ['all','category1','category2','category3']
const StocksTable = ({ Columns, DataSource }) => {
  const { stockId } = useParams();

  console.log(stockId);
  return (
    <>
      <div className="tabled">
        <Row justify="end">
          <Col span={24}>
            <Button type="primary">
              <Link to="/addItem">Create new Item</Link>
            </Button>
            <Divider style={{ margin: "15px 0px" }} />
          </Col>
        </Row>
        <Row gutter={[24, 0]}>
          <Col span={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Items"
              extra={
                <>
                  <Radio.Group
                    onChange={(e) => console.log(e.target.value)}
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
        {/* <Row justify="center">
          <Pagination defaultCurrent={1} total={4} onChange={(value)=>setStocksPage(value)}/>
          </Row> */}
      </div>
    </>
  );
};

export default StocksTable;
