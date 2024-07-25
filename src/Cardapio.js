import React from 'react';
import { CContainer, CRow, CCol, CImage, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import logo from './logo.png';
import './Cardapio.css';

function Cardapio() {
  return (
    <CContainer fluid className="cardapio-container">
      <CRow className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <CCol xs="auto" className="text-center">
          <CRow className="align-items-center justify-content-center logo-and-title">
            <CCol xs="auto">
              <CImage src={logo} alt="Logo" className="logo" />
            </CCol>
            <CCol xs="auto">
              <CCardBody>
                <CCardTitle className="title">Cardápio</CCardTitle>
              </CCardBody>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CCardText className="description">
                <div>COMIDA FEITA COM INGREDIENTES À</div>
                <div>BASE DE PLANTAS E MUITO AMOR</div>
              </CCardText>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default Cardapio;
