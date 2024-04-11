import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import AddNewButton from '../Components/shared/AddNewButton';
import Create from '../Components/renter/Create';
import axios from 'axios';
import { Modal } from 'antd';
import Config from '../Components/shared/Config';
const RenterManagement = () => {
  const [viewModal, setViewModal] = useState(false);

  const viewModalHandler = () => {
    setViewModal(true);
  };

  const submitHandler = async (data) => {
    const renterData = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNo: data.phoneNo,
    };
    console.log(data);
    await axios
      .post(`${Config.baseURL}/renter/create`, renterData)
      .then((response) => {
        setViewModal(false);
        Modal.success({
          title: 'Renter',
          content: 'Successfully Saved',
          okType: 'default',
        });
      });
  };
  return (
    <Layout>
      <h3 className='text-appHeader font-bold'>Renter Management</h3>
      <AddNewButton title='Add new Renter' onClick={viewModalHandler} />
      <Modal
        open={viewModal}
        footer=''
        title='Add New Renter'
        onCancel={() => setViewModal(false)}
      >
        <Create onSubmit={submitHandler} />
      </Modal>
    </Layout>
  );
};

export default RenterManagement;
