import React from 'react'
import {observer} from 'mobx-react'

export default observer(({ user }) => (
    <div>
        <span style={{ display: 'block' }}>{user.name}</span>
        <span style={{ display: 'block' }}>{user.email}</span>
        <span style={{ display: 'block' }}>{user.password}</span>
    </div>
))