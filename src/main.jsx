import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom' 
import Home from './Home.jsx'
import Formulario from './Formulario.jsx'
import Perfil from './Perfil.jsx';
import Preguntas from './Preguntas.jsx';
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
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)