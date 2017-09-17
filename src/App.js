import React from 'react'
import Layout from './components/Layout'
//import logo from './logo.svg';
//import './App.css';
import {observable} from 'mobx'
import { ApolloProvider } from 'react-apollo'
import { client } from './lib/apollo'

const loading = () => {
  const ele = document.getElementById('ipl-progress-indicator')
  if(ele){
    setTimeout(() => {
      ele.classList.add('available')
      setTimeout(() => {
        ele.innerHTML = ''
      }, 2000)
    }, 1000)
  }
}
//Responsive
const mediaQuery = 480
const layoutState = observable({
  showSider: false
})
if(window.innerWidth < mediaQuery) {
  layoutState.showSider = true
}
window.onresize = () => {
  const width = window.innerWidth
  console.log(width)
  if(width < mediaQuery) {
      console.log('Action showSider = true')
      layoutState.showSider = true
  }
  if(width > mediaQuery) {
      console.log('Action showSider = false')    
      layoutState.showSider = false
  } 
}

class App extends React.Component {
  componentDidMount() {
    console.log('COMPONET DID MOUNT')
    loading()
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout store={layoutState} />
      </ApolloProvider>
    )
  }
}
export default App
