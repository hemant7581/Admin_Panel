// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Input, Button, Dropdown, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import admin from "./images/admin.png"


function Header() {
  const menu = (
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-md">
      <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
        <img src={admin} alt="Logo or Profile" className="rounded-full w-16 h-16 mr-2" />
        <span className="font-semibold text-xl tracking-tight">Admin Panel</span>
      </div>
      <div className="flex items-center">
        <Dropdown overlay={menu} trigger={['click']}>
          <Button type="text" icon={<MenuOutlined />} />
        </Dropdown>
        <Input.Search placeholder="Search..." className="ml-4" />
      </div>
    </nav>
  );
}

export default Header;