import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import AddNewButton from '../Components/shared/AddNewButton';
import List from '../Components/roomtype/List';
import axios from 'axios';
import Config from '../Components/shared/Config';
import { Modal } from 'antd';
import Create from '../Components/roomtype/Create';
const RoomType = () => {
  const [fetchedData, setFechedData] = useState([]);
  const [viewAdd, setViewAdd] = useState(false);
  useEffect(() => {
    const getRoomType = async () => {
      await axios
        .get(`${Config.baseURL}/roomtype/getAllRoomType`)
        .then((response) => {
          setFechedData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getRoomType();
  }, [fetchedData]);
  const clickHandler = () => {
    setViewAdd(true);
  };
  const submitHandler = async (data) => {
    const roomType = {
      roomType: data.roomType,
    };
    await axios
      .post(`${Config.baseURL}/roomtype/create`, roomType)
      .then((response) => {
        setViewAdd(false);
        Modal.success({
          title: 'Room Type',
          content: 'Successfully Saved',
          okType: 'default',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <h3 className='text-appHeader font-bold'>Room Type Management</h3>
      <AddNewButton title='Add New Room Type' onClick={clickHandler} />
      <Modal
        open={viewAdd}
        footer=''
        onCancel={() => setViewAdd(false)}
        title='Add New Room Type'
      >
        <Create onSubmit={submitHandler} />
      </Modal>
      <List roomType={fetchedData} />
    </Layout>
  );
};

export default RoomType;
