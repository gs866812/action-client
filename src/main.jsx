import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Routers from './Components/Routers'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <div className='mx-auto'>
      <Routers/>
    </div>
  </React.StrictMode>,
)
