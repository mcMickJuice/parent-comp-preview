import React from 'react'
import ReactDOM from 'react-dom'
import Form from './form'
import config from './config'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Form />
      <iframe width="800px" height="1000px" src={config.childFrameUrl} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
