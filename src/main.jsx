import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import './styles/styles.css' 


const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)