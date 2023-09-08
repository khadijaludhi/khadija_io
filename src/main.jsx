import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css' 
// used to be index.css but now we're using tailwind after installation

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
