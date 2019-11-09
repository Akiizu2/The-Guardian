import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import reducer from '../redux/reducers'
import rootEpic from '../redux/epics'

const epicMiddleware = createEpicMiddleware()

export const configStore = () => {

  const store = createStore(
    reducer,
    applyMiddleware(epicMiddleware)
  )

  epicMiddleware.run(rootEpic)

  return store
}