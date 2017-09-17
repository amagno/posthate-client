import React from 'react'
import { Layout} from 'antd'

const {Footer, Header, Content} = Layout
export default () => (
    <Layout>
    <Header style={{ background: '#fff', padding: 0 }} />
    <Content style={{ margin: '24px 16px 0' }}>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
)