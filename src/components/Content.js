import React from 'react'
import {Layout, Breadcrumb} from 'antd'

const {Content} = Layout
export default ({ children }) => (
    <Content style={{
        margin: '0 16px'
    }}>
        <Breadcrumb style={{
            margin: '12px 0'
        }}>
        <Breadcrumb.Item>{' '}</Breadcrumb.Item>                        
        {document.location.pathname.split('/').map((path, index) => {
            const text = path.charAt(0).toUpperCase() + path.slice(1)
            return (
                <Breadcrumb.Item key={index}>{text}</Breadcrumb.Item>                
            )
        })}
        </Breadcrumb>
        <div
            style={{
            padding: 24,
            background: '#fff',
            minHeight: 360
        }}>
            {children}
        </div>
    </Content>
)