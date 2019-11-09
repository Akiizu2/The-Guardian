import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import reducer from '../redux/reducers'
import rootEpic from '../redux/epics'
import { axios$ } from '../common/utils'

// Epics dependencies
const dependencies = {
  axios$,
}

const epicMiddleware = createEpicMiddleware({ dependencies })

export const configStore = () => {

  const store = createStore(
    reducer,
    applyMiddleware(epicMiddleware)
  )

  epicMiddleware.run(rootEpic)

  return store
}