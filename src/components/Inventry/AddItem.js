import React, {useEffect} from "react";
import { Form, Input, Button, Card, Row, Col, Select } from "antd";
import {useDispatch, useSelector} from 'react-redux'
import { getItemCategory, getStockUnit, createItem } from "../../app/Actions/StockActions";
import { useForm } from "antd/lib/form/Form";
import { useHistory } from "react-router-dom";

const AddItem = () => {

  const dispatch = useDispatch()
  const history = useHistory();

  const [form] = useForm();
  const companyid = useSelector((state) => state.User.user.company.id);
  const itemCategories = useSelector((state)=>state.Stocks.itemCategories)
  const stockUnits = useSelector((state)=>state.Stocks.stockUnits)
  const itemCategoryUrl = `companies/${companyid}/item_categories`
  const stockUnitUrl = `stock_units`
  const url = `companies/${companyid}/items`
  const success = useSelector((state) => state.Stocks.success);
  const onFinish = (values) => {
    const payload = JSON.stringify({
      item: { ...values, company_id: companyid },
    });
    console.log(payload)
    dispatch(createItem(url,payload))
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(()=>{
    dispatch(getItemCategory(itemCategoryUrl))
    dispatch(getStockUnit(stockUnitUrl))


  }, [])

  useEffect(() => {
    if (success) {
      history.push("/stocks");
      
    }
    console.log(success)
  }, [success]);
  
  return (
    <>
      <Row justify="center">
        <Col span={17}>
          <Card title="Add Item" bordered={false} style={{ borderRadius: 10 }}>
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
                  form={form}
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please write Item name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please input item description",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="SKU"
                    name="SKU"
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
                  label="Category"
                name="item_category_id"
                rules={[
                  { required: true, message: "Please select item category" },
                ]}
              >
                <Select>
                  { itemCategories ? itemCategories.map((category) => {
                    return (
                      <Select.Option value={category.id} key={category.id}>
                        {category.name}
                      </Select.Option>
                    )
                  }):" "}
                </Select>
              </Form.Item>
              <Form.Item
                  label="Unit"
                name="StockUnit_id"
                rules={[
                  { required: true, message: "Please select item category" },
                ]}
              >
                <Select>
                  { stockUnits  ? stockUnits.map((stock) => {
                    return (
                      <Select.Option value={stock.id} key={stock.id}>
                        {stock.name}
                      </Select.Option>
                    )
                  }):" "}
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

export default AddItem;
