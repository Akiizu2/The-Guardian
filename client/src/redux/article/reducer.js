import { combineReducers } from 'redux'

const list = (state = { foo: 'test' }, actions) => {
  switch (actions.type) {
    case 'test':
      return {}
    default:
      return state
  }
}

export default combineReducers({
  list
})