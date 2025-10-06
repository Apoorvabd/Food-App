import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'   // 👈 add this line
import Nav from './Nav.jsx'
import './index.css'
import Home from './Home.jsx'
import Card from './Card.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>   {/* 👈 Wrap everything inside HashRouter */}
      <UserContext>
        <Nav />
        <Home />
        <Card />
      </UserContext>
    </HashRouter>
  </StrictMode>
)
