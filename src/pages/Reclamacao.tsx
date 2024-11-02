import { useLocation, useNavigate } from 'react-router-dom';
import ReclamacoesItem from '../components/ReclamacoesItem';
import '../styles/Reclamacao.css';
import ModalResponder from '../components/ModalResponder';
import { useState } from 'react';

const Reclamacao = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { titulo, etiqueta, descricao } = location.state || {};
  const [showResponderModal, setShowResponderModal] = useState(false);

  const comentarios = [
    {
        titulo: "Também aconteceu comigo",
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
    {
        titulo: "Ocorreu comigo",
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
];

const openResponderModal = () => {
  setShowResponderModal(true);
};

const closeResponderModal = () => {
  setShowResponderModal(false);
};

  return (
    <>
    <div className="reclamacao-detalhe-container">
      <div className='header-content'>
        <a className="voltar-button" onClick={() => navigate('/reclamacoes')}><i className="bi bi-arrow-left-circle-fill"></i></a>
        <h1>Reclamação</h1>
      </div>
      
      <ReclamacoesItem titulo={titulo}
                    etiqueta={etiqueta}
                    descricao={descricao}
                    showResponderButton={false}/>

    <button className="adicionar-comentario-btn" onClick={openResponderModal}><i className="bi bi-plus"></i> Adicionar Comentário</button>

      <h2>Comentários</h2>
      <div className="comentario">
      {comentarios.map((item, index) => (
                <ReclamacoesItem
                    titulo={item.titulo}
                    etiqueta={etiqueta}
                    descricao={item.descricao}
                    showResponderButton={false}
                />
            ))}
      </div>
    </div>

    {/* Modal Responder */}
    <ModalResponder
        show={showResponderModal}
        onClose={closeResponderModal}
      />
    </>
  );
};

export default Reclamacao;
