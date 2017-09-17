import React from 'react'
import {Layout} from 'antd'
import {Router} from 'react-router-dom'


import Content from './Content'
import Menu from './Menu'
import Routes from './Routes'

const {Header, Sider} = Layout

export default class SiderDemo extends React.Component {
  state = {
    collapsed: true
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  }
  render() {
    return (
      <Router history={this.props.history}>
        <Layout style={{
          minHeight: '100vh'
        }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}>
            <div className="logo"/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical"/>
          </Sider>
          <Layout>
            <Header style={{background: '#fff',padding: 0}}/>
            <Content>
              <Routes/>
            </Content>
          </Layout>
        </Layout>
      </Router>
    )
  }
}