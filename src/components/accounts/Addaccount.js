import React from "react";
import { Card, Input, InputNumber, Form, Button, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../../app/Actions/AccountsActions";
import { useForm } from "antd/lib/form/Form";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Addaccount = () => {
  const [form] = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const companyid = useSelector((state) => state.User.user.company.id);
  const success = useSelector((state) => state.Accounts.success);

  const url = `companies/${companyid}/accounts`;
  const onFinish = (values) => {
    const payload = JSON.stringify({
      account: { ...values, company_id: companyid },
    });
    console.log(payload);
    dispatch(createAccount(url, payload));
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (success) {
      history.push("/accounts");
    }
  }, [success]);

  return (
    <>
      <Row justify="center">
        <Col span={17}>
          <Card
            title="Create Account"
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
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your amount Name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Balance"
                    name="balance"
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

export default Addaccount;
