import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { Col, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  let navigate = useNavigate();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  let userInfo = useSelector((state) => state.user.value)


  const items = [
    userInfo.role != "user" &&  
    getItem('Users', 'sub1', <MailOutlined />, [
      getItem('Add User', '1'),
      getItem('View User', '2'),
    ]),

    userInfo.role != "user" &&  
    getItem('Product Two', 'sub2', <AppstoreOutlined />, [
      getItem('Add Product', '/dashboard/addproduct'),
      getItem('View Product', '/dashboard/viewproduct'),
    ]),

    {
      type: 'divider',
    },

    userInfo.role != "user" &&  
    getItem('Category Three', 'sub3', <SettingOutlined />, [
      getItem('Add Category', '/dashboard/addcategory'),
      getItem('View Category', '/dashboard/viewcategory'),
      getItem('Add Subcategory', '/dashboard/addsubcategory'),
      getItem('View Subcategory', '/dashboard/viewsubcategory'),
    ]),

    userInfo.role != "user" &&  
    getItem('Discount Three', 'sub4', <SettingOutlined />, [
      getItem('Add Discount', '9'),
      getItem('View Discount', '10'),
    ]),

    userInfo.role == "user" &&  
    getItem('My Profile', 'sub5', <SettingOutlined />, [
      getItem('Purchase Details', '11'),
      getItem('Profile', '12'),
    ]),
  ];

  const onClick = (e) => {
    console.log('click ', e);
    navigate(e.key);
  };

  
  // console.log(userInfo);

  return (
    <>
    <Row >
      
      <Col span={5}>
      <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
    items={items}
  />
      </Col>

      <Col span={19}>
        <Outlet/>
      </Col>

    </Row>
  </>
  

  )
}

export default Dashboard