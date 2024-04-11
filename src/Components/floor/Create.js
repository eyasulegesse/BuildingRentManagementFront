import { Form, Input } from 'antd';
import SubmitButton from '../shared/SubmitButton';
const Create = (props) => {
  const submitHandler = async (event) => {
    console.log(event.floorNo);
    props.onSubmit(event.floorNo);
  };
  return (
    <Form layout='vertical' onFinish={submitHandler}>
      <Form.Item label='Floor No' name='floorNo'>
        <Input placeholder='Floor No' />
      </Form.Item>

      <SubmitButton />
    </Form>
  );
};

export default Create;
