import React from 'react';
import './PratosDaEstacao.css';
import logo from './logo.png';
function PratosDaEstacao() {
  return (
    <div className="cardapio-container">
      <div className="left-section">
        <div className="logo-and-title">
          <img src={logo} alt="Logo" className="logo" />
          <div className="title">
            <span>Pratos da Estação</span>
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

export default PratosDaEstacao;
