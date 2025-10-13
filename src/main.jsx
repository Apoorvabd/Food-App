import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'      // ✅ Import Provider
import { store } from './redux/store.js'          // ✅ Import your store

import Nav from './Nav.jsx'
import './index.css'
import Home from './Home.jsx'
import Card from './Card.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>          {/* ✅ Wrap entire app */}
      <HashRouter>
        <UserContext>
          <Nav />
          <Home />
          <Card />
        </UserContext>
      </HashRouter>
    </Provider>
  </StrictMode>
)
