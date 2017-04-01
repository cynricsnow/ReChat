'use strict'
import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

import styles from '../LoginRegisterForm/styles';
import logo from './login-logo.png';

class LoginForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log('hhh');
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row className={styles.header}>
                    <Col span={8}>
                        <img className={styles.logo} src={logo} />
                    </Col>
                    <Col span={16}>
                        <h1>开始新的聊天</h1>
                    </Col>
                </Row>
                <FormItem>
                    {
                        getFieldDecorator('username', {
                            rules: [{
                                required: true,
                                message: '请输入用户名'
                            }]
                        })(
                            <Input prefix={<Icon type='user' />} placeholder='用户名' />
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('password', {
                            rules: [{
                                required: true,
                                message: '请输入密码'
                            }]
                        })(
                            <Input prefix={<Icon type='lock' />} type='password' placeholder='密码' />
                        )
                    }
                </FormItem>
                <Button type="primary" htmlType="submit" className={styles.button}>登陆</Button>
            </Form>
        )
    }
}

const WrapLoginForm = Form.create()(LoginForm);

export default WrapLoginForm;
