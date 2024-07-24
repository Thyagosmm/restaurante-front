import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cardapio from './Cardapio';
import PratosDaEstacao from './PratosDaEstacao';
import Espaco from './Espaco';
import Delivery from './Delivery';
import Sobre from './Sobre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/pratosdaestacao" element={<PratosDaEstacao />} />
        <Route path="/espaco" element={<Espaco />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
