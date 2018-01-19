import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './store/reducers'
import RouterComponent from './router'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const history = createHistory()

const logger = createLogger({ collapsed: true })

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk, logger, routerMiddleware(history))),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RouterComponent />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
