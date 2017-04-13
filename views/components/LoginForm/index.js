'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

import { login } from '../../redux/actions/account';
import styles from '../LoginRegisterForm/styles';
import logo from './login-logo.png';

@connect(
    state => ({
        message: state.account.message
    }),
    dispatch => ({
        handleSubmit(e) {
            e.preventDefault();
            const { validateFieldsAndScroll } = this;
            validateFieldsAndScroll((err, values) => {
                if (!err) {
                    dispatch(login(values));
                }
            })
        }
    })
)
class LoginForm extends Component {
    render() {
        const { message, handleSubmit } = this.props;
        const form = this.props.form;
        const { getFieldDecorator } = form;
        return (
            <Form onSubmit={handleSubmit.bind(form)}>
                <Row className={styles.header}>
                    <Col span={8}>
                        <div className={styles.blueCircle}>
                            <img className={styles.logo} src={logo} />
                        </div>
                    </Col>
                    <Col span={16}>
                        <h1>开始新的聊天</h1>
                    </Col>
                </Row>
                <FormItem>
                    {
                        getFieldDecorator('account', {
                            rules: [{
                                required: true,
                                message: '请输入用户名/邮箱'
                            }]
                        })(
                            <Input prefix={<Icon type='user' />} placeholder='用户名/邮箱' autoFocus/>
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
                <div className={styles.hint}>
                    { message }
                </div>
                <Button type="primary" htmlType="submit" className={styles.button}>登陆</Button>
            </Form>
        )
    }
}

const WrapLoginForm = Form.create()(LoginForm);

export default WrapLoginForm;
