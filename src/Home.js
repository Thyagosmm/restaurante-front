import React from 'react';
import { Link } from 'react-router-dom';
import { CContainer, CRow, CCol, CButton, CCard, CCardBody, CCardImage, CCardText } from '@coreui/react';
import './Home.css';
import logo from './logo.png';

function Home() {
  return (
    <CContainer className="home-container">
      <CRow>
        <CCol className="left-section">
          <div className="logo-and-title">
            <CCardImage src={logo} alt="Logo" className="logo" />
            <div className="title">
              <span>A</span>
              <span>COZINHA</span>
              <span>FOLHADA</span>
            </div>
          </div>
          <CCardText className="description">
            <span>COMIDA FEITA COM INGREDIENTES À</span>
            <span>BASE DE PLANTAS E MUITO AMOR</span>
          </CCardText>
        </CCol>
        <CCol className="right-section">
          <CCard className="content-box">
            <CCardBody className="buttons">
              <Link to="/cardapio">
                <CButton color="primary" className="mb-2 white-button">
                  Cardápio
                </CButton>
              </Link>
              <Link to="/pratosdaestacao">
                <CButton color="primary" className="mb-2 white-button">
                  Pratos da Estação
                </CButton>
              </Link>
              <Link to="/espaco">
                <CButton color="primary" className="mb-2 white-button">
                  O Espaço
                </CButton>
              </Link>
              <Link to="/delivery">
                <CButton color="primary" className="mb-2 white-button">
                  FAQ de Delivery
                </CButton>
              </Link>
              <Link to="/sobre">
                <CButton color="primary" className="mb-2 white-button">
                  Sobre Nós
                </CButton>
              </Link>
              <div className="placeholder"></div> {/* Espaço reservado */}
            </CCardBody>
            <CCardBody className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default Home;
