import React from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { addCategory } from "../../app/Actions/TransactionActions";
import { useForm } from "antd/lib/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const AddTransactionCategories = () => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const history = useHistory();
  const companyid = useSelector((state) => state.User.user.company.id);
  const success = useSelector((state) => state.Transactions.success);
  const url = `companies/${companyid}/transaction_categories`;
  const onFinish = (values) => {
    const payload = JSON.stringify({
      transaction_category: { ...values, company_id: companyid },
    });
    console.log(payload);
    dispatch(addCategory(url, payload));
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (success) {
      history.push("/transactions");
    }
  }, [success]);

  return (
    <Row justify="center">
      <Col span={17}>
        <Card
          title="Add Transaction Category"
          bordered={false}
          style={{ borderRadius: 10 }}
        >
          <Row justify="center">
            <Col span={14}>
              <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your category name",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
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
  );
};

export default AddTransactionCategories;
