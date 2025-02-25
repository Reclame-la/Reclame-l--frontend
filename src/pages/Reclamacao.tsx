import { useLocation, useNavigate } from "react-router-dom";
import ReclamacoesItem from "../components/ReclamacoesItem";
import "../styles/Reclamacao.css";
import { useState, useEffect } from "react";

const Reclamacao = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, titulo, etiqueta, descricao, qtdCurtidas } = location.state || {};
  const [showResponderModal, setShowResponderModal] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [responseText, setResponseText] = useState("");
  const [alertMessage, setAlertMessage] = useState(""); 
  const [alertType, setAlertType] = useState(""); 

  // Função para buscar comentários
  const fetchComentarios = async () => {
    try {
      const response = await fetch("http://localhost:8085/api/respostas");
      const data = await response.json();

      // Define valores padrão para os campos que podem estar ausentes
      const comentariosComDefaults = data.map((resposta) => ({
        titulo: resposta.titulo || `Resposta para: ${titulo}`,
        descricao: resposta.conteudoResposta,
        etiqueta: etiqueta,
        qtdCurtidas: resposta.qtdCurtidas || 0,
      }));

      setComentarios(comentariosComDefaults);
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
    }
  };

  useEffect(() => {
    fetchComentarios();
  }, [etiqueta]);

  const openResponderModal = () => {
    setShowResponderModal(true);
  };

  const closeResponderModal = () => {
    setShowResponderModal(false);
    setResponseText(""); // Limpa o texto de resposta ao fechar o modal
  };

  const handleSendResponse = async () => {
    console.log("Comentario ID usado no envio: " + id);
    try {
      const response = await fetch(
        `http://localhost:8085/api/respostas/criarResposta/${id}`,
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
        setAlertMessage("Resposta enviada com sucesso!");
        setAlertType("success");
      } else {
        console.error("Erro ao enviar resposta");
        setAlertMessage("Erro ao enviar a resposta. Tente novamente.");
        setAlertType("error");
      }

      // Fecha o modal imediatamente após o envio da resposta
      closeResponderModal();

      // Aguarda 5 segundos antes de ocultar o feedback
      setTimeout(() => {
        setAlertMessage(""); // Oculta a mensagem de feedback após 5 segundos
      }, 5000);

      // Atualiza os comentários após o envio da resposta
      fetchComentarios();
    } catch (error) {
      console.error("Erro na requisição", error);
      setAlertMessage("Erro ao enviar a resposta. Tente novamente.");
      setAlertType("error");

      // Fecha o modal imediatamente após o erro
      closeResponderModal();

      // Aguarda 5 segundos antes de ocultar o feedback
      setTimeout(() => {
        setAlertMessage(""); // Oculta a mensagem de feedback após 5 segundos
      }, 5000);
    }
  };

  return (
    <>
      <div className="reclamacao-detalhe-container">
        <div className="header-content">
          <a className="voltar-button" onClick={() => navigate("/reclamacoes")}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </a>
          <h1>Reclamação</h1>
        </div>

        <ReclamacoesItem
          id={0}
          titulo={titulo}
          etiqueta={etiqueta}
          descricao={descricao}
          qtdCurtidas={qtdCurtidas}
          showResponderButton={false}
        />

        <button
          className="adicionar-comentario-btn"
          onClick={openResponderModal}
        >
          <i className="bi bi-plus"></i> Adicionar Comentário
        </button>

        {/* Feedback Visual */}
        {alertMessage && (
          <div className={`alert alert-${alertType}`} role="alert">
            {alertMessage}
          </div>
        )}

        <h2>Comentários</h2>
        <div className="comentario">
          {comentarios.map((item, index) => (
            <ReclamacoesItem
              key={index}
              id={id}
              titulo={item.titulo}
              etiqueta={item.etiqueta}
              descricao={item.descricao}
              qtdCurtidas={item.qtdCurtidas}
              showResponderButton={false}
            />
          ))}
        </div>
      </div>

      {/* Modal Responder */}
      {showResponderModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex={-1}
          aria-labelledby="responderModalLabel"
          aria-hidden="true"
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="responderModalLabel"
                  style={{ color: "#ff7f00" }}
                >
                  Responder
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeResponderModal}
                  aria-label="Close"
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
      )}
    </>
  );
};

export default Reclamacao;
