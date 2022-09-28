import React, {useEffect} from "react";
import { Card, Input, InputNumber, Form, Button, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createStock } from "../../app/Actions/StockActions";
import { useParams, useHistory } from "react-router-dom";

const AddStock = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const companyid = useSelector((state) => state.User.user.company.id);
  const success = useSelector((state) => state.Stocks.success);
  const { id } = useParams()
  const url = `companies/${companyid}/items/${id}/stocks`;

  const onFinish = (values) => {
    const payload = JSON.stringify({
      stock: { ...values, item_id: id },
    });
    console.log(payload);
    dispatch(createStock(url, payload));
    values = {};
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    if (success) {
      history.push(`/stockdetails/${id}`);
    }
  }, [success])

  return (
    <>
      <Row justify="center">
        <Col span={17}>
          <Card
            title="Make Transaction"
            bordered={false}
            style={{ borderRadius: 10 }}
          >
            <Row justify="center">
              <Col span={14}>
                <Form
                  name="basic"
                  labelCol={{
                    span: 6,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  
                >
                  <Form.Item
                    label="Batch no"
                    name="batch_no"
                    rules={[
                      {
                        required: true,
                        message: "Please input your batch no",
                      },
                    ]}
                  >
                    <InputNumber style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item
                    label="Quantity"
                    name="quantity"
                    rules={[
                      {
                        required: true,
                        message: "Please input your amount",
                      },
                    ]}
                  >
                    <InputNumber style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item
                    label="Note"
                    name="note"
                    rules={[
                      {
                        required: true,
                        message: "write your note",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 4,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AddStock;
