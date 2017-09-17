import React from 'react'
import {Menu, Icon} from 'antd'
import { items } from '../lib/menu'
import { 
    Link
} from 'react-router-dom'
import { storageLogout, isLogged } from '../lib/state'


const MainMenu = ({ menuItems = items, ...props }) => (
    <Menu {...props}>
        {menuItems.map(item => {
            if(item.content && item.icon && item.key) {
                if(item.sub) {
                    return (
                        <Menu.SubMenu 
                        key={item.key}
                        title={<span><Icon type={item.icon}/><span>{item.content}</span></span>}>
                            {item.sub.map(subItem => (
                                <Menu.Item key={subItem.key}>
                                    <Link to={subItem.to}></Link>
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                    )
                }
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.to}>
                            <Icon type={item.icon} />
                            <span>{item.content}</span>
                        </Link>                    
                    </Menu.Item>
                )
            }
            return null
        })}
        {console.log('state user --> ')}
        { isLogged() ? (
            <Menu.Item style={{ float: 'right' }} key="menu-logout">
                <Link to="/" onClick={() => {
                    if(window.confirm('Realy ?')) {
                        storageLogout()
                    }
                }}>
                    <Icon type="user" />
                    <span>Logout</span>
                </Link>
            </Menu.Item>
        ):  
            <Menu.Item style={{ float: 'right' }} key="menu-register">
                <Link to="/register">
                    <Icon type="user" />
                    <span>Register</span>
                </Link>
            </Menu.Item>
        }
        { isLogged() ? (
            <Menu.Item style={{ float: 'right' }} key="menu-profile">
                <Link to="/profile">
                    <Icon type="user" />
                    <span>Profile</span>
                </Link>
            </Menu.Item>
        ):
            <Menu.Item style={{ float: 'right' }} key="menu-login">
                <Link to="/login">
                    <Icon type="user" />
                    <span>Login</span>
                </Link>
            </Menu.Item> 
        }
    </Menu>
)

export default MainMenu