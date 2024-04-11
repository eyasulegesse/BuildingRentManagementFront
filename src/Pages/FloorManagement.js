import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import axios from 'axios';
import AddNewButton from '../Components/shared/AddNewButton';
import List from '../Components/floor/List';
import Config from '../Components/shared/Config';
import { Modal } from 'antd';
import Create from '../Components/floor/Create';
const FloorManagement = () => {
  const [floorList, setFloorList] = useState([]);
  const [viewModal, setViewModal] = useState(false);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${Config.baseURL}/floor/getAllFloor`)
        .then((response) => setFloorList(response.data))
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [floorList]);
  const addButtonHandler = () => {
    setViewModal(true);
  };
  const submitHandler = async (floorNo) => {
    const floor = {
      floorNo: floorNo,
    };

    await axios
      .post(`${Config.baseURL}/floor/create`, floor)
      .then((response) => {
        setViewModal(false);
        Modal.success({
          title: 'Floor',
          content: 'Successfully Saved',
          okType: 'default',
        });
      });
  };
  return (
    <Layout>
      <h3 className='text-appHeader font-bold'>Floor Management</h3>
      <AddNewButton title='Add New Floor' onClick={addButtonHandler} />
      <Modal
        open={viewModal}
        footer=''
        title='Add New Floor'
        onCancel={() => setViewModal(false)}
      >
        <Create onSubmit={submitHandler} />
      </Modal>
      <List floorList={floorList} />
    </Layout>
  );
};

export default FloorManagement;
