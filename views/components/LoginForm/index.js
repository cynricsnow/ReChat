'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Icon, Input, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;

import { login, messageExpired } from '../../redux/actions/account';
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
        },
        handleMessage() {
            if (this) {
                dispatch(messageExpired());
            }
        }
    })
)
class LoginForm extends Component {
    state = {
        dataSource: [],
        avatarUrl: logo
    }
    componentDidMount() {
        let users = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            users.push(key);
        }
        this.setState({ dataSource: users});
    }
    updateAvatarUrl(value) {
        const url = localStorage[value];
        if (url && url !== value) {
            this.setState({ avatarUrl: url});
        }
    }
    onSelect(value) {
        this.updateAvatarUrl.bind(this)(value);
    }
    onChange(value) {
        const users = this.state.dataSource;
        for (let i = 0; i < users.length; i++) {
            if (users[i] === value) {
                return;
            }
        }
        if (this.state.avatarUrl !== logo) {
            this.setState({ avatarUrl: logo});
        }
    }
    render() {
        const { dataSource, avatarUrl } = this.state;
        const { message, handleSubmit, handleMessage } = this.props;
        const form = this.props.form;
        const { getFieldDecorator } = form;
        return (
            <Form onSubmit={handleSubmit.bind(form)}>
                <Row className={styles.header}>
                    <Col span={8}>
                        <div className={styles.blueCircle}>
                            <img className={styles.logo} src={avatarUrl} />
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
                            <AutoComplete
                                dataSource={dataSource}
                                onSelect={this.onSelect.bind(this)}
                                onChange={this.onChange.bind(this)}
                                dropdownClassName={styles.dropdown}
                            >
                                <Input prefix={<Icon type='user' />} placeholder='用户名/邮箱' onFocus={handleMessage.bind(message)}/>
                            </AutoComplete>
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
                            <Input prefix={<Icon type='lock' />} type='password' placeholder='密码' onFocus={handleMessage.bind(message)}/>
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
