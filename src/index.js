import React from 'react'
import ReactDOM from 'react-dom'
import Form from './form'
import config from './config'

function App() {
  return (
    <div
      className="App"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Form />
      <iframe width="1000px" height="1000px" src={config.childFrameUrl} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
