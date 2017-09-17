import React from 'react'
import {Layout} from 'antd'
import {
    BrowserRouter as Router,
} from 'react-router-dom'

export default ({ children }) => (
    <Router>  
        <Layout className="layout">
            {children}
        </Layout>
    </Router>
)