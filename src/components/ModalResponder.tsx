import { useState, useEffect } from 'react';

interface ModalResponderProps {
  show: boolean;
  onClose: () => void;
}

const ModalResponder: React.FC<ModalResponderProps> = ({ show, onClose }) => {
  const [responseText, setResponseText] = useState('');

  useEffect(() => {
    if (show) {
      const modalElement = document.getElementById('responderModal');
      const modalInstance = new window.bootstrap.Modal(modalElement!);
      modalInstance.show();
    }
  }, [show]);

  const handleSendResponse = () => {
    console.log('Resposta enviada:', responseText);
    onClose(); // Fecha o modal após enviar
  };

  return (
    <div
      className="modal fade"
      id="responderModal"
      tabIndex={-1}
      aria-labelledby="responderModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="responderModalLabel" style={{color: '#ff7f00'}}>Responder</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <textarea
              className="form-control"
              rows={4}
              placeholder="Digite sua resposta aqui..."
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
            ></textarea>
          </div>
          <div className="modal-footer">
            <button style={{ backgroundColor: '#ff7f00', color: '#fff' }} type="button" className="btn" onClick={handleSendResponse}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalResponder;
