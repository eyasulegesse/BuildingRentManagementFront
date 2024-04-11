import { Table } from 'antd';

const List = (props) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Room Name',
      dataIndex: 'roomName',
      key: 'roomName',
    },
    {
      title: 'Room Type',
      dataIndex: ['roomType', 'roomType'],
    },
    {
      title: 'Floor No',
      dataIndex: ['floor', 'floorNo'],
    },
  ];
  return <Table columns={columns} dataSource={props.room} />;
};

export default List;
