import React, {Component} from 'react'
import {Layout} from 'antd';
import '../styles/index.css'
import {observer} from 'mobx-react'
//import TransitionGroup from 'react-transition-group/TransitionGroup'
//import CSSTransition from 'react-transition-group/CSSTransition'

//import Header from './Header'
import SiderLayout from './SiderLayout'
import HeaderLayout from './HeaderLayout'
import history from '../lib/history'

@observer
class MainLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }
    show(show, component) {
        if (show) {
            return component
        } else {
            return null
        }
    }
    render() {
        console.log(this.state)
        return (
            <Layout>
                    {this.show(this.props.store.showSider, 
                    <SiderLayout history={history}>
                        {this.props.children}
                    </SiderLayout>
                    )}
                    {this.show(!this.props.store.showSider, 
                    <HeaderLayout history={history}>
                        {this.props.children}
                    </HeaderLayout>
                    )}   
            </Layout>
        )
    }
}

export default MainLayout