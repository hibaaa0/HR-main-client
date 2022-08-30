import React from "react";
import './NewsAdmin.css'
import {
  Button,
  Col,
  DatePicker,
  TimePicker,
  Form,
  Input,
  Row,
  Select,
} from 'antd';
import { UploadOutlined } from "@ant-design/icons";
import {  message, Upload } from "antd";
import { useState } from "react";
import { UserOutlined } from '@ant-design/icons';
// import { height, width } from '@mui/system'


const { TextArea } = Input;
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


export default function NewsAdmin() {
  const [form] = Form.useForm();
  const [Loading, setLoading] = useState(false);


  const prop = {
    beforeUpload: (file) => {
      const isPNG = file.type === 'image/png';
      const isJPG = file.type === 'image/jpg';

      if (isPNG || isJPG) {
        return isPNG && isJPG || Upload.LIST_IGNORE;
        //message.error(`${file.name} is not a png or jpg file`);
      }

      //return isPNG && isJPG || Upload.LIST_IGNORE;
      message.error(`${file.name} is not a png or jpg file`);
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="92">+92</Option>
        <Option value="93">+93</Option>
      </Select>
    </Form.Item>
  );

  const onButtonClick = (e) => {
    console.log('Button Clicked')
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }


  return (
    <div style={{ bacgroundColor: "black" }}>


      <div
        className="profile"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="info">
          <h3 >NEWS SECTION UPDATE</h3>
        </div>

        {/* first Row */}

        <div >
          <Form {...layout}
            form={form}
            name="register"
            className='form'

            scrollToFirstError>




            <Form.Item className='forms' label="ID" name='id'
            >

              <Input
                className='input1'
                placeholder='Enter ID'
                prefix={<UserOutlined />}

                style={{
                  width: '340px',
                  position: 'relative',
                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  border: '1px solid #434343',
                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                maxLength={20}
                allowClear
              >
              </Input>

            </Form.Item>






            <Form.Item
              name="image_url"
              label="Cover Image"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Upload {...prop} maxCount={1} >
                <Button icon={<UploadOutlined />}
                  style={{
                    width: '140px',
                    position: 'relative',
                    padding: '5px 9px',
                    color: 'rgba(255, 255, 255, 0.85)',
                    margin: '6px 100px',
                    border: '1px solid #434343',
                    transition: 'all 0.3s',
                    display: 'inline-flex'

                  }}>Click to Upload</Button>
              </Upload>

            </Form.Item>







            <Form.Item className='forms' label="Category" name='category'
            >
              <Select className='gen'
                style={{
                  width: '340px',
                  position: 'relative',
                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                allowClear
                placeholder="Select Your Category">
                <Option value="Google">Google</Option>
                <Option value="Gadgets">Gadgets</Option>
                <Option value="Programming">Programming</Option>
                <Option value="Technology">Technology</Option>
                <Option value="Tech Business">Tech Business</Option>
                <Option value="Bitcoin">Bitcoin</Option>
                <Option value="Artificial Intelligence">Artificial Intelligence</Option>
                <Option value="Gaming">Gaming</Option>
                <Option value="Machine Learning">Machine Learning</Option>
              </Select>

            </Form.Item>






            <Form.Item className='forms' label="Title" name='title'>

              <Input
                className='input1'
                maxLength={30}
                allowClear
                style={{
                  width: '340px',
                  position: 'relative',
                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  border: '1px solid #434343',
                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                placeholder='Add Title'
              >
              </Input>

            </Form.Item>




            <Form.Item className='forms' label="Description" name='Desc'>


              <TextArea
                style={{
                  width: '340px',
                  position: 'relative',
                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }} rows={3} />


            </Form.Item>


            <Form.Item className='forms' label="Details" name='Details'>


              <TextArea
                style={{
                  width: '340px',
                  position: 'relative',
                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }} rows={3} />
            </Form.Item>







            <Form.Item className='forms' label="Author Name" name='Authorname'>
              <Input
                className='input1'
                maxLength={20}
                allowClear
                style={{
                  width: '340px',
                  position: 'relative',
                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  border: '1px solid #434343',
                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                placeholder='Enter the Name of the Author'
              >
              </Input>

            </Form.Item>




            <Form.Item
              name="image_url"
              label="Cover Image">
              <Upload {...prop} maxCount={1} >
                <Button icon={<UploadOutlined />}
                  style={{
                    width: '140px',
                    position: 'relative',
                    padding: '5px 9px',
                    color: 'rgba(255, 255, 255, 0.85)',
                    margin: '6px 100px',
                    border: '1px solid #434343',
                    transition: 'all 0.3s',
                    display: 'inline-flex'

                  }}>Click to Upload</Button>
              </Upload>

            </Form.Item>


            <Form.Item className='forms' label="Date" name='Date'>


              <DatePicker className='date'
                style={{
                  width: '340px',
                  position: 'relative',
                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }} placeholder='Enter Date'></DatePicker>

            </Form.Item>




            <Form.Item className='forms' label="Time" name='Time'>


              <TimePicker className='date'
                style={{
                  width: '340px',
                  position: 'relative',
                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }} placeholder='Enter Time'></TimePicker>

            </Form.Item>




            <Form.Item className='forms' label="Comments" name='comments'>


              <Input
                className='input1'
                placeholder='Add Comments'
                prefix={<UserOutlined />}

                style={{
                  width: '340px',
                  position: 'relative',
                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  border: '1px solid #434343',
                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                maxLength={20}
                allowClear
              >
              </Input>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit"
                onClick={onButtonClick}>
                Submit
              </Button>
            </Form.Item>

          </Form>


        </div>



      </div>

    </div>
  );
}


