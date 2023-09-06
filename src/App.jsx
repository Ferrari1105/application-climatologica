import './App.css'
import React, { Fragment } from "react"
import Navbar from '../Components/Navbar.jsx'
import { Link } from 'react-router-dom'
const App = () => {

    return (
        <>
            <Navbar className="fixed-top"/>
            <h1 className='titulo'>Bienvenidos A EcoQuest</h1>
            <div className='centrardeHome'>
                <div className='cuadro'>
                    <p className='texto'>El medioambiente es el espacio en el que se desarrolla la vida de los distintos organismos favoreciendo su interacción.</p>
                    <p className='texto'>La idea de la pagina es incentivar a los usuarios a mejorar su habitos que afecten al medio ambiente</p>
                </div>
                <Link to="/Formulario" className='boton'>
                 <button>Comenzar formulario</button>
                </Link>
            </div>
        </>
    )
}

export default App