'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

import { register } from '../../redux/actions/account';
import styles from '../LoginRegisterForm/styles';
import logo from './register-logo.png';

@connect(
    null,
    dispatch => ({
        handleSubmit(e) {
            e.preventDefault();
            console.log(this.props.form.getFieldsValue());
            dispatch(register(this.props.form.getFieldsValue()));
        }
    })
)
class RegisterForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={handleSubmit.bind(this)}>
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
                            }, {
                                min: 6,
                                message: '密码不能少于6个字符'
                            }]
                        })(
                            <Input prefix={<Icon type='lock' />} type='password' placeholder='密码' />
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('confirm', {
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
