import { useEffect, useRef, useState } from 'react';

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
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalInstanceRef = useRef<any>(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (show) {
      modalInstanceRef.current = new window.bootstrap.Modal(modalRef.current!);
      modalInstanceRef.current.show();
    } else if (modalInstanceRef.current) {
      modalInstanceRef.current.hide();
    }
  }, [show]);

  const handleConfirm = () => {
    setShowAlert(true); // Mostra o alerta
  
    // Oculta o alerta e fecha o modal após 5 segundos
    setTimeout(() => {
      onConfirm()
      setShowAlert(false);
      if (modalInstanceRef.current) {
        modalInstanceRef.current.hide(); // Fecha o modal
      }
      onClose(); // Chama a função de fechamento
    }, 5000);
  };

  return (
    <div
      className="modal fade"
      id="customModal"
      tabIndex={-1}
      aria-labelledby="customModalLabel"
      aria-hidden="true"
      ref={modalRef}
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
          <div className="modal-body">
            Tem certeza que deseja denunciar? Nosso objetivo é promover um ambiente de compreensão e feedback respeitoso.
            {showAlert && (
              <div className="alert alert-success" role="alert">
                Denúncia realizada com sucesso!
              </div>
            )}  
          </div>
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