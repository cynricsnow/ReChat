'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

import styles from './styles';

@connect(
    state => ({
        avatarUrl: state.account.user.avatarUrl
    })
)
class RoomPage extends Component {
    render() {
        const { avatarUrl } = this.props;
        return (
            <Row className={styles.wrapper}>
                <Col span={6}>
                    <Menu
                        onClick={this.handleClick}
                        style={{height: 200 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline">
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Col>
                <Col span={18}>
                    <img src={avatarUrl} />
                </Col>
            </Row>
        )
    }
}

export default RoomPage;
