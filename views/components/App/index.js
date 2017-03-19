'use strict'
import React, { Component } from 'react';
import { Layout } from 'antd';

class App extends Component {
    render() {
        return (
            <Layout>
                <Layout.Header />
                {this.props.children}
            </Layout>
        )
    }
}

export default App;
