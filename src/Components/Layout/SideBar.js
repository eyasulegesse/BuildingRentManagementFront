import {
  FilterOutlined,
  AppstoreOutlined,
  DatabaseOutlined,
  RiseOutlined,
  BankOutlined,
  AreaChartOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const items = [
  {
    label: 'Dashboard ',
    key: '/',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Room Management',
    key: '/room',
    icon: <DatabaseOutlined />,
  },
  {
    label: 'Room Type Management',
    key: '/roomtype',
    icon: <FilterOutlined />,
  },
  {
    label: 'Floor Management',
    key: '/floor',
    icon: <RiseOutlined />,
  },
  {
    label: 'Rent Management',
    key: '/rent',
    icon: <BankOutlined />,
  },

  {
    label: 'Renter Management',
    key: '/renter',
    icon: <UsergroupAddOutlined />,
  },
  {
    label: 'Report',
    key: '/report',
    icon: <AreaChartOutlined />,
  },
];

const SideBar = () => {
  const [current, setCurrent] = useState('dashboard');
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key);
    // console.log('click ', e.key);
    setCurrent(e.key);
  };

  return (
    <div className='w-[400px] bg-appPrimaryColor   h-screen border-r'>
      <div className='h-[70px] bg-appSecondayColor border-r-3 border-r-white border-b-3 border-b-white'>
        <h3 className='pl-appExtraSmallGap text-appHeader leading-8 text-appWhiteColor align-middle'>
          Building Rent Management System
        </h3>
      </div>
      <div className='mt-appBigGap'>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='vertical'
          items={items}
          style={{
            backgroundColor: 'transparent',
            color: '#fff',
          }}
        />
      </div>
    </div>
  );
};

export default SideBar;
