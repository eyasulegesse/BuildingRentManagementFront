import React from 'react';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
const SubmitButton = (props) => {
  return (
    <Button
      htmlType='submit'
      className='flex justify-between bg-appPrimaryColor  hover:bg-appSecondayColor px-appSmallGap rounded-lg'
    >
      <SendOutlined className='text-appWhiteColor pt-[3px] mr-appExtraSmallGap' />
      <h3 className='text-appWhiteColor'>Submit</h3>
    </Button>
  );
};

export default SubmitButton;
