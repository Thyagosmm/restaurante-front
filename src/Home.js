import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './logo.png';

function Home() {
  return (
    <div className="home-container">
      <div className="left-section">
        <div className="logo-and-title">
          <img src={logo} alt="Logo" className="logo" />
          <div className="title">
            <span>A</span>
            <span>COZINHA</span>
            <span>FOLHADA</span>
          </div>
        </div>
        <div className="description">
          <span>COMIDA FEITA COM INGREDIENTES À</span>
          <span>BASE DE PLANTAS E MUITO AMOR</span>
        </div>
      </div>
      <div className="right-section">
        <div className="content-box">
          <div className="buttons">
            <Link to="/cardapio">
              <button>Cardápio</button>
            </Link>
            <button>Pratos da Estação</button>
            <button>O Espaço</button>
            <button>FAQ de Delivery</button>
            <button>Sobre Nós</button>
            <div className="placeholder"></div> {/* Espaço reservado */}
          </div>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
