import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Reclamacoes.css'; 
import ModalDenunciar from './ModalDenunciar';
import ModalResponder from './ModalResponder';

interface ReclamacaoItemProps {
  titulo: string;
  etiqueta: string;
  descricao: string;
  showResponderButton?: boolean;
}

const ReclamacoesItem: React.FC<ReclamacaoItemProps> = ({
  titulo,
  etiqueta,
  descricao,
  showResponderButton = true,
}) => {
  const navigate = useNavigate();
  const [showDenunciar, setShowDenunciar] = useState(false);
  const [showDenuciarModal, setDenunciarShowModal] = useState(false);
  const [showResponderModal, setShowResponderModal] = useState(false);

  const handleClick = () => {
    navigate(`/reclamacao/${titulo}`, { state: { titulo, etiqueta, descricao } });
  };

  const toggleDenunciar = () => {
    setShowDenunciar(!showDenunciar);
  };

  const openModal = () => {
    setDenunciarShowModal(true);
  };

  const closeModal = () => {
    setDenunciarShowModal(false);
  };

  const handleConfirm = () => {
    console.log('Denúncia confirmada!');
    closeModal();
  };

  const openResponderModal = () => {
    setShowResponderModal(true);
  };

  const closeResponderModal = () => {
    setShowResponderModal(false);
  };

  return (
    <>
    <div className="reclamacao-item">
      <div className="reclamacao-header">
        <div className="reclamacao-description" onClick={handleClick}>
          <span className="reclamacao-titulo" onClick={handleClick}>{titulo}</span>
          <span className="reclamacoes-etiqueta">{etiqueta}</span>
        </div>
        <div className="reclamacao-options">
          <i className="bi bi-three-dots-vertical" onClick={toggleDenunciar}></i>
          {showDenunciar && (
            <div className="denunciar-box">
              <i className="bi bi-flag"></i>
              <button className="denunciar-btn" onClick={openModal}>
                Denunciar
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="reclamacao-descricao">{descricao}</p>
      {/* Exibe o botão Responder apenas se showResponderButton for verdadeiro */}
        {showResponderButton && (
          <button className="responder-btn" onClick={openResponderModal}>Responder</button>
        )}
    </div>

    {/* Modal Responder */}
    <ModalResponder
        show={showResponderModal}
        onClose={closeResponderModal}
      />

      {/* Modal Denunciar */}
      <ModalDenunciar
        show={showDenuciarModal}
        onClose={closeModal}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default ReclamacoesItem;
