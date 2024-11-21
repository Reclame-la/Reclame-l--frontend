import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReclamacoesInstituicao from "./pages/reclamacoesInstituicao";
import HomeAcademico from "./pages/HomeAcademico";
import Reclamacao from "./pages/Reclamacao";
import Inicial from "./pages/inicial";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reclamacoes" element={<HomeAcademico />} />
        <Route path="/reclamacao/:id" element={<Reclamacao />} />
        <Route path="/" element={<Inicial />} />
        <Route path="/reclamacoesinstituicao" element={<ReclamacoesInstituicao />} />
      </Routes>
    </Router>
  );
}

export default App;
