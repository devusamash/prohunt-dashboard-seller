import React from "react";
import { Card, Select, InputNumber, Form, Button, Row, Col } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  addtransaction,
  getCategory,
} from "../../app/Actions/TransactionActions";

const AddTransaction = () => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const companyid = useSelector((state) => state.User.user.company.id);
  const categories = useSelector(
    (state) => state.Transactions.transactionCategories
  );
  const success = useSelector((state) => state.Transactions.success);
  const { accountid } = useParams();
  const url = `companies/${companyid}/accounts/${accountid}/transactions`;
  const categoryurl = `companies/${companyid}/transaction_categories`;
  useEffect(() => {
    dispatch(getCategory(categoryurl));
  }, []);

  const onFinish = (values) => {
    const payload = JSON.stringify({
      transaction: { ...values, account_id: accountid },
    });
    console.log(payload);
    console.log(url);
    dispatch(addtransaction(url, payload));
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    console.log(success);
    if (success) {
      history.push(`/showaccount/${accountid}`);
    }
  }, [success]);

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
                    span: 4,
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
                  form={form}
                >
                  <Form.Item
                    label="Amount"
                    name="amount"
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
                    label="Category"
                    name="transaction_category_id"
                    rules={[
                      {
                        required: false,
                        message: "Please Select your category",
                      },
                    ]}
                  >
                    <Select>
                      {categories.map((category) => {
                        return (
                          <Select.Option value={category.id} key={category.id}>
                            {category.name}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Type"
                    name="transaction_type"
                    rules={[
                      {
                        required: true,
                        message: "Please Select the Transaction Type",
                      },
                    ]}
                  >
                    <Select>
                      <Select.Option key={1} value={"debit"}>
                        Debit
                      </Select.Option>
                      <Select.Option key={2} value={"credit"}>
                        Credit
                      </Select.Option>
                    </Select>
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

export default AddTransaction;
