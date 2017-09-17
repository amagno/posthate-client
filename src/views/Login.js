import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { gql, graphql } from 'react-apollo'
import history from '../lib/history'
import './login.css'
import { storageLogin } from '../lib/state'


const FormItem = Form.Item;
const loginMutation = gql`
mutation loginMutation($email: String!, $password: String!) {
  login(input: {
    email: $email
    password: $password
  }) {
    error
    msg
    token
    user {
      id
      email
      name
      password
    }
  }
}
`
class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const {email, password} = values
        try {
          const { data } = await this.props.mutate({
            variables: {
              email,
              password
            }
          })
        if(data.login.error) {
          this.props.form.setFields({
            email: {
              errors: [new Error(data.login.msg)]
            },
            password: {
              errors: [new Error(data.login.msg)]
            }
          })
        }
        const token = data.login.token || undefined
        const user = data.login.user || undefined
        if(token && user) {
          storageLogin(token, user)
          history.push('/')
        }
        console.log(data)
        }catch(error) {
          throw new Error(error)
        }
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your e-mail' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="E-mail" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}
const WithData = graphql(loginMutation)(NormalLoginForm)
const WrappedNormalLoginForm = Form.create()(WithData)

export default WrappedNormalLoginForm