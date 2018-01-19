import React, { PureComponent } from 'react'
import { Button } from 'antd'
import fetch from './utils/fetch'
import logo from './logo.svg'
import './App.css'

class App extends PureComponent {
  componentWillMount() {
    fetch('/test').then(res => console.log(res.data))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flex: '1 1 auto',
              marginRight: '20px',
            }}
          >
            <div style={{ display: 'flex', flex: '1 1 30%' }}>aaaa</div>
            <div style={{ display: 'flex', flex: '1 1 80%' }}>bbb</div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flex: '1 1 auto',
              marginRight: '20px',
            }}
          >
            <div style={{ display: 'flex' }}>ccc</div>
            <div style={{ display: 'flex' }}>ddd</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flex: '1 1 auto' }}>
            <div style={{ display: 'flex' }}>eee</div>
            <div style={{ display: 'flex' }}>fff</div>
          </div>
        </div>
        <Button>测试</Button>
      </div>
    )
  }
}

export default App
