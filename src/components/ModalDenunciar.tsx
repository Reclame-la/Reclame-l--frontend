import { useEffect } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ModalDenunciar: React.FC<ModalProps> = ({
  show,
  onClose,
  onConfirm,
}) => {
  useEffect(() => {
    if (show) {
      const modalElement = document.getElementById('customModal');
      const modalInstance = new window.bootstrap.Modal(modalElement!);
      modalInstance.show();
    }
  }, [show]);

  // Função para lidar com o clique no botão "Denunciar"
  const handleConfirm = () => {
    alert("Denúncia realizada!") 
    onConfirm(); 
    onClose(); 
  };

  return (
    <div
      className="modal fade"
      id="customModal"
      tabIndex={-1}
      aria-labelledby="customModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="customModalLabel" style={{color: '#ff7f00'}}>
            Confirmar Denúncia
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">Tem certeza que deseja denunciar? Nosso objetivo é promover um ambiente de compreensão e feedback respeitoso.</div>
          <div className="modal-footer">
            <button style={{ backgroundColor: '#ff7f00', color: '#fff' }} type="button" className="btn" onClick={handleConfirm}>
              Denunciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDenunciar;
