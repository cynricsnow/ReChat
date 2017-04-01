'use strict'
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;
import IndexPage from '../IndexPage';
import styles from './styles';
import logo from './header-logo.png';

const user = false;

class App extends Component {
    render() {
        return (
            <Layout className={styles.layout}>
                <Header>
                    <Link to='/' className={styles.text}>ReChat</Link>
                    <img className={styles.logo} src={logo} />
                </Header>
                <Content className={styles.content}>
                    {
                        user ? <p>world</p> : <IndexPage />
                    }
                </Content>
                <Footer />
            </Layout>
        )
    }
}

export default App;
