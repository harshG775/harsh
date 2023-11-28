import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes'
import DBContext from './clientDB/DBContext'

import './global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DBContext>
      <AppRoutes/>
    </DBContext>
  </React.StrictMode>,
)
