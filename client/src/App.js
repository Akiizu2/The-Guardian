import React from 'react'
import { Provider } from 'react-redux'

import { redux } from './config'
import { Router } from './component'


const store = redux.configStore()

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
