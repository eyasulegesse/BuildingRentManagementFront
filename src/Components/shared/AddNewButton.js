import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const AddNewButton = (props) => {
  return (
    <div className='my-appMediumGap'>
      <Button
        onClick={props.onClick}
        className='flex justify-between bg-appPrimaryColor  hover:bg-appSecondayColor px-appSmallGap rounded-lg'
      >
        <PlusOutlined className='text-appWhiteColor pt-[3px] mr-appExtraSmallGap' />
        <h3 className='text-appWhiteColor'>{props.title}</h3>
      </Button>
    </div>
  );
};

export default AddNewButton;
