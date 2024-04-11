import React from 'react';
import { Table } from 'antd';
const List = ({ floorList }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Floor No',
      dataIndex: 'floorNo',
      key: 'floorNo',
    },
  ];
  return <Table columns={columns} dataSource={floorList} />;
};

export default List;
