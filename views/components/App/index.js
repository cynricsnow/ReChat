'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

import { validate } from '../../redux/actions/account';
import IndexPage from '../IndexPage';
import RoomPage from '../RoomPage';
import styles from './styles';
import logo from './header-logo.png';

@connect(
    state => ({
        user: state.account.user
    }),
    dispatch => ({
        validate: () => dispatch(validate())
    })
)
class App extends Component {
    componentDidMount() {
        const { validate } = this.props;
        validate();
    }
    render() {
        const { user } = this.props;
        return (
            <Layout className={user ? styles.room : styles.index}>
                <Header>
                    <Link to='/' className={styles.text}>ReChat</Link>
                    <img className={styles.logo} src={logo} />
                </Header>
                <Content className={user ? '' : styles.content}>
                    {
                        user ? <RoomPage /> : <IndexPage />
                    }
                </Content>
                <Footer />
            </Layout>
        )
    }
}

export default App;
