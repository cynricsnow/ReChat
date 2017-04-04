'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;
import IndexPage from '../IndexPage';
import RoomPage from '../RoomPage';
import styles from './styles';
import logo from './header-logo.png';

// const user = true;
//const user = false;

@connect(
    state => ({
        user: state.account.user
    })
)
class App extends Component {
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
