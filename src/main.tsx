import React from 'react'
import ReactDOM from 'react-dom/client'
import { ItemsContextProvider } from 'context/Items'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ItemsContextProvider>
      <App/>
    </ItemsContextProvider>
  </React.StrictMode>
)