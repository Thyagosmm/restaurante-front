import React from 'react';
import { CContainer, CRow, CCol, CImage, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import logo from './logo.png';
import './Espaco.css';

function Espaco() {
  return (
    <CContainer fluid className="espaco-container">
      <CRow className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <CCol xs="auto" className="text-center">
          <CRow className="align-items-center justify-content-center logo-and-title">
            <CCol xs="auto">
              <CImage src={logo} alt="Logo" className="logo" />
            </CCol>
            <CCol xs="auto">
              <CCardBody>
                <CCardTitle className="title">O Espaço</CCardTitle>
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

export default Espaco;
