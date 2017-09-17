import React from 'react'
import Home from '../views/Home'
import Users from '../views/Users'


export const items = [
    { to: '/', content: 'Home', icon: 'pie-chart', key: 1, component: () => <Home />, exact: true },
    //{ to: '/register', content: 'Register', icon: 'desktop', key: 2, component: () => <Register />, exact: true },
    //{ to: '/login', content: 'Login', icon: 'desktop', key: 3, component: () => <Login /> },
    { to: '/users', content: 'Users', icon: 'user', key: 4 , component: () => <Users />}
    
    // { content: 'Sub 1', icon: 'user', key: 'sub1', sub: [
    //     { content: 'ItemSub', key: 3 },
    //     { content: 'ItemSub', key: 4 },
    //     { content: 'ItemSub', key: 5 }
    // ]}
]