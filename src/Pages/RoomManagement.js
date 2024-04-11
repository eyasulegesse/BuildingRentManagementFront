import { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import List from '../Components/room/List';
import AddNewButton from '../Components/shared/AddNewButton';
import axios from 'axios';
import Config from '../Components/shared/Config';
import Create from '../Components/room/Create';
import { Modal } from 'antd';
const Room = () => {
  const [roomList, setroomList] = useState([]);
  const [roomTypeList, setRoomTypeList] = useState([]);
  const [floorList, setFloorList] = useState([]);
  const [viewModal, setViewModal] = useState(false);
  useEffect(() => {
    const getRoom = async () => {
      await axios
        .get(`${Config.baseURL}/room/getForCreate`)
        .then((response) => {
          setroomList(response.data.roomList);
          setRoomTypeList(response.data.roomTypeList);
          setFloorList(response.data.floorList);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getRoom();
  }, [roomList]);

  const addButtonHandler = () => {
    setViewModal(true);
  };
  const submitHandler = (data) => {
    const roomData = {
      room_type_id: data.roomTypeId,
      floor_id: data.floorId,
      roomName: data.roomName,
    };
    axios.post(`${Config.baseURL}/room/create`, roomData).then((response) => {
      setViewModal(false);
      Modal.success({
        title: 'Room',
        content: 'Successfully Saved',
        okType: 'default',
      });
      console.log(response);
    });
  };
  return (
    <Layout>
      <h3 className='text-appHeader font-bold'>Room Management</h3>
      <AddNewButton title='Add New Room' onClick={addButtonHandler} />
      <Modal
        open={viewModal}
        footer=''
        title='Add New Room'
        onCancel={() => setViewModal(false)}
      >
        <Create
          roomTypeList={roomTypeList}
          floorList={floorList}
          onSubmit={submitHandler}
        />
      </Modal>
      <List room={roomList} />
    </Layout>
  );
};

export default Room;
