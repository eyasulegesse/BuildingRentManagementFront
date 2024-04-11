import React from 'react';
import { Form, Input } from 'antd';
import SubmitButton from '../shared/SubmitButton';

const Create = (props) => {
  const submitHandler = async (event) => {
    props.onSubmit(event);
  };
  return (
    <Form layout='vertical' onFinish={submitHandler}>
      <Form.Item label='Room Type' name='roomType'>
        <Input placeholder='Room Type' />
      </Form.Item>
      <SubmitButton />
    </Form>
  );
};

export default Create;
