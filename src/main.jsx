import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; // Importa BrowserRouter y Routes

import App from './Pantallas/App.jsx';
import Home from './Pantallas/Home.jsx';
import Formulario from './Pantallas/Formulario.jsx';
import Perfil from './Pantallas/Perfil.jsx';
import Preguntas from './Pantallas/Preguntas.jsx';
import Donar from './Pantallas/Donar.jsx';
import { UsuarioProvider } from './context/usuarioContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route path="/" element={<App />} />
            <Route index element={<App />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Formulario" element={<Formulario />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Preguntas" element={<Preguntas />} />
            <Route path="/Donar" element={<Donar />} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </UsuarioProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
