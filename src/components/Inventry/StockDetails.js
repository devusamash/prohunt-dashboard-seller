import React, { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { fetchitem } from '../../app/Actions/StockActions';
import { useDispatch, useSelector } from 'react-redux';
import {Row, Col,Button,Divider, Card, Table} from 'antd'
const StockDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const companyid = useSelector((state) => state.User.user.company.id);
    const url = `/companies/${companyid}/items/${id}`
    const item = useSelector(state=>state.Stocks.item)
    console.log(item)
    useEffect(()=>{
        dispatch(fetchitem(url))
    },[])
    const column = [
      {
        title: "Stock Id",
        dataIndex: "id",
      },
      {
        title: "Batch no",
        dataIndex:  "batch_no",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
      },
      {
        title: "Note",
        dataIndex: "note",
      },
    ];
    return (
        <>
                 <Row justify="end">
        <Col span={24}>
          <Button type="primary">
            <Link to={`/addstock/${id}`} >
              Add Stock
            </Link>
          </Button>
          <Divider style={{ margin: "15px 0px" }} />
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
          <Col span={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title={item.name}
            >
              <div className="table-responsive">
                <Table
                  columns={column}
                  dataSource={item.stocks}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>

        </>
    )
}

export default StockDetails
