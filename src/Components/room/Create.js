import React from 'react';
import { Form, Select, Input } from 'antd';
import SubmitButton from '../shared/SubmitButton';
const Create = (props) => {
  const submitHandler = (event) => {
    props.onSubmit(event);
  };
  return (
    <Form layout='vertical' onFinish={submitHandler}>
      <Form.Item
        label='Floor No'
        name='floorId'
        rules={[{ required: true, message: 'Floor Number is required' }]}
      >
        <Select>
          <Select.Option value=''>Select Floor No</Select.Option>
          {props.floorList.map((option) => {
            return (
              <Select.Option key={option.id}>{option.floorNo}</Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        label='Room Type'
        name='roomTypeId'
        rules={[{ required: true, message: 'Room Type is Required' }]}
      >
        <Select>
          <Select.Option value=''>Select Room Type</Select.Option>
          {props.roomTypeList.map((option) => {
            return (
              <Select.Option value={option.id} key={option.id}>
                {option.roomType}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        label='Room Name'
        name='roomName'
        rules={[{ required: true, message: 'Room Name is Required' }]}
      >
        <Input placeholder='Room Name' />
      </Form.Item>
      <SubmitButton />
    </Form>
  );
};

export default Create;
