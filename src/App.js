import React from 'react'
import Timer from './components/Timer'
import {Provider} from 'react-redux'
import {store} from './components/redux/store'
const App = () => {
  return (
    <Provider store ={store}>
    <Timer/>
      
    </Provider>
  )
}

export default App
