import React from 'react'
import { Route } from 'react-router'

import App from './App'

export default class RouterComponent extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={App} />
      </div>
    )
  }
}
