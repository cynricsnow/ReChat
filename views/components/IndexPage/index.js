'use strict'
import React, { Component } from 'react';
import { Row, Col } from 'antd';

import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import styles from './styles';
import logo from './index-logo.png';

const LOGIN = true;
const REGISTER = false;

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = { active: LOGIN };
    }
    switchToLogin(e) {
        e.preventDefault();
        if (this.state.active === REGISTER) {
            this.setState({
                active: LOGIN
            });
        }
    }
    switchToRegister(e) {
        e.preventDefault();
        if (this.state.active === LOGIN) {
            this.setState({
                active: REGISTER
            });
        }
    }
    getSwitchClassName(index) {
        return styles.switch + ' ' + (this.state.active === index ? '' : styles.inactive);
    }
    render() {
        return (
            <Row className={styles.wrapper}>
                <Col className={styles.content}>
                    <div className={styles.header}>
                        <div className={this.getSwitchClassName.bind(this)(LOGIN)}
                            onClick={this.switchToLogin.bind(this)}>
                            <a>登陆</a>
                        </div>
                        <div className={this.getSwitchClassName.bind(this)(REGISTER)}
                            onClick={this.switchToRegister.bind(this)}>
                            <a>注册</a>
                        </div>
                    </div>
                    {
                        this.state.active ? <LoginForm/> : <RegisterForm/>
                    }
                </Col>
            </Row>
        )
    }
}

export default IndexPage;
// <Col span={8}>
//     <h1>欢迎来到ReChat</h1>
//     <h3>这是一个自由交流的平台</h3>
// </Col>
// <Col span={6}>
//     <img className={styles.logo} src={logo} />
// </Col>
