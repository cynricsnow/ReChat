'use strict'
import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

import styles from '../LoginRegisterForm/styles';
import logo from './register-logo.png';

class RegisterForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log('???');
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
                        <h1>创建ReChat账号</h1>
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
                        getFieldDecorator('email', {
                            rules: [{
                                type: 'email',
                                message: '邮箱格式不正确'
                            }, {
                                required: true,
                                message: '请输入邮箱'
                            }]
                        })(
                            <Input prefix={<Icon type='mail' />} placeholder='邮箱' />
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
                <FormItem>
                    {
                        getFieldDecorator('checkpassword', {
                            rules: [{
                                required: true,
                                message: '请输入确认密码'
                            }]
                        })(
                            <Input prefix={<Icon type='lock' />} type='password' placeholder='确认密码' />
                        )
                    }
                </FormItem>
                <Button type="primary" htmlType="submit" className={styles.button}>注册</Button>
            </Form>
        )
    }
}

const WrapRegisterForm = Form.create()(RegisterForm);

export default WrapRegisterForm;
