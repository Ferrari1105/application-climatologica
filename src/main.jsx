import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom' 
import Home from './Home.jsx'
import Formulario from './Formulario.jsx'
import Perfil from './Perfil.jsx';
import Preguntas from './Preguntas.jsx';
import Donar from  './Donar.jsx'
import Navbar from '../Components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
const routes = createBrowserRouter([{
  path: "/",
  element: <App />
},{
  path: "/Formulario",
  element: <Formulario />
},{
  path: "/Home",
  element: <Home />
},{
  path: "/Perfil",
  element: <Perfil />
},{
  path: "/Preguntas",
  element: <Preguntas/>
},{
  path: "/Donar",
  element: <Donar/>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)