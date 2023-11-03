import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  

const Home = () => {
  return (
    <div className="backgroundh">
      <div className="container text-center content">
        <h1 className="my-5">Bienvenido a Kicks</h1>
        <p className="lead">Tu destino para encontrar los zapatos perfectos.</p>
        <nav>
          <ul className="list-unstyled">
            <li>
              <Link to="/login" className="btn btn-dark mr-2">
                Iniciar Sesión
              </Link>
            </li>
            <li>
              <Link to="/Logup" className="btn btn-dark mr-2">
                Registrarse
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
