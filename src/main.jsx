import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './Nav.jsx'
import './index.css'
import Home from './Home.jsx'
import Card from './Card.jsx'
import UserContext from './context/UserContext.jsx'


createRoot(document.getElementById('root')).render(
  <UserContext>
    <Nav/>
    <Home/>
    </UserContext>
    

)
