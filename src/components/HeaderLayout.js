import React, {Component} from 'react'
import {Layout} from 'antd'
import Content from './Content'
import Menu from './Menu'
import {Router} from 'react-router-dom'

import Routes from './Routes'

const {Header, Footer} = Layout

class HeaderLayout extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Layout className="layout">
          <Header>
            <div className="logo"/>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{
              lineHeight: '64px'
            }}/>
          </Header>
          <Content>
            <Routes/>
          </Content>

          <Footer style={{
            textAlign: 'center'
          }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>

        </Layout>
      </Router>
    )
  }
}

export default HeaderLayout;
