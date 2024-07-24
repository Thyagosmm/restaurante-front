import React from 'react';
import './Espaco.css'; // Certifique-se de criar e editar esse arquivo CSS
import logo from './logo.png';
function Espaco() {
  return (
    <div className="cardapio-container">
      <div className="left-section">
        <div className="logo-and-title">
          <img src={logo} alt="Logo" className="logo" />
          <div className="title">
            <span>O Espaço</span>
          </div>
        </div>
        <div className="description">
          <span>COMIDA FEITA COM INGREDIENTES À</span>
          <span>BASE DE PLANTAS E MUITO AMOR</span>
        </div>
      </div>
    </div>
  );
}

export default Espaco;
