import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeAcademico from "./pages/HomeAcademico"
import Reclamacao from './pages/Reclamacao';
import Inicial from './pages/inicial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reclamacoes" element={<HomeAcademico />} />
        <Route path="/reclamacao/:id" element={<Reclamacao />} />
        <Route path="/inicial" element={<Inicial />} />
      </Routes>
    </Router>
  )
}

export default App
