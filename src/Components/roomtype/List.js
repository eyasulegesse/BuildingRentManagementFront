import { Table } from 'antd';

const List = ({ roomType }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Room Type',
      dataIndex: 'roomType',
      key: 'roomType',
    },
  ];
  return <Table columns={columns} dataSource={roomType} />;
};
export default List;
