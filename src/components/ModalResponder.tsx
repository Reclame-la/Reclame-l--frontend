import { useState } from "react";

interface ModalResponderProps {
  show: boolean;
  onClose: () => void;
  comentarioId: number;
}

const ModalResponder: React.FC<ModalResponderProps> = ({
  comentarioId,
  show,
  onClose,
}) => {
  const [responseText, setResponseText] = useState("");
  const [showAlert, setShowAlert] = useState(false); // Estado para controlar a exibição do alerta

  const handleSendResponse = async () => {
    try {
      const response = await fetch(
        `http://localhost:8085/api/respostas/criarResposta/${comentarioId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            conteudoResposta: responseText,
            matriculaUsuario: 123456,
          }),
        }
      );

      if (response.ok) {
        console.log("Resposta enviada com sucesso");
        setResponseText(""); // Limpa o campo de resposta
        setShowAlert(true); // Exibe o alerta de sucesso

        // Após 5 segundos, fecha o modal e oculta o alerta
        setTimeout(() => {
          setShowAlert(false);
          onClose(); // Fecha o modal
        }, 5000);
      } else {
        console.error("Erro ao enviar resposta");
      }
    } catch (error) {
      console.error("Erro na requisição", error);
    }
  };

  return (
    <div
      className={`modal ${show ? "d-block" : "d-none"}`}
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" style={{ color: "#ff7f00" }}>
              Responder
            </h5>
            <button
              type="button"
              className="btn-close"
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

            {showAlert && (
              <div className="alert alert-success mt-3" role="alert">
                Resposta enviada com sucesso!
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              style={{ backgroundColor: "#ff7f00", color: "#fff" }}
              type="button"
              className="btn"
              onClick={handleSendResponse}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalResponder;
