import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserContex from './context/UserContex'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContex>
    <App />
    </UserContex>
  </React.StrictMode>
)
