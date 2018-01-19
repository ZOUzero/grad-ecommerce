import { combineReducers } from 'redux'

function testReducer(state = {}, action) {
  switch (action.type) {
    case 'test':
      return state
    default:
      return state
  }
}

const reducers = combineReducers({
  test: testReducer,
})

export default reducers
