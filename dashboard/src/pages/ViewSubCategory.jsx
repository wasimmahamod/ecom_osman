import { Button, Form, Input, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal } from "antd";

const ViewSubCategory = () => {

  let [catlist, setcatlist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialValues, setInitialValues] = useState([]);

  const onFinish = async (values) => {
  console.log('done editing subcategory');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const showModal = () => {
    setIsModalOpen(true);
    setInitialValues([
      {
        name : ["name"],
        value : record.name,
      },
    ]);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    useEffect(()=>{
        async function allcat(){
         let data = await axios.get("http://localhost:8000/api/v1/product/allsubcat");
 
         let catedata= []
 
         data.data.map((item)=>{
           catedata.push({
            key: item._id,
            subcategory: item.name,
            status: item.status,
            // category: item.categoryId.name,
            
           });
         });
          setcatlist(catedata);
        }
        allcat();
       },[])

      const columns = [
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
          },

          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          },
          
        {
          title: 'Subcategory',
          dataIndex: 'subcategory',
          key: 'subcategory',
        },

        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          render: (_, record) =>
             <>
             <Button onClick={()=>handleClick(record)}>{record.status == "waiting" ? "Approve" : "Reject"}</Button>
             <Button onClick={()=>handleDelete(record.key)}>Delete</Button>
             <Button type="primary" onClick={()=>showModal(record)}>Edit</Button>
             <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
             <Form
    name="basic"
    fields={initialValues}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
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
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Change
      </Button>
    </Form.Item>
  </Form>
            </Modal>
             </>
        },

      ];
 

  return (
    <div>
        <Table dataSource={catlist} columns={columns} />
    </div>
  )
}

export default ViewSubCategory