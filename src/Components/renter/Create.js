import React from 'react';
import { Form, Input } from 'antd';
import SubmitButton from '../shared/SubmitButton';
const Create = (props) => {
  const submitHandler = (event) => {
    props.onSubmit(event);
  };
  return (
    <Form layout='vertical' onFinish={submitHandler}>
      <Form.Item label='First Name' name='fName' className='mb-appSmallGap'>
        <Input placeholder='Enter First Name' />
      </Form.Item>
      <Form.Item label='Last Name' name='lName' className='mb-appSmallGap'>
        <Input placeholder='Enter Last Name' />
      </Form.Item>
      <Form.Item label='Phone Number' name='phoneNo' className='mb-appSmallGap'>
        <Input placeholder='Enter Phone Number' />
      </Form.Item>
      <SubmitButton />
    </Form>
  );
};

export default Create;
