/* eslint-disable react/no-unescaped-entities */

import { Form, Input, Button } from "antd";

const ContactUsView = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      <p>
        We value your feedback and are here to assist you with any inquiries you
        may have. Whether you have a question, suggestion, or just want to drop
        us a line, we're all ears!
      </p>
      <Form
        name="contact-us"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
      >
        <Form.Item
          label="Your Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email address!" },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <Input.TextArea rows={4} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p>
        Your opinions matter to us! Whether you have feedback on our content,
        suggestions for improving our website, or just want to share your
        thoughts on your favorite movies, we're eager to hear from you. Your
        feedback helps us continue to grow and improve.
      </p>
    </div>
  );
};

export default ContactUsView;
